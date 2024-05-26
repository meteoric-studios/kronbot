import {tv} from "tailwind-variants";
import clsx from "clsx";

export const defaultPadding = tv({
    base: "container mx-auto px-8 py-4",
    variants: {
        size: {
            sm: "px-8 container mx-auto py-4",
            md: "px-8 container mx-auto py-8",
            lg: "px-8 container mx-auto py-12",
            xl: "px-8 container mx-auto py-16",
        }
    }
})

export const button = tv({
    base: clsx(
        "bg-secondary-red px-4 py-2 rounded-md text-lg",
        "hover:bg-primary-red transition-all"
    )
});