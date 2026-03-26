import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Nova",
  description: "Master your learning with flashcards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f9f9f9] text-[#1a1c1c] antialiased">
        {/* <body className="bg-surface font-body text-on-surface antialiased"> */}
        <div className="flex">
          {/* 1. Sidebar Fijo */}
          <Sidebar />
          <Header />
          {/* 2. Contenedor de Contenido */}
          <div className="flex-1 ml-[240px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
