import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "576px", // Bootstrap's small breakpoint
        md: "768px", // Bootstrap's medium breakpoint
        lg: "992px", // Bootstrap's large breakpoint
        xl: "1200px", // Bootstrap's extra-large breakpoint
        "2xl": "1400px", // Bootstrap's extra-extra-large breakpoint
      },
    },
    screens: {
      sm: "576px", // Bootstrap's small breakpoint
      md: "768px", // Bootstrap's medium breakpoint
      lg: "992px", // Bootstrap's large breakpoint
      xl: "1200px", // Bootstrap's extra-large breakpoint
      "2xl": "1400px", // Bootstrap's extra-extra-large breakpoint
    },
    extend: {
      dropShadow: {
        customGreen: "0 35px 35px #0F626B",
      },
      scrollbar: {
        thumb: "bg-grayscale-400 rounded-md",
        track: "bg-grayscale-200",
        hover: "bg-grayscale-500",
      },
      colors: {
        primary: "#0F626B",
        customRed: {
          900: "#B71F3B",
        },
        customOrange: {
          900: "#C77414",
          800: "#F89118",
          700: "#FAB261",
        },
        darkGrey: {
          900: "#0E0E0E",
          800: "#202020",
        },
        grayscale: {
          900: "#14142B",
          800: "#4E4B66",
          700: "#6E7191",
          600: "#A0A3BD",
          500: "#D9DBE9",
          400: "#EFF0F6",
          300: "#F7F7FC",
          200: "#FCFCFC",
        },
        customBlue: {
          900: "#2A00A2",
          800: "#5F2EEA",
          700: "#BCA4FF",
        },
        customAqua: {
          900: "#0096B7",
          800: "#1CC8EE",
          700: "#82E9FF",
        },
        error: {
          900: "#C30052",
          800: "#ED2E7E",
          700: "#FF84B7",
        },
        success: {
          900: "#00966D",
          800: "#00BA88",
          700: "#34EAB9",
        },
        warning: {
          900: "#946200",
          800: "#F4B740",
          700: "#FFD789",
        },

        gradientPrimary: {
          900: "#5F2EEA",
          800: "#7433FF",
          700: "#FFA3FD",
          600: "#BCA4FF",
        },
        gradientSecondary: {
          900: "#5F2EEA",
          800: "#624AF2",
          700: "#50DDC3",
          600: "#82E9FF",
        },
        gradientAccent: {
          900: "#ED2E7E",
          800: "#EB0055",
          700: "#FFFA80",
          600: "#FFD789",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        shadowPulse: {
          "0%, 100%": {
            boxShadow: "inset 0 0 5px #0F626B, 0 0 5px #0F626B",
          },
          "50%": {
            boxShadow: "inset 0 0 10px #0F626B, 0 0 20px #0F626B",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        shadowPulse: "shadowPulse 4s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config;

export default config;
