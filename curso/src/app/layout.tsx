import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import { Inter } from "next/font/google";
import { Header } from "./components/shared/Header";
import { Footer } from "./components/shared/Footer";
import './sass/globals.sass'
import { Hero } from "./components/home/Hero";
import { Description } from "./components/home/Description";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["100","300","500","700"],
  subsets: ["latin-ext"]
 });

export const metadata: Metadata = {
  title: "Future World",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
