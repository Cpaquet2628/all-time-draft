import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "20 Seasons — All-Time Draft",
  description: "Commemorative all-time fantasy football league"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

