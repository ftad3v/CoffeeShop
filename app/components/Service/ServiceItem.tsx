"use client";
import React from "react";
import serviceBG from "@/public/images/service-item-bg.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface ServiceItemProps {
  title: string;
  id: number;
}

function ServiceItem({ id, title }: ServiceItemProps) {
  return (
    <motion.div
      className="relative flex w-[150px] h-[150px] rounded-[100px] bg-black justify-center items-center group cursor-pointer"
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 0.9, boxShadow: '0px 0px 20px black' }}
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 1,
          transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 * id },
        },
      }}
    >
      <Image className="absolute" src={serviceBG} alt="service-item" />
      <span className="relative text-white z-10 group-hover:text-[#dc8068] text-xl">
        {title}
      </span>
    </motion.div>
  );
}

export default ServiceItem;
