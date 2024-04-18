import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anivers Minecraft Server",
  description: "Join our Minecraft server for an immersive and fun gaming experience. We offer a variety of game modes and unique features.",
  openGraph: {
    images: "https://raw.githubusercontent.com/fdvky1/aniversrock/main/public/images/server-image.jpg",
    title: "Anivers Minecraft Server",
    description: "Join our Minecraft server for an immersive and fun gaming experience. We offer a variety of game modes and unique features.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
