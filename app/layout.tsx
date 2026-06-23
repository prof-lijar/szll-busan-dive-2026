import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SZLL | DIVE 2026 Team",
  description: "Team SZLL profile for the Busan DIVE 2026 hackathon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
