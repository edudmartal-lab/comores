import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ca: {
          blue: "#0D47A1",
          green: "#0B8F66",
          turquoise: "#00B6C7",
          cream: "#F7F7F2",
          mist: "#ECEFF3",
          ink: "#14325C"
        }
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "Montserrat", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(13, 71, 161, 0.14)",
        card: "0 12px 35px rgba(20, 50, 92, 0.10)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      backgroundImage: {
        "warm-grid":
          "linear-gradient(rgba(13, 71, 161, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 71, 161, 0.05) 1px, transparent 1px)"
      },
      keyframes: {
        floatPlane: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(-4deg)" },
          "50%": { transform: "translate3d(10px, -8px, 0) rotate(1deg)" }
        },
        softReveal: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "float-plane": "floatPlane 6s ease-in-out infinite",
        "soft-reveal": "softReveal 700ms ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
