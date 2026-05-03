import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RageClick Detector — Detect Broken Form Buttons Instantly",
  description:
    "JavaScript widget that detects rage-clicking on non-responsive form elements and sends real-time alerts to developers. Stop losing customers to broken buttons."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="1c3ce780-6257-4352-95cc-ad85864e64cc"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
