import Link from "next/link";
import clsx from "clsx";
import React, {useEffect, useRef} from "react";
import {Branding} from "@/components/header/Branding";

function SidebarLink({href, children}: {
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

export function Sidebar({setSidebarOpen}: {
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
                    <Branding/>
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