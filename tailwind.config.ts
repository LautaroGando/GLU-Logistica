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
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        bebasNeue: ["BebasNeue", "sans-serif"],
      },
      backgroundImage: {
        buttonGradient: 'linear-gradient(350deg, #24BA63 45.45%, #2EAA62 46.73%)',
        buttonHoverGradient: 'linear-gradient(350deg, #FAFAFA 45.45%, #EEEEEE 46.73%)',
      }
      boxShadow: {
        methodCard: "0 4px 4px 0 rgba(36, 186, 99, 0.50)",
      },
    },
  },
  plugins: [],
} satisfies Config;
