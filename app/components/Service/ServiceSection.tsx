import React from "react";
import PageHeader from "../PageHeader";
import Image from "next/image";
import service from "@/public/images/service-img.jpg";
import ServiceItem from "./ServiceItem";

const items = [
  { id: 0, title: "Service 01" },
  { id: 1, title: "Service 02" },
  { id: 2, title: "Service 03" },
  { id: 3, title: "Service 04" },
  { id: 4, title: "Service 05" },
  { id: 5, title: "Service 06" },
];

function ServiceSection() {
  return (
    <section className="flex">
      <div className="w-11/12  mx-auto bg-[#fff] px-[15px] mobile:mb-5">
        <PageHeader pageNumber="03" title="Our Special" subtitle="Services" />
        {/* container content */}
        <div className="w-full flex mt-5">
          <div className="w-1/2 min-h-[1px] mobile:hidden">
            <Image src={service} alt="service" />
          </div>
          <div className="w-1/2 mt-7 flex flex-col mobile:w-full">
            <div className="flex flex-col">
              <span className="text-black text-start text-4xl">
                Coffee and You
              </span>
              <span className="mt-6 leading-8 text-[#7a6c66]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                ipsum nemo neque a beatae aliquid dignissimos? Laborum
                laboriosam dignissimos quisquam quam, expedita, modi autem
                impedit ab iusto esse exercitationem animi.
              </span>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {items.map((item) => (
                <ServiceItem key={item.id} title={item.title} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
