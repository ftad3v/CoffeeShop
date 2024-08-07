import React from "react";

interface StoreFilterButtonProps {
  type: string;
  title: string;
  activeFilter: string;
  handleClick: () => void;
}

const StoreFilterButton = ({
  title,
  type,
  activeFilter,
  handleClick,
}: StoreFilterButtonProps) => {
  return (
    <li className="float-left w-full">
      <button
        className={`py-[15px] px-[5px] border  whitespace-nowrap w-full text-ellipsis uppercase transition-all duration-500 ${
          activeFilter === type
            ? "bg-[#dc8068] text-white border-[#dc8068] tracking-[4px]"
            : "hover:bg-[#dc8068] hover:text-white hover:border-[#dc8068] hover:tracking-[4px] border-black"
        }`}
        onClick={handleClick}
        data-filter={type}
      >
        {title}
      </button>
    </li>
  );
};

export default StoreFilterButton;
