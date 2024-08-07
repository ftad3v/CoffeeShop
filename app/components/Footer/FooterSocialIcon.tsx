import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";

function FooterSocialIcon() {
  return (
    <div className="flex w-full mt-7">
      <div className="mx-auto flex">
        <a href="#">
          <RiFacebookCircleLine
            size={20}
            className="text-center text-[#988E89] hover:scale-150 hover:text-[#664d42] transition-transform"
          />
        </a>
        <a href="#">
          <TfiTwitter size={20} className="text-center text-[#988E89] mx-5 hover:scale-150 hover:text-[#664d42] transition-transform" />
        </a>
        <a href="#">
          <IoLogoInstagram size={20} className=" text-center text-[#988E89] hover:scale-150 hover:text-[#664d42] transition-transform" />
        </a>
        <a href="#">
          <BiLogoWhatsapp size={20} className="text-center text-[#988E89] ml-5 hover:scale-150 hover:text-[#664d42] transition-transform" />
        </a>
      </div>
    </div>
  );
}

export default FooterSocialIcon;
