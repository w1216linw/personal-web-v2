import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "Weiwei Lin",
  description: "Personal website of Weiwei Lin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster />
    </html>
  );
}
