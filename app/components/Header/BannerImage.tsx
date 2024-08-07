import Image from "next/image";
import logoCup from "@/public/images/logo-cup.png";
import logo from "@/public/images/logo.png";
import cup from "@/public/images/cup.png";
import txt2 from "@/public/images/txt2.png";
import txt1 from "@/public/images/txt1.png";
import coffeeDrop3 from "@/public/images/coffee-drop3.png";

const BannerImage = () => {
  return (
    <div className="w-full text-center">
      <p className="pl-10 mb-3 flex justify-center w-full font-[sans-serif]">
        SINCE 1939
      </p>
      <div className="max-w-[440px] inline-block relative">
        <Image src={logoCup} alt="logocup" className="opacity-0 max-w-full" />
        <Image
          src={logo}
          alt="logo"
          className="absolute top-0 left-[37.7%] max-w-[36%] align-middle"
        />
        <Image
          src={cup}
          alt="cup"
          className="absolute bottom-0 left-0 max-w-full opacity-0 animated fadeInUp"
        />
        <Image
          src={txt2}
          alt="Banner Image"
          className="absolute top-1/4 left-1/4 z-[2] max-w-[55%] opacity-0 animated fadeInLeft"
        />
        <Image
          src={txt1}
          alt="Banner Image"
          className="absolute top-[37%] left-[20%] z-[2] max-w-[75%] opacity-0 align-middle animated fadeInRight"
        />
        <div className="h-0 absolute left-[37.6%] top-[15.4%] overflow-hidden  reveal-animation max-w-[35.5%]">
          <Image
            src={coffeeDrop3}
            alt="Banner Image"
            className="max-w-full h-auto border-0 align-middle "
          />
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
