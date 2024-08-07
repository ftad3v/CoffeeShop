import { useStore } from "@/app/context/StoreContext";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
  const { cartItems } = useStore();

  const scrollToStore = () => {
    const st = document.getElementById("store");
    window.scrollTo({ top: st?.offsetTop, behavior: "smooth" });
  };

  return (
    <nav className="desktop:rounded-none border-0 z-[15] mb-0 relative min-h-[90px]">
      <div className="px-[15px] mx-auto">
        <div className="desktop:float-right   tablet:w-full">
          <ul className="flex items-center float-right gap-7 font-bold">
            <li className="pt-[35px] pb-5 hover:text-[#b4462a]">
              <a href="">Home</a>
            </li>
            <li className="pt-[35px] pb-5 hover:text-[#b4462a]">
              <a href="">Menu</a>
            </li>
            <li className="pt-[35px] pb-5 hover:text-[#b4462a]">
              <a href="">Blog</a>
            </li>
            <li className="pt-[35px] pb-5 hover:text-[#b4462a]">
              <a href="">Gallery</a>
            </li>
            <li
              className="pt-[35px] pb-5 hover:text-[#b4462a] cursor-pointer"
              onClick={scrollToStore}
            >
              <span>Store</span>
            </li>
            <li className="pt-[35px] pb-5 hover:text-[#b4462a]">
              <a href="">Contact Us</a>
            </li>
            <Link
              className="pt-[35px] pb-5 hover:text-[#b4462a] flex items-center justify-center relative"
              href="/cart"
            >
              Cart
              <IoMdCart />
              {cartItems.length > 0 && (
                <div className="absolute rounded-full w-5 h-5 bg-[#dc8068] flex justify-center items-center top-6 -right-3">
                  <span className="text-sm text-white">{cartItems.length}</span>
                </div>
              )}
            </Link>
            <li
              className="bg-[#dc8068] desktop:max-w-[70px] m-x-[15px] text-center pt-5 text-white hover-effect cursor-pointer"
              onClick={scrollToStore}
            >
              <span className="flex flex-col items-center justify-center">
                <FaArrowUp className="mb-2 arrow-icon" />
                Order Now
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
