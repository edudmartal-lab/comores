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
        },
        oazis: {
          brown: "#3A2A1A",
          coffee: "#5A4327",
          gold: "#C9A227",
          sand: "#E7C977",
          cream: "#F6EEDF"
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
        },
        flyAcross: {
          "0%": { transform: "translate3d(-12vw, 18px, 0) rotate(-6deg)", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { transform: "translate3d(115vw, -60px, 0) rotate(-6deg)", opacity: "0" }
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        sunGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" }
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        "float-plane": "floatPlane 6s ease-in-out infinite",
        "soft-reveal": "softReveal 700ms ease-out both",
        "fly-across": "flyAcross 24s linear infinite",
        "drift-slow": "drift 60s linear infinite",
        "drift-slower": "drift 95s linear infinite",
        "sun-glow": "sunGlow 7s ease-in-out infinite",
        "float-y": "floatY 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
