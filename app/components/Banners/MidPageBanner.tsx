"use client";
import Image from "next/image";
import React from "react";
import milkCup from "@/public/images/milk-pour-cup.png";
import milkCup2 from "@/public/images/milk-pour2.png";
import pourCup from "@/public/images/pour-cup.png";
import milkDrops from "@/public/images/milk-drops.png";
import { motion } from "framer-motion";

const MidPageBanner = () => {
  return (
    <section className="tablet:text-center bg-midBanner bg-no-repeat bg-center w-full">
      <div className="relative tablet:h-[700px]  2xl:w-[1170px] desktop:w-[970px] tablet:w-[750px] mx-auto ">
        <div className=" absolute left-0 top-0 h-[90%]">
          <Image
            className="tablet:opacity-0 tablet:max-h-full tablet:h-auto max-w-full"
            src={milkCup}
            alt=""
          />
          <Image
            className="animated fadeInUp tablet:block bottom-[5%] max-w-[81%] left-0 absolute opacity-0 tablet:max-h-full tablet:h-auto "
            src={pourCup}
            alt=""
          />
          <motion.div
            className="absolute left-11 -top-[0.04rem] rounded-br-full rounded-bl-full h-[52%] overflow-hidden w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
            variants={{
              visible: { maxHeight: "52%" },
              hidden: { maxHeight: "0%" },
            }}
          >
            <Image src={milkCup2} alt="" width={270} className="opacity-[1] " />
          </motion.div>

          <motion.img
            className="absolute top-[40%] left-[39%]  transition-opacity duration-300 ease-out"
            src="/images/milk-drops.png"
            alt=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 2.5 }}
            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
          />
        </div>
        <div
          className="text-right relative top-[30%] tablet:ml-[50%] tablet:float-left tablet:w-1/2 min-h-[1px] py-[50px]"
          // style={{ direction: "rtl" }}
        >
          <h3 className="m-0 text-white text-[40px] uppercase">
            we are &quot;coffee and you&quot;
          </h3>
          <h3 className="m-0 text-white text-[40px] uppercase">
            a premium coffee shop
          </h3>
          <p className=" italic text-[#c7a298] text-sm mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, recusandae illo beatae exercitationem est voluptatum
            voluptates maxime porro velit repudiandae, sunt possimus rerum
            quaerat odit ullam nihil, quas quae sint?{" "}
          </p>
          <a
            href="#"
            className="button-type-three bg-[#dc8068] py-[10px] px-[20px] text-white hover:bg-white transition-colors duration-200 hover:text-[#dc8068] hover:border-[#dc8068] uppercase rounded-xl border border-[#dc8068]"
          >
            know more{" "}
          </a>
        </div>
      </div>
    </section>
    // <section
    //   className="midpage-banner1 banner-section text-center bg-cover bg-no-repeat p-0 overflow-hidden"
    //   style={{ backgroundImage: "url('/images/mid-banner1-bg.jpg')" }}
    // >
    //   <div className="container relative h-[700px] mx-auto">
    //     <div className="img-holder absolute left-0 top-0 h-[90%]">
    //       <Image
    //         className="milk-cup opacity-0"
    //         src="/images/milk-pour-cup.png"
    //         alt=""
    //         width={500}
    //         height={500}
    //       />
    //       <motion.img
    //         className="cup absolute bottom-[5%] left-0 max-w-[81%]"
    //         src="/images/pour-cup.png"
    //         alt=""
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 1 }}
    //       />
    //       <motion.div
    //         className="milk overflow-hidden rounded-b-full opacity-100 absolute top-0 max-h-[57%]"
    //         initial={{ maxHeight: "0%" }}
    //         animate={{ maxHeight: "57%" }}
    //         transition={{ duration: 1.5, ease: "easeOut" }}
    //       >
    //         <Image
    //           src="/images/milk-pour2.png"
    //           alt=""
    //           width={500}
    //           height={500}
    //         />
    //       </motion.div>
    //       <motion.img
    //         className="milk-drop absolute transition-opacity duration-300 ease-out"
    //         src="/images/milk-drops.png"
    //         alt=""
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         transition={{ duration: 0.3, delay: 1.5 }}
    //       />
    //     </div>
    //     <div className="banner1-details">
    //       <h3>We are `&quot;`Coffee and You`&quot;`</h3>
    //       <h3>A premium coffee shop</h3>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    //         aliquid aliquam asperiores, saepe alias dignissimos consectetur ea
    //         cum sint tenetur magnam. Illo quasi neque cupiditate beatae optio
    //         eos iusto, architecto!
    //       </p>
    //       <a href="#" className="button-type-three">
    //         Know More
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
};

export default MidPageBanner;
