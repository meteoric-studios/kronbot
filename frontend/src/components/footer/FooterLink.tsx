import Link from "next/link";
import {tv} from "tailwind-variants";

export function FooterLink({href, children,}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            className={"hover:underline"}
            href={href}
        >
            {children}
        </Link>
    );
}

export const linkContainer = tv({
    base: "flex flex-col",
    variants: {
        side: {
            "left": "items-end border-e border-e-white pe-4 me-2",
            "right": "items-start"
        }
    }
});