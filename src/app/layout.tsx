import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendure Digital Storefront App",
  description: "Headless e-commerce platform with instant cart checkout & merchant management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-neutral-950 text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
