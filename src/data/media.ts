export type MediaItem = {
  id: number;
  type: "video" | "image";
  title: string;
  videoUrl?: string;
  imageUrl?: string;
};

export const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "video",
    title: "EduTech BD - Client Review",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    type: "video",
    title: "GreenMart - Client Review",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    type: "video",
    title: "Product Launch Promo",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    type: "image",
    title: "Team Event 2024",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 5,
    type: "image",
    title: "Office Launch",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 6,
    type: "image",
    title: "Client Agreement - EduTech BD",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 7,
    type: "image",
    title: "Workshop Promo",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 8,
    type: "image",
    title: "Award Ceremony",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 9,
    type: "image",
    title: "Client Agreement - GreenMart",
    imageUrl: "/placeholder.svg",
  },
];
