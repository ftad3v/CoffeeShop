'use client'
import Image from "next/image";
import React, { useContext } from "react";
import { CardItemProps, useStore } from "../context/StoreContext";

function CartItem(item: CardItemProps) {
  const { addToCart, removeFromCard } = useStore();

  return (
    <div className="flex w-full px-10 bg-[#f3f3f4] h-[150px] justify-between rounded-lg shadow-lg ">
      <div className="flex">
        <Image
          src={item.image}
          width={0}
          height={0}
          sizes="100%"
          alt="menu"
          className="w-[100px] h-[100px] my-auto bg-no-repeat bg-center overflow-hidden"
        />
        <div className="flex flex-col items-start justify-start mx-10">
          <span className="mt-5 mb-3  text-[#664d43]  text-xl text-center font-bold">
            {item.name}
          </span>
          <span className="pb-5 text-[#939392] text-sm">{item.description}</span>
        </div>
      </div>

      <div className="flex flex-col items-center  justify-center ">
        <span className="my-5 text-[#5c4543] text-2xl text-center font-bold">
          $ {item.price *(item.count || 1)}
        </span>
        <div className="flex justify-between items-center pb-5">
          <button className="w-8 h-8 bg-[#dc8068] text-white rounded-lg text-3xl flex items-center justify-center"
          onClick={() => removeFromCard(item)}
          >
            -
          </button>
          <span className="mx-4 text-lg font-semibold">{item.count}</span>
          <button className="w-8 h-8 bg-[#dc8068] text-white rounded-lg text-3xl flex items-center justify-center"
          onClick={() => addToCart(item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
