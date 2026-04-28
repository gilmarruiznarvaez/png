import type { Config } from "tailwindcss";
import {
  borderRadius,
  boxShadow,
  colors,
  duration,
  easings,
  fontFamily,
  fontSize,
  fontWeight,
  maxWidth,
  screens,
  spacing,
  zIndex,
} from "./src/styles/tokens";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { ...screens },
    extend: {
      colors: { ...colors },
      fontFamily: {
        display: fontFamily.display as unknown as string[],
        body: fontFamily.body as unknown as string[],
        sans: fontFamily.body as unknown as string[],
      },
      fontSize: fontSize as unknown as Record<string, [string, { lineHeight: string; letterSpacing?: string }]>,
      fontWeight: { ...fontWeight },
      spacing: { ...spacing },
      zIndex: { ...zIndex },
      boxShadow: { ...boxShadow },
      borderRadius: { ...borderRadius },
      maxWidth: { ...maxWidth },
      transitionTimingFunction: { ...easings },
      transitionDuration: { ...duration },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 50%, rgba(255, 248, 85, 0.18) 0%, transparent 60%)",
        "gold-neon":
          "linear-gradient(90deg, #fff855 0%, #ffbd59 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 14px rgba(255, 248, 85, 0.35), 0 0 2px rgba(255, 248, 85, 0.7)",
          },
          "50%": {
            boxShadow:
              "0 0 28px rgba(255, 248, 85, 0.65), 0 0 6px rgba(255, 248, 85, 0.95)",
          },
        },
        "slide-up": {
          "0%": { transform: "translateY(120%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 600ms cubic-bezier(0.16, 1, 0.3, 1) both",
        "pulse-glow": "pulse-glow 2.4s ease-in-out infinite",
        "slide-up": "slide-up 800ms cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
