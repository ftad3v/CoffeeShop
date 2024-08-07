import Image from "next/image";
import React from "react";
import PricingTableDesktop from "./desktop/PricingTable";
import PricingTableMobile from "./mobile/PricingTable";
import CategorySection from "./Category/CategorySection";
import BookOrder from "./BookOrder";
import PageHeader from "../PageHeader";

function PricingSection() {
  return (
    <section className="pb-16 border-[#f2f2f2] block border">
      <div className="w-11/12  mx-auto bg-[#fff] px-[15px] ">
        <PageHeader pageNumber="01" title="Our Special" subtitle="Menu" />
        <div className="mobile:block desktop:hidden tablet:hidden 2xl:hidden">
          <PricingTableMobile />
        </div>
        <div className="mobile:hidden">
          <PricingTableDesktop />
        </div>
        <CategorySection />
        <BookOrder />
      </div>
    </section>
  );
}

export default PricingSection;
