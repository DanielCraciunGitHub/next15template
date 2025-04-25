import type { Metadata, Viewport } from "next";

import "./globals.css";

import { baseMetadata, baseViewport } from "@/config/metadata";
import Providers from "@/config/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  ...baseMetadata,
};
export const viewport: Viewport = {
  ...baseViewport,
};
