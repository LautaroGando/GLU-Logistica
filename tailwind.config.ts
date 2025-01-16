import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pcPrincipal: "#24BA63",
        pcSecondary: "#FAFAFA",
        sc: "#4E4E4E",
        tcPrincipal: "#2EAA62",
        tcSecondary: "#6E6E6E",
        tcExtra: "#8E8E8E",
        transparentColor: "#00000080",
        mapColorCABA: "#2EE47A",
        mapColorGBA2: "#1C9E53",
        mapColorGBA3: "#037B35",
        blackPage: "#222",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        bebasNeue: ["BebasNeue", "sans-serif"],
      },
      backgroundImage: {
        buttonGradient: "linear-gradient(350deg, #24BA63 45.45%, #2EAA62 46.73%)",
        buttonHoverGradient: "linear-gradient(350deg, #FAFAFA 45.45%, #EEEEEE 46.73%)",
        banner: "linear-gradient(344deg, #FAFAFA 48%, #00000000 49%)",
        bannerGradientImage:
          "linear-gradient(263deg, rgba(36, 186, 99, 0.65) 0%, rgba(3, 123, 53, 0.65) 100%)",
        aboutUsGradientImage: "linear-gradient(177deg, #24BA63 45%, #00000000 55%)",
        aboutUsGradientBorder: "linear-gradient(-135deg, #24BA63 50%, #00000000 50%)",
      },
      boxShadow: {
        methodCard: "0 4px 4px 0 rgba(36, 186, 99, 0.50)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
