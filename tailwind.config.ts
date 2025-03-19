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
        pcPrincipal: "#0C1177",
        pcSecondary: "#FAFAFA",
        sc: "#4E4E4E",
        tcPrincipal: "#323FBD",
        tcSecondary: "#6E6E6E",
        tcExtra: "#ACB0B8",
        transparentColor: "#00000080",
        mapColorCABA: "#ACB0B8",
        mapColorGBA1: "#3498DB",
        mapColorGBA2: "#4b5acb",
        mapColorGBA3: "#0C1177",
        blackPage: "#222",

        admin: {
          primary: "#343A49",
          secondary: "#2D333F",
          letterColor: "#FAFAFA",
          green: "#24BA63",
          red: "#FF8181",
          redAlt: "#F05858",
          blue: "#8FA6FF",
          yellow: "#FFD593",
          orange: "#F59E0B"
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        bebasNeue: ["BebasNeue", "sans-serif"],
      },
      backgroundImage: {
        buttonGradient:
          "linear-gradient(350deg, #0C1177 45.45%, #323FBD 46.73%)",
        buttonHoverGradient:
          "linear-gradient(350deg, #FAFAFA 45.45%, #EEEEEE 46.73%)",
        banner: "linear-gradient(344deg, #FAFAFA 48%, #00000000 49%)",
        bannerGradientImage:
          "linear-gradient(263deg, #0C1177CC 0%, #323FBDCC 100%)",
        aboutUsGradientImage:
          "linear-gradient(177deg, #0C1177 45%, #00000000 55%)",
        aboutUsGradientBorder:
          "linear-gradient(-135deg, #0C1177 50%, #00000000 50%)",
      },
      boxShadow: {
        methodCard: "0 4px 4px 0 rgba(36, 186, 99, 0.50)",
        adminHeader: '0 4px 4px rgba(0, 0, 0, 0.25)',

      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
