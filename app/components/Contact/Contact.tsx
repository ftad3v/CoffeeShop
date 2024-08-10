import Image from "next/image";
import contactImage from "@/public/images/contact-img.png";
import { GrMapLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div
      className="w-full 
    tablet:h-[700px] 
    mobile:h-[500px]
    bg-ContactBanner 
    bg-no-repeat 
    bg-center 
    bg-cover 
    flex 
    items-center 
    desktop:justify-start 
    mobile:justify-start 
    tablet:justify-start
    desktop:ps-[120px] 
    tablet:ps-20
    mobile:ps-10"
    >
      <div
        className="
      desktop:w-80 
    desktop:text-black 
    tablet:text-black 
    mobile:text-black 
    tablet:text-start
    desktop:text-start"
      >
        <div
          className="
        flex 
        tablet:items-center 
        desktop:items-center 
        desktop:flex-col  
        gap-5  
        mobile:justify-start 
        tablet:justify-start 
        desktop:w-80
        mobile:w-1/2"
        >
          <GrMapLocation
            size={100}
            className="
            mobile:w-10
          tablet:w-20 
          desktop:w-32"
          />
          <h2
            className="
          uppercase 
          desktop:text-6xl 
          tablet:text-4xl 
          mobile:text-3xl
          font-bold"
          >
            coffee and you
          </h2>
        </div>
        <div className="uppercase mobile:w-1/2">
          <h3
            className="desktop:text-6xl 
            tablet:text-4xl 
            mobile:text-3xl"
          >
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
