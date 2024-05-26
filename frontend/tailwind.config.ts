import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|input|navbar|ripple|spinner).js"
  ],
    theme: {
        extend: {
            backgroundImage: {
                'landing': "url('/landing.png')"
            },
            colors: {
                primaryKB: '#500202',
                secondaryKB: '#ed1a25',
                grayKB: '#1a1717',
                lightGrayKB: '#2e2d2d', // Changed to camelCase for consistency
                whiteKB: '#fbf8f8',
                lightPinkKB: '#e8caca', // Changed to camelCase for consistency
            },
        },
    },
    plugins: [nextui()],
};

export default config;
