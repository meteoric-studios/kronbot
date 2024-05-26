"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {ContactIcon, SidebarIcon} from "@/components/icons";

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
                    <SidebarIcon />
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
                <ContactIcon />
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