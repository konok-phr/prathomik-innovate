# Prathomik Frontend — Laravel Backend Integration Guide

This document explains how to connect this React (Vite + TypeScript) frontend with a Laravel backend API.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Laravel Backend Setup](#laravel-backend-setup)
3. [CORS Configuration](#cors-configuration)
4. [API Routes & Controllers](#api-routes--controllers)
5. [Frontend API Client Setup](#frontend-api-client-setup)
6. [Authentication (Sanctum)](#authentication-sanctum)
7. [Environment Variables](#environment-variables)
8. [Deployment](#deployment)

---

## Prerequisites

- **PHP** >= 8.1
- **Composer** >= 2.x
- **Laravel** >= 10.x
- **Node.js** >= 18.x
- **MySQL** / PostgreSQL database
- This React frontend project

---

## Laravel Backend Setup

### 1. Create a new Laravel project

```bash
composer create-project laravel/laravel prathomik-backend
cd prathomik-backend
```

### 2. Configure `.env`

```env
APP_NAME=Prathomik
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=prathomik
DB_USERNAME=root
DB_PASSWORD=your_password

# Frontend URL (for CORS & Sanctum)
FRONTEND_URL=http://localhost:8080
SANCTUM_STATEFUL_DOMAINS=localhost:8080
SESSION_DOMAIN=localhost
```

### 3. Run migrations

```bash
php artisan migrate
```

### 4. Start the server

```bash
php artisan serve
# Runs at http://localhost:8000
```

---

## CORS Configuration

### Edit `config/cors.php`

```php
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:8080')],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => true,
];
```

> **Important:** `supports_credentials` must be `true` if using Sanctum cookie-based auth.

---

## API Routes & Controllers

### 1. Create Models & Migrations

```bash
# Contact form submissions
php artisan make:model Contact -mcr

# Career applications
php artisan make:model CareerApplication -mcr

# Newsletter subscribers
php artisan make:model Subscriber -mcr
```

### 2. Example Migration — `contacts`

```php
// database/migrations/xxxx_create_contacts_table.php
Schema::create('contacts', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->string('phone')->nullable();
    $table->string('subject')->nullable();
    $table->text('message');
    $table->timestamps();
});
```

### 3. Define API Routes — `routes/api.php`

```php
<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CareerApplicationController;
use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TestimonialController;

// Public routes
Route::post('/contact', [ContactController::class, 'store']);
Route::post('/subscribe', [SubscriberController::class, 'store']);
Route::post('/career/apply', [CareerApplicationController::class, 'store']);

Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{slug}', [NewsController::class, 'show']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{slug}', [ProductController::class, 'show']);

Route::get('/testimonials', [TestimonialController::class, 'index']);

// Protected routes (admin panel)
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/admin/news', NewsController::class)->except(['index', 'show']);
    Route::apiResource('/admin/products', ProductController::class)->except(['index', 'show']);
    Route::get('/admin/contacts', [ContactController::class, 'index']);
    Route::get('/admin/applications', [CareerApplicationController::class, 'index']);
});
```

### 4. Example Controller — `ContactController`

```php
<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:100',
            'email'   => 'required|email|max:255',
            'phone'   => 'nullable|string|max:20',
            'subject' => 'nullable|string|max:200',
            'message' => 'required|string|max:2000',
        ]);

        $contact = Contact::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Message sent successfully!',
            'data'    => $contact,
        ], 201);
    }

    public function index(): JsonResponse
    {
        return response()->json(Contact::latest()->paginate(20));
    }
}
```

---

## Frontend API Client Setup

### 1. Install Axios

```bash
npm install axios
```

### 2. Create API client — `src/lib/api.ts`

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // Required for Sanctum
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized — redirect to login
      window.location.href = "/login";
    }
    if (error.response?.status === 422) {
      // Validation errors
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default api;
```

### 3. Create API hooks — `src/hooks/useApi.ts`

```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

// Fetch all news from backend
export const useNews = () =>
  useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const { data } = await api.get("/news");
      return data;
    },
  });

// Fetch single news article
export const useNewsDetail = (slug: string) =>
  useQuery({
    queryKey: ["news", slug],
    queryFn: async () => {
      const { data } = await api.get(`/news/${slug}`);
      return data;
    },
  });

// Submit contact form
export const useSubmitContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (formData: {
      name: string;
      email: string;
      phone?: string;
      subject?: string;
      message: string;
    }) => {
      const { data } = await api.post("/contact", formData);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};

// Submit career application
export const useSubmitApplication = () =>
  useMutation({
    mutationFn: async (formData: FormData) => {
      const { data } = await api.post("/career/apply", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return data;
    },
  });
```

### 4. Usage example in a component

```tsx
import { useSubmitContact } from "@/hooks/useApi";
import { toast } from "sonner";

const ContactForm = () => {
  const { mutate, isPending } = useSubmitContact();

  const handleSubmit = (formData) => {
    mutate(formData, {
      onSuccess: () => toast.success("Message sent!"),
      onError: (err) => toast.error(err.message || "Failed to send"),
    });
  };

  // ... form JSX
};
```

---

## Authentication (Sanctum)

### 1. Install Sanctum in Laravel

```bash
php artisan install:api
```

### 2. Configure Sanctum — `config/sanctum.php`

```php
'stateful' => explode(',', env(
    'SANCTUM_STATEFUL_DOMAINS',
    'localhost:8080,localhost:8000'
)),
```

### 3. Add Sanctum middleware — `app/Http/Kernel.php`

```php
'api' => [
    \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
    'throttle:api',
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
],
```

### 4. Auth API Routes — `routes/api.php`

```php
use App\Http\Controllers\AuthController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
```

### 5. AuthController

```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name'     => $validated['name'],
            'email'    => $validated['email'],
            'password' => Hash::make($validated['password']),
        ]);

        Auth::login($user);

        return response()->json(['user' => $user], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required|string',
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $request->session()->regenerate();

        return response()->json(['user' => Auth::user()]);
    }

    public function logout(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
```

### 6. Frontend auth hook — `src/hooks/useAuth.ts`

```typescript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const user = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await api.get("/user");
      return data;
    },
    retry: false,
  });

  const login = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      await api.get("/sanctum/csrf-cookie", {
        baseURL: import.meta.env.VITE_API_URL?.replace("/api", ""),
      });
      const { data } = await api.post("/login", credentials);
      return data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["user"] }),
  });

  const logout = useMutation({
    mutationFn: () => api.post("/logout"),
    onSuccess: () => queryClient.setQueryData(["user"], null),
  });

  return { user: user.data, isLoading: user.isLoading, login, logout };
};
```

---

## Environment Variables

### Frontend (`.env`)

```env
VITE_API_URL=http://localhost:8000/api
```

### Production

```env
VITE_API_URL=https://api.prathomik.com/api
```

> Access in code: `import.meta.env.VITE_API_URL`

---

## Deployment

### Option A: Same Server

```
/var/www/prathomik/
├── backend/          ← Laravel (serves API)
└── frontend/         ← Built React app
```

**Nginx config:**

```nginx
server {
    listen 80;
    server_name prathomik.com;

    # Frontend (React)
    root /var/www/prathomik/frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy to Laravel
    location /api {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Option B: Separate Servers

| Service  | Domain              |
|----------|---------------------|
| Frontend | `prathomik.com`     |
| Backend  | `api.prathomik.com` |

Update CORS and Sanctum configs accordingly.

### Build Frontend for Production

```bash
npm run build
# Output: dist/ folder — deploy this
```

---

## Quick Checklist

- [ ] Laravel project created & configured
- [ ] Database migrated
- [ ] CORS configured with frontend URL
- [ ] API routes defined
- [ ] Sanctum installed (if auth needed)
- [ ] Frontend `VITE_API_URL` set
- [ ] `axios` installed in frontend
- [ ] API client (`src/lib/api.ts`) created
- [ ] API hooks created & used in components
- [ ] Tested locally (both servers running)
- [ ] Deployed & DNS configured

---

## Support

For questions, contact the Prathomik development team.
