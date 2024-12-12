import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "NextJs Auth Template",
    description: "This is a NextJs Auth Template",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <html lang="en">
                <body
                    className={`${inter.className} antialiased`}>
                    <Navbar />
                    {children}
                </body>
            </html>
        </SessionProvider>
    );
}
