import React from "react";

function FooterNavBar() {
  return (
    <nav className="flex mt-6">
          <ul className="flex m-auto gap-7 font-bold">
            <li className="hover:text-[#b4462a]">
              <a href="">Home</a>
            </li>
            <li className="hover:text-[#b4462a]">
              <a href="">Menu</a>
            </li>
            <li className="hover:text-[#b4462a]">
              <a href="">Gallery</a>
            </li>
            <li className="hover:text-[#b4462a]">
              <a href="">Contact Us</a>
            </li>
          </ul>
    </nav>
  );
}

export default FooterNavBar;
