import Image from "next/image";
import React from "react";
import coffeeCup from "@/public/images/coffee-cup.png";
import { MenuItems } from "../desktop/PricingTable";

const PricingTable = () => {
  return (
    <>
      <div className="flex w-full flex-col">
        <div className="w-full">
          <div className="bg-[#f1c152] h-[250px] w-full flex flex-row justify-between mx-auto px-10 items-center">
          <Image
              className="mx-auto w-[136px] h-[200px]"
              src={coffeeCup}
              alt="coffeecup"
            />
            <div className="text-start flex flex-col gap-5 text-[#362e29]">
              <span className="font-bold text-3xl">Good Morning</span>
              <span className="text-xl italic my-3 uppercase">a permium coffe make your day</span>
            </div>
          </div>
           
        </div>
        <div className="w-full bg-[#362e29] h-[300px] overflow-y-auto grid grid-cols-1 gap-5 px-5 ">
          {/* ------------------------ cart menu -------------------- */}
          {MenuItems.map((menuItem) => (
            <div
              className="flex justify-between pr-4 float-left  clear-left border-b border-dotted border-[#56453f] text-[#b9a39a] py-6 px-4"
              key={menuItem.id}
            >
              <div className="w-[calc(100%-115px)]   flex flex-col text-left gap-2">
                <span className="text-2xl ">{menuItem.title}</span>
                <span className="float-left text-sm">{menuItem.subtitle}</span>
              </div>
              <div className="text-right w-[100px]">
                <span>{menuItem.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PricingTable;
