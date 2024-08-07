"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import Navbar from "../Header/Navbar";
import FooterNavBar from "./FooterNavBar";
import FooterSocialIcon from "./FooterSocialIcon";
import logoCup from "@/public/images/logo.png";
import Image from "next/image";

function Footer() {
  const onScrollButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative w-full">
      <div className="bg-footerBg bg-no-repeat bg-center w-full h-[350px]">
        <div className="h-full justify-center items-center pt-5">
          <Image src={logoCup} alt="logocup" className="mx-auto" />
          <FooterNavBar />
          <FooterSocialIcon />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center h-[100px] text-center justify-center">
          <span className="text-[#988E89] text-sm">
            © 2016 0efforttheme. Trademarks and brands are the property of their
            respective owners.
          </span>
        </div>
      </div>

      <div
        id="scrollButton"
        className="absolute flex w-[50px] h-[50px] rounded-full bg-[#664d42] cursor-pointer right-[48%] bottom-[75px]"
        onClick={onScrollButtonClick}
      >
        <IoIosArrowUp size={40} className="m-auto" color="white" />
      </div>
    </footer>
  );
}

export default Footer;
