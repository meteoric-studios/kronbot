import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen">
                    <Header />
                    {children}
                </div>
                <Footer />

                <Image
                    src={"/background.png"} alt={"background"}
                    width={1440} height={1024}
                    className={clsx(
                        "absolute top-0 left-0 w-screen h-screen -z-10",
                        "object-cover",
                    )}
                />
            </body>
        </html>
    );
}
