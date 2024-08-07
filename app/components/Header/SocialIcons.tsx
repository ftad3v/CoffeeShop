import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="tablet:flex-col absolute top-1/2 left-0 w-16 z-50 desktop:transition-[background] desktop:duration-[4s] desktop:ease-in-out">
      <div className="w-full h-12  bg-[#3b5998] p-2 cursor-pointer">
        <a href="#">
          <FaFacebookF className="w-full h-full m-0 p-0 text-center text-white" />
        </a>
      </div>
      <div className="w-full h-12  bg-[#55acee] p-2">
        <a href="#">
          <FaTwitter className="w-full h-full m-0 p-0 text-center text-white" />
        </a>
      </div>
      <div className="w-full h-12  bg-gradient-to-tl from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2">
        <a href="#">
          <FaInstagram className="w-full h-full m-0 p-0 text-center text-white" />
        </a>
      </div>
      <div className="w-full h-12  bg-[#25d366] p-2">
        <a href="#">
          <FaWhatsapp className="w-full h-full m-0 p-0 text-center text-white" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
