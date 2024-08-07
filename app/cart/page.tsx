'use client'
import Image from "next/image";
import React, { useContext } from "react";
import logoCup from "@/public/images/logo.png";
import CartItem from "./CartItem";
import Footer from "../components/Footer/Footer";
import { DateFormatter } from "../Utility";
import { CardItemProps, useStore } from "../context/StoreContext";

function CartList() {
  const { cartItems } = useStore()

  return (
      <div className="w-full pt-10 font-Montserrat">
        <div className="flex flex-col mx-auto w-11/12 ">
          <div className="flex border-b-2 border-[#e5e7eb] justify-between pb-4 px-10 ">
            <Image src={logoCup} alt="logo" />
            <span className="text-[#939392] text-xl">
              {new DateFormatter().getFullDate()}
            </span>
          </div>

          <div className="flex justify-between mt-8 px-10 ">
            <span className="text-[#939392] text-4xl uppercase">
              Confirm your order
            </span>
            <span className="italic text-sm">
              You have selected {cartItems.length} products
            </span>
          </div>

          {/* cart item */}
          <div className="my-8 px-10 grid grid-cols-1 gap-8">
            {cartItems.map((item: CardItemProps) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                count={item.count}
                price={item.price}
                description={item.description}
                type={item.type}
              />
            ))}
          </div>

          {/* divider */}
          <div className="w-full h-[2px] bg-[#e5e7eb] my-5"></div>

          <div className="flex justify-end items-center px-10  w-full h-28 mb-5">
            <button className="bg-[#dc8068] py-3 px-5 rounded-xl text-white uppercase font-semibold tracking-[]2px">
              checkout
            </button>
          </div>
        </div>

        <Footer />
      </div>
  );
}

export default CartList;
