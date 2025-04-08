import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kalki - The Ultimate Spreadsheet App for Effortless Data Management",
    short_name: "Kalki",
    description:
      "Discover Kalki, a powerful and intuitive spreadsheet app designed to simplify data management. With sleek features, collaborative tools, and seamless integration, Kalki empowers you to organize, analyze, and visualize data like never before. Perfect for professionals, students, and anyone who values productivity.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
