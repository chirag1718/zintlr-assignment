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
          "linear-gradient(180deg, rgba(228, 168, 112, 0.2) 0%, rgba(180, 86, 0, 0.2) 100%)",
        "red-card-gradient":
          "linear-gradient(180deg, rgba(242, 146, 146, 0.1) 0%, rgba(193, 1, 1, 0.1) 100%)",
        "blue-card-gradient":
          "linear-gradient(180deg, rgba(132, 182, 255, 0.1) 0%, rgba(0, 70, 170, 0.1) 100%)",

        "light-blue-card-gradient":
          "linear-gradient(180deg, rgba(60, 190, 231, 0.05) 0%, rgba(99, 158, 227, 0.05) 100%)",
        "bar-graph-linear":
          "linear-gradient(180deg, #3CBEE7 0%, #639EE3 100%)          ",
      },
      colors: {
        // buttons
        "bg-primary-blue": "#4DAEFF",
        "bg-secondary-light-black": "#313945",
        "bg-btn-disabled": "#808080",
        "bg-disabled-gray": "#919EAB",

        // text
        "text-light-black": "#313945",
        "text-dark-blue": "#0153C9",
        "text-light-blue": "#1FB9FC",
        "text-light-gray": "#7B7B7E",
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
        "text-asset-blue": "#4CAEFF",

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
        "border-light-black": "#313945",
        // cards and icons
        "light-purple": "#ECEAFE",
        "light-green": "#E5FFDF",
        "light-peach": "#FFE9DB",
        "light-gold": "#FFEDB2",
        "bright-blue": "#3896FF",

        // icons container background
        "icon-light-blue": "#E5F7FF",
        "icon-light-pink": "#FFDDE9",
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
      boxShadow: {
        filter: "0px 4px 4px 0px #00000040s",
      },
    },
  },
  plugins: [],
};
export default config;
