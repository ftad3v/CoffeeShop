import Image from "next/image";
import React from "react";
import coffeeCup from "@/public/images/coffee-cup.png";

export const MenuItems = [
  {
    id: 0,
    title: "Cappucino",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 1,
    title: "Americano",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 2,
    title: "Hot Chocolate",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 3,
    title: "Espresso",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },

  {
    id: 4,
    title: "Latte",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 5,
    title: "Macchiato",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 6,
    title: "Special",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 7,
    title: "Special",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
  {
    id: 8,
    title: "Special",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: "$ 12.99",
  },
];

const PricingTable = () => {
  return (
    <>
      <div
        className="flex w-11/12 h-[545px] mx-auto mt-5"
        // style={{ direction: "rtl" }}
      >
        <div className="relative w-[35%]">
          <div className="absolute bg-[#f1c152] h-[500px] w-full top-[45px]">
            <div className="mt-[300px] text-center flex flex-col gap-5 text-[#362e29]">
              <span className="font-bold text-4xl ">Good Morning</span>
              <span className="text-base italic mx-5 my-3 uppercase">
                a permium coffe make your day
              </span>
            </div>
          </div>
          <div className="absolute w-full">
            <Image
              className="mx-auto w-[250px] max-h-[360px]"
              src={coffeeCup}
              alt="coffeecup"
            />
          </div>
        </div>

        <div className="w-[65%] bg-[#362e29] h-[500px] mt-[45px] overflow-y-auto grid grid-cols-2 gap-5 px-5 ">
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
