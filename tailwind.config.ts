import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'mobile':{ 'max': '764px'}, // 450 - 480 is different
      'tablet': '765px',
      'desktop' : '992px',
      '2xl' :'1200px'
    },
    extend: {
      backgroundImage: {
        "midBanner":"url('../public/images/mid-banner1-bg.jpg')",
        "BannerService":"url('../public/images/mid-banner2-bg.jpg')",
        "ContactBanner":"url('../public/images/contact-bg-1.jpg')",
        "ContactBannerWall":"url('../public/images/contact-wall-bg.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footerBg": "url('../public/images/footer-bg.jpg')"
      },
    },
    fontFamily:{
      IranSans:['IranSans' , 'sans-serif'],
      Montserrat:['montserrat' , 'sans-serif'],
      GreatVibes:['GreatVibes' , 'sans-serif'],
    }
  },

  plugins: [],
};
export default config;
