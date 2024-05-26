import Link from "next/link";
import clsx from "clsx";
import React, {useEffect, useState} from "react";
import {ContactIcon, SidebarIcon} from "@/components/header/icons";
import {Sidebar} from "@/components/header/Sidebar";

function NavLink({className, href, children}: {
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

export function Nav() {
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
                    <SidebarIcon/>
                </button>
                {sidebarOpen && (
                    <Sidebar setSidebarOpen={setSidebarOpen}/>
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
                <ContactIcon/>
            </NavLink>
        </>
    );
}