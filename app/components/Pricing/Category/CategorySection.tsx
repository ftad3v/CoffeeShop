import React from "react";
import CategoryItem from "./CategoryItem";
import item1Pic from "@/public/images/order-type1.png";
import item2Pic from "@/public/images/order-type2.png";
import item3Pic from "@/public/images/order-type3.png";

const items = [
  {
    id: 0,
    title: "Strong",
    subTitle: "afternoon",
    color: "bg-[#68d0af]",
    image: item1Pic,
  },
  {
    id: 1,
    title: "Cookie",
    subTitle: "& more",
    color: "bg-[#d2d86f]",
    image: item2Pic,
  },
  {
    id: 2,
    title: "Special",
    subTitle: "flavors",
    color: "bg-[#83bde7]",
    image: item3Pic,
  },
];

function CategorySection() {
  return (
    <div className="w-11/12 mx-auto grid gap-4 mobile:gap-0 mt-4 grid-flow-col mobile:grid-flow-row ">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          id={item.id}
          title={item.title}
          subTitle={item.subTitle}
          color={item.color}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default CategorySection;
