import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./../components/Navbar"; 
import Sidebar from './../components/Sidebar';
 
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin dashboard",
  description: "Learn to built admin dashboard using shadcn ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="flex ">

            <div className="hidden md:block w-[300px] h-[100vh]">
            <Sidebar/>
            </div>
            <div className="p-5 w-full md:max-w-[1140px]">

            {children}
            </div>
        </div>
        
      </body>
    </html>
  );
}
