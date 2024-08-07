import React from "react";
import Navbar from "./Navbar";

import SocialIcons from "./SocialIcons";
import BannerImage from "./BannerImage";

const Header = () => {
  return (
    <header className="desktop:p-5 desktop:bg-[#f2f2f2] desktop:border-b-0 bottom-5 border-[#f2f2f2] block">
      {/* header body */}
      <div className="relative bg-[#fff] border">
        {/* Navbar */}
        <Navbar />
        {/* social icons */}
        <SocialIcons />
        {/* banner images */}
        <BannerImage />
      </div>
    </header>
  );
};

export default Header;
