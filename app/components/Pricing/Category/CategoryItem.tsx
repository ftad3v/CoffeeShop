"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface CategoryProps {
  id: number;
  title: string;
  subTitle: string;
  image: StaticImageData;
  color: string;
}

const variants0 = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.75,
      delay: 0.5,
    },
  },
};

const variants1 = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.75,
      delay: 1.2,
    },
  },
};

const variants3 = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.75,
      delay: 2,
    },
  },
};

function CategoryItem({ id, title, subTitle, image, color }: CategoryProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={id === 0 ? variants0 : id === 1 ? variants1 : variants3}
      viewport={{ once: true }}
    >
      <div
        className={`group flex-col flex items-center mobile:flex-row mobile:h-[200px] h-[500px] ${color} py-10 px-10 justify-between rounded-md`}
      >
        <Image
          className="group-hover:scale-110 mx-auto max-h-[220px] mobile:mx-2 mobile:max-w-[150px] transition-transform duration-300"
          src={image}
          alt={title}
        />
        <div className="gap-2">
          <span className="block text-center text-4xl font-bold">{title}</span>
          <span className="block text-center text-2xl my-3">{subTitle}</span>
          <div className="mx-auto border border-black px-3 py-2 rounded-md hover:bg-[#dc8068] hover:border-[#dc8068] hover:text-white cursor-pointer transition-colors duration-300">ORDER NOW</div>
        </div>
      </div>
    </motion.div>
  );
}

export default CategoryItem;
