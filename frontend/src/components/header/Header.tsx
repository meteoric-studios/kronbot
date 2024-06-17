import clsx from "clsx";
import {Branding} from "@/components/Branding";
import {Nav} from "@/components/header/Nav";
import "./header.scss";
import {defaultPadding} from "@/components/primitives";

export default function Header() {
    return (
        <header className={"w-full bg-gray bg-opacity-60 py-4"}>
            <div className={clsx(
                "flex justify-between items-center",
                defaultPadding()
            )}>
                <Branding />
                <Nav />
            </div>
        </header>
    );
}