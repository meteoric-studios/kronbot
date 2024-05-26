"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";

function Branding() {
    return (
        <Link
            href={"/"}
            className={"flex items-center gap-4"}
        >
            <Image
                src={"/logo.png"}
                alt={"Kronbot logo"}
                width={50}
                height={61.9}
            />

            <h2 className={"text-2xl"}>KronBOT</h2>
        </Link>
    );
}

function SidebarLink({ href, children }: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className={clsx(
                "px-4 py-2 text-2xl transition-all",
                "hover:bg-light-gray"
            )}
        >{children}</Link>
    );
}

function Sidebar({ setSidebarOpen }: {
    setSidebarOpen: (open: boolean) => void;
}) {
    const sidebar = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            if (
                sidebar.current &&
                !sidebar.current.contains(e.target as Node)
            )
                setSidebarOpen(false);
        }

        document.addEventListener("click", clickHandler);
        return () => {
            document.removeEventListener("click", clickHandler);
        }
    }, [sidebar, setSidebarOpen]);

    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-gray bg-opacity-40">
            <aside
                ref={sidebar}
                className={"ms-auto bg-gray h-full max-w-fit z-10"}
            >
                <div className="p-8 border-b border-gray-300">
                    <Branding />
                </div>

                <div className="flex flex-col">
                    <SidebarLink href={"/"}>Home</SidebarLink>
                    <SidebarLink href={"/"}>Team</SidebarLink>
                    <SidebarLink href={"/"}>FTC</SidebarLink>
                    <SidebarLink href={"/"}>News</SidebarLink>
                    <SidebarLink href={"/"}>Technical</SidebarLink>
                    <SidebarLink href={"/"}>Contact</SidebarLink>
                </div>
            </aside>
        </div>
    );
}

function NavLink({ className, href, children }: {
    className?: string;
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className={clsx(
                "text-2xl hover:text-zinc-400 hover:underline transition-all",
                "flex items-center gap-2",
                className
            )}
        >{children}</Link>
    )
}

function Nav() {
    const BREAKPOINT = 1024;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const [sidebarOpen, setSidebarOpen] = useState(true);

    if (windowWidth < BREAKPOINT)
        return (
            <>
                <button
                    type={"button"}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className={clsx(
                        "p-2 bg-light-gray rounded-md",
                        "hover:bg-gray transition-all"
                    )}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </button>
                {sidebarOpen && (
                    <Sidebar setSidebarOpen={setSidebarOpen} />
                )}
            </>
        );
    return (
        <>
            <nav
                className="flex items-center justify-between gap-8"
            >
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/"}>Team</NavLink>
                <NavLink href={"/"}>FTC</NavLink>
                <NavLink href={"/"}>News</NavLink>
                <NavLink href={"/"}>Technical</NavLink>
            </nav>

            <NavLink href={"/"}>
                Contact
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
            </NavLink>
        </>
    );
}

export default function Header() {
    return (
        <header className={"w-full bg-gray bg-opacity-40 py-4"}>
            <div className={clsx(
                "flex justify-between items-center",
                "px-8 container mx-auto"
            )}>
                <Branding />
                <Nav />
            </div>
        </header>
    );
}