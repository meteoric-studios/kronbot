import {tv} from "tailwind-variants";

export const defaultPadding = tv({
    base: "px-8 container mx-auto py-4",
    variants: {
        size: {
            sm: "px-8 container mx-auto py-4",
            md: "px-8 container mx-auto py-8",
            lg: "px-8 container mx-auto py-12",
            xl: "px-8 container mx-auto py-16",
        }
    }
})