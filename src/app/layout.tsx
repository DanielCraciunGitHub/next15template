import type { Metadata, Viewport } from "next";

import "./globals.css";

import { baseMetadata, baseViewport } from "@/config/metadata";

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

export const metadata: Metadata = {
  ...baseMetadata,
};
export const viewport: Viewport = {
  ...baseViewport,
};
