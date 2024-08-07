"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import beans from "@/public/images/beans.gif";

interface PageHeaderProps {
  pageNumber: string;
  title: string;
  subtitle?: string;
}

const PageHeader = ({ pageNumber, title, subtitle }: PageHeaderProps) => {
  return (
    <div className="block">
      <div className="w-[75px] h-[118px] bg-[#dc8068] mx-auto">
        <Image className="mx-auto py-5" src={beans} alt="bean" />
        <span className="text-white mx-auto flex w-full justify-center">
          {pageNumber}
        </span>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="border-t w-[35%] border-red-300 border-dashed "></div>
        <motion.h1
          className="text-4xl mx-5 text-[#664d43] font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          {title}
        </motion.h1>
        <div className="border-t w-[35%] border-red-300 border-dashed"></div>
      </div>
      {subtitle != null && (
        <motion.h1
          className="font-bold text-7xl text-[#664d43] text-center my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {subtitle}
        </motion.h1>
      )}
    </div>
  );
};

export default PageHeader;
