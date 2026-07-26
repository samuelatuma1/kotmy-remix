/** @type {import('tailwindcss').Config} */
import tailwindCSSAnimate from "tailwindcss-animate";
import containerQueries from "@tailwindcss/container-queries";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "300px",
      },
      fontFamily: {
        satoshi: ["Satoshi-Regular", "sans-serif"],
        "satoshi-medium": ["Satoshi-Medium", "sans-serif"],
        "satoshi-bold": ["Satoshi-Bold", "sans-serif"],
        "satoshi-black": ["Satoshi-Black", "sans-serif"],
      },
      aspectRatio: {
        "2/1": "2 / 1",
        "3/7": "3 / 7",
        "3/4": "3 / 4",
      },
      colors: {
        primary: "#0E2A4D",
        secondary: "#F8FAFC",
        accent: "#ED3C5A",
        brand: {
          pink: "#ED3C5A",
          navy: "#0E2A4D",
          white: "#FFFFFF",
          cloud: "#F8FAFC",
          grey: "#E5E7EB",
          slate: "#94A3B8",
          charcoal: "#334155",
          gold: "#D4AF37",
          brightGold: "#F4C430",
          metallicGold: "#B8860B",
          champagneGold: "#E6C86E",
        },
        "success-700": "#166534",
        "success-500": "#DCFCE7",
        "warning-500": "#F59E0B",
        facebook: "#437EF7",
        twitter: "#0E2A4D",
        instagram: "#ED3C5A",
        givaah: "#D4AF37",
        tally: "#22C55E",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundColor: {
        primary: "#FFFFFF",
        secondary: "#F8FAFC",
        tertiary: "#F8FAFC",
        accent: "#ED3C5A",
        facebookBG: "#EEF4FF",
        twitterBG: "#F8FAFC",
        instagramBG: "#FFF1F2",
        givaahBG: "#FEF9C3",
        tallyBG: "#DCFCE7",
        gold: "#D4AF37",
        "gold-soft": "#FEF3C7",
        "brand-pink": "#ED3C5A",
        "brand-navy": "#0E2A4D",
        "grade-F": "#E2341D",
        "grade-E": "#FD7D6C",
        "grade-Ea": "#FD7D6C35",
        "grade-D": "#FCB004",
        "grade-Da": "#FCB00435",
        "grade-C": "#FFD11E",
        "grade-Ca": "#FFD11E35",
        "grade-B": "#A8DD9D",
        "grade-Ba": "#A8DD9D35",
        "grade-A": "#5DC264",
        "grade-Aa": "#5DC26435",
      },
      borderColor: {
        primary: "#ED3C5A",
        secondary: "#E5E7EB",
        disabled: "#E5E7EB",
      },
      outlineColor: {
        primary: "#ED3C5A",
        secondary: "#E5E7EB",
        disabled: "#E5E7EB",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "slide-in-left": {
          from: { left: "100%" },
          to: { left: "0" },
        },
        "slide-out-left": {
          from: { left: "var(--left)" },
          to: { left: "100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-left": "slide-in-left 0.2s ease-out",
        "slide-out-left": "slide-out-left 0.2s ease-out",
      },
    },
  },
  plugins: [
    // require("tailwindcss-animate"),
    // require('@tailwindcss/container-queries'),
    tailwindCSSAnimate,
    containerQueries,
  ],
};
