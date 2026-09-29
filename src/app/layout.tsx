import type { Metadata } from "next";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace | Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with a wide range of courses on ByteSpace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Satoshi-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
