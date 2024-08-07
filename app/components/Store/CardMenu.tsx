"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { delay, motion } from "framer-motion";
import { CardItemProps, useStore } from "@/app/context/StoreContext";
import { FaRegFaceLaugh } from "react-icons/fa6";
import Link from "next/link";

const variants = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },
  visible: {
    opacity: 0.5,
    scale: 0,
    borderRadius: "100%",
  },
};

const btnTextVarient = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    // transition: {
    //   ease: "easeInOut",
    //   duration: 1000,
    // },
  },
};

const CardMenu = (item: CardItemProps) => {
  const { addToCart } = useStore();

  const [isAdded, setIsAdded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileHover="visible"
      //   variants={variants}
      className="w-full h-[520px] shadow-lg rounded-lg overflow-hidden relative "
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute opacity-50  h-[280px]  w-full top-0 left-0  bg-white overflow-hidden"
      ></motion.div>
      <Image
        src={item.image}
        width={0}
        height={0}
        sizes="100%"
        alt="menu"
        className="w-full h-[300px] bg-no-repeat bg-center overflow-hidden"
      />
      {/* product price */}
      <div className="absolute w-[60px] h-[60px] rounded-full bg-[#dc8068] right-4 top-[270px] text-white ">
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-xl font-bold">$ {item.price}</span>
        </div>
      </div>
      {/* product detail */}
      <div className="py-10 px-[15px] bg-[#3f3530] leading-7 h-[166px]">
        <h3 className="text-white font-normal text-lg">{item.name}</h3>
        <p className="text-[#e6a391]">{item.description}</p>
      </div>
      {/* button to add cart */}
      <div className="flex w-full text-center ">
        <motion.button
          // href="#"

          className="bg-[#5c4543] text-[#e6a391] py-[15px] px-[5px] w-1/2 hover:opacity-90 hover:transition-opacity hover:duration-300 duration-300 "
          onClick={async () => {
            addToCart(item);
            setIsAdded(true);
            setTimeout(() => {
              setIsAdded(false);
            }, 2000);
          }}
        >
          {isAdded ? (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="flex justify-center items-center gap-2"
              transition={{
                ease: "easeInOut",
                duration: 0.7,
              }}
            >
              Added!
              <FaRegFaceLaugh />
            </motion.div>
          ) : (
            "Add to Cart"
          )}
        </motion.button>
        <Link href="/cart" className="bg-[#dc8068] w-1/2">
          <button
            className=" text-white py-[15px] px-[5px] w-full hover:bg-[#c96046]  hover:transition-colors hover:duration-300 duration-300 "
            onClick={() => addToCart(item)}
          >
            Buy Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CardMenu;
