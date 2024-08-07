import React from "react";

const BannerService = () => {
  return (
    <section className="w-full bg-BannerService bg-cover bg-no-repeat p-[60px]">
      <div className="w-11/12 flex flex-col tablet:w-2/4 mx-auto items-center text-center  ">
        <h3 className="text-[40px] uppercase text-white">
          a morning without{" "}
          <span className="text-[80px] text-[#dc8068] font-GreatVibes">
            coffee
          </span>{" "}
          is like sleep
        </h3>
        <p className="my-[30px] text-[#c7a298]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eveniet
          deserunt cumque similique nisi laudantium distinctio accusantium alias
          unde debitis? Omnis veritatis animi tenetur illum beatae aperiam ullam
          nesciunt dolorum!
        </p>
        <a
          href="#"
          className="button-type-three bg-[#dc8068] py-[10px] px-[20px] text-white hover:bg-white transition-colors duration-200 hover:text-[#dc8068] hover:border-[#dc8068] uppercase rounded-xl border border-[#dc8068]"
        >
          know more
        </a>
      </div>
    </section>
  );
};

export default BannerService;
