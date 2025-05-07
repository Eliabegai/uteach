import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  preload: true,
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Uteach",
  description: "Teach students worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
