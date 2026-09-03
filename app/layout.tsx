import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himanshu Deshbhratar | Software Engineer",
  description: "Portfolio of Himanshu Deshbhratar — real-time systems and scalable software.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
