"use client";

import clsx from "clsx";
import {Branding} from "@/components/header/Branding";
import {Nav} from "@/components/header/Nav";

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