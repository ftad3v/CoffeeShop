import React from "react";

function BookOrder() {
  return (
    <div className="w-11/12 flex mobile:flex-col mx-auto mt-5 border border-black h-[150px] px-20 py-5 justify-between items-center rounded-md">
      <div className="flex flex-col text-end mobile:text-center">
        <span className="text-3xl">Book your coffee now</span>
        <span className="text-[9px] italic">
          Call NOW @ our tell free number
        </span>
      </div>
      <div className="border-t w-[70px] border-black border -rotate-[70deg] mobile:hidden"></div>
      <span className="text-3xl">+0987654321</span>
    </div>
  );
}

export default BookOrder;
