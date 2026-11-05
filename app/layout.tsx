import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toppay — Everyday money services in one app",
  description:
    "Send money, recharge your phone, pay bills and follow your transaction activity with Toppay. Download the Android app.",
  applicationName: "Toppay",
  icons: { icon: "/toppay-logo.png", apple: "/toppay-logo.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
