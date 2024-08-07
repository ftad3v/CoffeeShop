import Image from "next/image";
import contactImage from "@/public/images/contact-img.png";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div
      className="w-full 
    tablet:h-[700px] 
    desktop:bg-ContactBanner 
    tablet:bg-ContactBannerWall 
    mobile:bg-ContactBannerWall 
    bg-no-repeat 
    bg-center 
    bg-cover 
    flex 
    items-center 
    desktop:justify-end 
    mobile:justify-center 
    tablet:justify-center 
    desktop:pe-[120px] 
    tablet:pe-20"
    >
      <div
        className="
      desktop:w-80 
    desktop:text-white 
    tablet:text-black 
    mobile:text-black 
    tablet:text-center
    desktop:text-start"
      >
        <div
          className="
        flex 
        tablet:items-center 
        desktop:items-start 
        desktop:flex-col  
        gap-5  
        mobile:justify-center 
        tablet:justify-center 
        desktop:w-80"
        >
          <GrMapLocation
            size={100}
            className="
          tablet:w-20 
          desktop:w-32"
          />
          <h2
            className="
          uppercase 
          desktop:text-6xl 
          tablet:text-4xl 
          font-bold"
          >
            coffee and you
          </h2>
        </div>
        <div className="uppercase">
          <h3 className="text-[40px]">
            <span className="font-bold">44</span> park street
          </h3>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
            ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
