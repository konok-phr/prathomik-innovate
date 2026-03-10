import { ShoppingCart, GraduationCap, FolderKanban, School } from "lucide-react";

import posScreenshot from "@/assets/product-pos-screenshot.jpg";
import trackerScreenshot from "@/assets/product-tracker-screenshot.jpg";
import hubScreenshot from "@/assets/product-hub-screenshot.jpg";
import eduosScreenshot from "@/assets/product-eduos-screenshot.jpg";

import clientTechvista from "@/assets/client-techvista.png";
import clientCloudsync from "@/assets/client-cloudsync.png";
import clientDatapulse from "@/assets/client-datapulse.png";
import clientNexaflow from "@/assets/client-nexaflow.png";

export const products = [
  {
    slug: "prathomik-pos",
    icon: ShoppingCart,
    name: "Prathomik POS",
    tagline: "Smart Inventory & Point of Sale",
    description: "A SaaS-based POS system where shop owners can subscribe and manage their inventory, sales, and analytics — all from one dashboard.",
    longDescription: `Prathomik POS is a comprehensive, subscription-based Point of Sale system designed for modern retail businesses. Whether you run a single shop or a chain of stores, our POS solution provides real-time inventory tracking, sales analytics, and multi-store management from a single unified dashboard.

Built with cutting-edge technology, Prathomik POS handles everything from barcode scanning and receipt generation to customer management and detailed financial reports. The system is cloud-based, ensuring your data is always backed up and accessible from anywhere.

Our AI-powered analytics engine provides actionable insights into your sales patterns, helping you make data-driven decisions about stock replenishment, pricing strategies, and promotional campaigns.`,
    features: ["Subscription-based", "Real-time Inventory", "Sales Analytics", "Multi-store Support", "Barcode Scanning", "Receipt Generation", "Customer Management", "Financial Reports"],
    screenshot: posScreenshot,
    clients: [clientTechvista, clientCloudsync],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    url: "https://pos.prathomik.com",
    color: "from-primary to-cyan-glow",
  },
  {
    slug: "project-tracker",
    icon: GraduationCap,
    name: "Project Tracker",
    tagline: "Teacher-Student Collaboration",
    description: "A SaaS platform designed for academic collaboration. Teachers and students can communicate, track projects, manage thesis work, and share feedback seamlessly.",
    longDescription: `Project Tracker revolutionizes academic collaboration by providing a dedicated platform for teachers and students to work together on projects and thesis work. The platform bridges the communication gap between educators and learners with real-time messaging, progress tracking, and structured feedback systems.

Students can submit their work, receive detailed feedback, and track their progress through milestones. Teachers get a bird's-eye view of all ongoing projects, can set deadlines, and provide structured evaluations. The platform supports file sharing, version control for documents, and automated progress reports.

With built-in video conferencing, shared whiteboards, and collaborative document editing, Project Tracker creates a virtual classroom experience that enhances the traditional supervisory relationship.`,
    features: ["Thesis Management", "Real-time Chat", "Progress Tracking", "File Sharing", "Video Conferencing", "Milestone Tracking", "Automated Reports", "Peer Review"],
    screenshot: trackerScreenshot,
    clients: [clientDatapulse, clientNexaflow],
    techStack: ["React", "Laravel", "MySQL", "WebSocket", "Redis"],
    url: "https://tracker.prathomik.com",
    color: "from-cyan-glow to-primary",
  },
  {
    slug: "project-hub",
    icon: FolderKanban,
    name: "Project Hub",
    tagline: "University Project Management",
    description: "A comprehensive project management solution built for universities. Organize, assign, and monitor academic projects with powerful collaboration tools.",
    longDescription: `Project Hub is the ultimate project management platform built specifically for university environments. It provides departments, faculty members, and students with powerful tools to organize, assign, track, and evaluate academic projects at scale.

The platform features Kanban boards, Gantt charts, and timeline views for visualizing project progress. Team formation tools allow students to find collaborators, while faculty can oversee multiple teams simultaneously. Built-in resource allocation ensures fair distribution of lab equipment, computing resources, and mentorship time.

Advanced reporting generates insights on department-wide project performance, student engagement, and completion rates — helping administrators make informed decisions about curriculum and resource planning.`,
    features: ["Team Management", "Milestone Tracking", "Resource Allocation", "Reports & Insights", "Kanban Boards", "Gantt Charts", "Role-based Access", "Department Analytics"],
    screenshot: hubScreenshot,
    clients: [clientTechvista, clientDatapulse],
    techStack: ["Next.js", "Python", "PostgreSQL", "Docker", "AWS"],
    url: "https://hub.prathomik.com",
    color: "from-primary to-cyan-glow",
  },
  {
    slug: "eduos",
    icon: School,
    name: "EduOS",
    tagline: "Complete Education Ecosystem",
    description: "A full ecosystem for schools and colleges — encompassing student management, attendance, grading, fee management, and everything in between.",
    longDescription: `EduOS is the most comprehensive education management system available, designed to handle every aspect of school and college administration. From student enrollment to graduation, EduOS manages the entire educational lifecycle with precision and ease.

The platform includes modules for student information management, attendance tracking with biometric integration, grade computation and report card generation, fee collection and financial management, timetable scheduling, library management, and parent communication portals.

EduOS also features AI-powered analytics that predict student performance, identify at-risk learners, and suggest personalized intervention strategies. The mobile app ensures parents stay connected with real-time notifications about their children's academic progress and school activities.`,
    features: ["Student Portal", "Attendance System", "Grade Management", "Fee & Finance", "Timetable Scheduler", "Library Management", "Parent Portal", "AI Analytics"],
    screenshot: eduosScreenshot,
    clients: [clientCloudsync, clientNexaflow],
    techStack: ["Flutter", "Laravel", "MySQL", "Firebase", "AWS"],
    url: "https://eduos.prathomik.com",
    color: "from-cyan-glow to-primary",
  },
];
