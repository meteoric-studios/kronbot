import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-red": "#550b22",
                "secondary-red": "#6b1731",
                "gray": "#1a1717",
                "light-gray": "#2e2d2d",
                "white": "#fbf8f8",
                "light-pink": "#e8caca",
                "footer-red":   "#4b1422"
            }
        },
    },
    plugins: [],
};
export default config;
