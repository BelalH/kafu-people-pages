/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: {
        DEFAULT: "#4F46E5",
        dark: "#4338CA",
        light: "#818CF8",
      },
      accent: {
        DEFAULT: "#0D9488",
        light: "#14B8A6",
      },
      surface: "#F8FAFC",
      muted: "#64748B",
      slate: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
        950: "#020617",
      },
      // Legacy aliases (mapped to new palette)
      CPurple: "#4F46E5",
      cDarkBlue: "#0F172A",
      cOrange: "#F97316",
      cBrightBlue: "#4F46E5",
      cWhite: "#FFFFFF",
      cgray: "#F8FAFC",
      textGray: "#64748B",
      cBlack: "#000000",
      lightBlue: "#CBD5E1",
      CcradColor: "#312E81",
      white: "#FFFFFF",
      black: "#000000",
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      blue: {
        400: "#60A5FA",
        500: "#3B82F6",
        600: "#2563EB",
        700: "#1D4ED8",
      },
      indigo: {
        600: "#4F46E5",
      },
      red: {
        500: "#EF4444",
      },
      green: {
        500: "#22C55E",
      },
      yellow: {
        500: "#EAB308",
      },
    },
    extend: {
      height: {
        "custom-632": "632px",
        "custom-480": "480px",
        "custom-442": "442px",
      },
      width: {
        "custom-322": "322px",
        "custom-544": "544px",
        "custom-1050": "1440px",
        "custom-535": "535px",
      },
      spacing: {
        104: "104px",
        160: "160px",
        187: "187px",
        79: "70px",
        80: "80px",
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
};
