import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", md: "900px", lg: "1200px", xl: "1600px" },
    extend: {
      colors: {
        ink: { 950: "rgb(var(--c-ink-950) / <alpha-value>)", 900: "rgb(var(--c-ink-900) / <alpha-value>)", 800: "rgb(var(--c-ink-800) / <alpha-value>)" },
        ivory: "rgb(var(--c-ivory) / <alpha-value>)", gold: "rgb(var(--c-gold) / <alpha-value>)", warm: "rgb(var(--c-warm) / <alpha-value>)", line: "var(--line)",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Georgia", "serif"] },
      fontSize: {
        mega: ["clamp(4.5rem,17vw,22rem)", { lineHeight: "0.8", letterSpacing: "-0.06em" }],
        display: ["clamp(3rem,11vw,12rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        title: ["clamp(1.75rem,4vw,4rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        meta: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.18em" }],
      },
    },
  },
} satisfies Config;
