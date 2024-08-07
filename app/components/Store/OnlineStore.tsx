"use client";
import React, { useState } from "react";
import PageHeader from "../PageHeader";
import CardMenu from "./CardMenu";
import StoreFilterButton from "./StoreFilterButton";
import { CardItemProps } from "@/app/context/StoreContext";

const categoryList = [
  { type: "*", title: "all" },
  { type: "type1", title: "coffee" },
  { type: "type2", title: "beans" },
  { type: "type3", title: "organic" },
  { type: "type4", title: "type4" },
  { type: "type5", title: "type5" },
];
const cardData: CardItemProps[] = [
  {
    id: 1,
    name: "Colombian Coffee",
    description: "Fresh Colombian coffee beans with a rich aroma.",
    type: "type1", // Adjusted to match filter types
    image: "/images/blog-img2.jpg",
    price: 10,
  },
  {
    id: 2,
    name: "Organic Beans",
    description: "Organic beans for a healthy lifestyle.",
    type: "type2",
    image: "/images/book-table-img.jpg",
    price: 20,
  },
  {
    id: 3,
    name: "Organic Tea",
    description: "Refreshing organic tea leaves.",
    type: "type3",
    image: "/images/order-type2.png",
    price: 12,
  },
  {
    id: 4,
    name: "Arabica Coffee",
    description: "Premium Arabica coffee beans.",
    type: "type1",
    image: "/images/store-product.jpg",
    price: 18,
  },
  {
    id: 5,
    name: "Green Beans",
    description: "Fresh green beans for your favorite dishes.",
    type: "type2",
    image: "/images/blog-img1.jpg",
    price: 123,
  },
  {
    id: 6,
    name: "Herbal Tea",
    description: "Aromatic herbal tea blends.",
    type: "type3",
    image: "/images/blog-img3.jpg",
    price: 11,
  },
  {
    id: 7,
    name: "Exotic Coffee",
    description: "A unique blend of exotic coffee flavors.",
    type: "type4",
    image: "/images/blog-img4.jpg",
    price: 9,
  },
  {
    id: 8,
    name: "Special Beans",
    description: "High-quality special beans.",
    type: "type5",
    image: "/images/coffeebeans.jpg",
    price: 16,
  },
];

const OnlineStore = () => {
  const [activeFilter, setActiveFilter] = useState<string>("*");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filterCard =
    activeFilter === "*"
      ? cardData
      : cardData.filter((filter) => filter.type === activeFilter);

  return (
    <div className="overflow-hidden pb-[75px]" id="store">
      <div className="w-11/12 px-10 mx-auto">
        <PageHeader pageNumber="5" title="Our Online" subtitle="Store" />
        <ul className="mx-[15px] mb-10 grid 2xl:grid-cols-6 desktop:grid-cols-4 tablet:grid-cols-3 mobile:grid-cols-2 gap-16">
          {categoryList.map((item) => (
            <StoreFilterButton
              type={item.type}
              title={item.title}
              handleClick={() => handleFilterClick(item.type)}
              activeFilter={activeFilter}
              key={item.type}
            />
          ))}
        </ul>
        <div className="grid 2xl:grid-cols-4 desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-8">
          {filterCard.map((cardItem) => (
            <CardMenu
              name={cardItem.name}
              description={cardItem.description}
              image={cardItem.image}
              price={cardItem.price}
              id={cardItem.id}
              type={cardItem.type}
              key={cardItem.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineStore;
