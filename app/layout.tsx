import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "20 Seasons — All-Time Draft",
  description:
    "A ten-team best-ball fantasy league drafted from 254 all-time greats, scored from real box scores, 2006–2025.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${bigShoulders.variable} ${plexSans.variable} ${plexMono.variable} min-h-full flex flex-col bg-bg text-parchment font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
