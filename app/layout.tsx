import type { Metadata } from "next";
import { Inter, Red_Hat_Display } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const red_hat_display = Red_Hat_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Order Summary Page",
  description: "Order Summary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={red_hat_display.className}>{children}</body>
    </html>
  );
}
