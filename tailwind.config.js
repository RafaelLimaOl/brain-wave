import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

export default {
    content: [
        "index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
        color: {
            1: "var(--color-1)",
            2: "var(--color-2)",
            3: "var(--color-3)",
            4: "var(--color-4)",
            5: "var(--color-5)",
            6: "var(--color-6)",
        },
        stroke: {
            1: "var(--stroke-1)",
        },
        n: {
            1: "var(--n-1)",
            2: "var(--n-2)",
            3: "var(--n-3)",
            4: "var(--n-4)",
            5: "var(--n-5)",
            6: "var(--n-6)",
            7: "var(--n-7)",
            8: "var(--n-8)",
            9: "var(--n-9)",
            10: "var(--n-10)",
            11: "var(--n-11)",
            12: "var(--n-12)",
            13: "var(--n-13)",
        },
        },
        fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: ["var(--font-code)"],
        grotesk: "var(--font-grotesk)",
        },
        spacing: {
        0.25: "var(--spacing-0\\.25)",
        7.5: "var(--spacing-7\\.5)",
        15: "var(--spacing-15)",
        },
        opacity: {
        15: "var(--opacity-15)",
        },
        transitionDuration: {
        DEFAULT: "var(--duration-default)",
        },
        transitionTimingFunction: {
        DEFAULT: "var(--easing-default)",
        },
        zIndex: {
        1: "var(--z-1)",
        2: "var(--z-2)",
        3: "var(--z-3)",
        4: "var(--z-4)",
        5: "var(--z-5)",
        },
        borderWidth: {
        DEFAULT: "var(--border-default)",
        },
        backgroundImage: {
        "radial-gradient": "var(--bg-radial)",
        "conic-gradient": "var(--bg-conic)",
        },
    },
        
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities}) {
            addBase({}),
            addComponents({
                "container": {
                    "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
                },
                ".h1": {
                    "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
                },
                ".h2": {
                    "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {},
                },
                ".h3": {
                    "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
                },
                ".h4": {
                    "@apply text-[2rem] leading-normal": {},
                }, 
                ".h5": {
                    "@apply text-2xl leading-normal": {},
                }, 
                ".h6": {
                    "@apply font-semibold text-lg leading-8": {},
                }, 
                ".body-1": {
                    "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8": {},
                }, 
                ".body-2": {
                    "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
                }, 
                ".caption": {
                    "@apply text-sm": {},
                }, 
                ".tagline": {
                    "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {},
                }, 
                ".quote": {
                    "@apply font-code text-lg leading-normal": {},
                }, 
                ".button": {
                    "@apply font-code text-xs font-bold uppercase tracking-wider": {},
                }, 

            }),
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)"
                }
            })
        })
    ],
}