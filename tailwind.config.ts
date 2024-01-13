import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // assets
        "gold-gradient":
          "linear-gradient(180deg, #F8F3E0 0%, #E8D495 53.7%, #D1AC32 100%)",
        "silver-gradient": "linear-gradient(180deg, #EAEAEA 0%, #ADADAD 98.5%)",
        "blue-gradient": "linear-gradient(180deg, #F2FAFF 0%, #B2DDF5 100%)",
        // card
        "brown-card-gradient":
          "linear-gradient(180deg, #E4A87033 0%, #B456001A 100%)",
        "red-card-gradient":
          "linear-gradient(180deg, #F2929233 0%, #C101011A 100%)",
        "blue-card-gradient":
          "linear-gradient(180deg, #84B6FF33 0%, #0046AA1A 100%)",
        "light-blue-card-gradient":
          "linear-gradient(180deg, #3CBEE733 0%, #639EE333 100%)",
      },
      colors: {
        // buttons
        "bg-primary-blue": "#4DAEFF",
        "bg-secondary-light-black": "#313945",
        "bg-btn-disabled": "#808080",

        // text
        "text-light-black": "#313945",
        "text-dark-blue": "#0153C9",
        "text-light-blue": "#1FB9FC",
        "text-green": "#16AA09",
        "text-red": "#E46666",
        "text-gold": "#DB9F15",
        "text-silver": "#A7A7A7",
        "text-orange": "#FC6B21",
        "text-purple": "#5D5FEF",

        // *filter
        "text-filter-red": "#FC5A5A",
        "text-filter-yellow": "#DBA00A",
        "text-filter-green": "#3BBA1B",
        "text-filter-gray": "#8E8E8E",
        // *assets
        "text-asset-gold": "#866D1B",
        "text-asset-silver": "#5B5B5B",

        // misc
        "bg-red-light": "#FFE0E0",
        "bg-yellow-light": "#FFF2D0",
        "bg-green-light": "#C2FFA5",
        "bg-gray-light": "#F1F1F1",
        "bg-blue-light": "#0153C91A",
        "bg-gold": "#FFEFBA",
        "bg-silver": "#F0F0F0",
        "bg-lime-green": "#ADE708",
        "bg-orange": "#FC6B21",
        "bg-lavender-light": "#E2E6F7",
        "border-gray": "#C6CEF0",

        // icons container background
        "icon-light-blue": "#E5F7FF",
        "icon-light-pink": "#FFDDE9",
        "icon-light-green": "#E5FFDF",
        "icon-light-peach": "#FFE9DB",
        "icon-light-purple": "#ECEAFE",
        "icon-pale-blue": "#E4F7FF",
        "icon-light-gray": "#E6E6E6",
        "icon-light-yellow-green": "#F0FFB8",

        // general background colors of components
        "bg-primary-light-blue": "#F6FAFC",
        "bg-table-header": "#DDEBFF",
        "bg-notification": "#EB5757",
        "bg-info": "#3C39B2",
        "bg-progress": "#FFD9C3",
        "bg-blue-gray": "#E5EDF0",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        poppins: ["var(--font-poppins)"],
        lato: ["var(--font-lato)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;
