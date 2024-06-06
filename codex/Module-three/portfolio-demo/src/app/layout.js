import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Demo",
  description: "A demo to show some git projects in a portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-100">
          <nav className="w-100">
            <Link href="/">Home</Link>
            <Link href="/pages/about">About</Link>
            <Link href="/pages/projects">Projects</Link>
            <Link href="/pages/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="text-center font-bold mt-1">
          &copy; Panoramix Design || konynunez@gmail.com
        </footer>
      </body>
    </html>
  );
}