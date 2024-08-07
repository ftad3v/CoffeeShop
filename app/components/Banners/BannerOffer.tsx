import Image from "next/image";
import percentOff from "@/public/images/percent-off.png";
import qrCode from "@/public/images/qr-code.jpg";

const BannerOffer = () => {
  return (
    <div className="w-full bg-[#372726] py-7 px-4 mobile:py-[60px] ">
      <div
        className="
      2xl:w-2/3 
      desktop:w-3/4 
      tablet:w-5/6 
      mx-auto
      desktop:flex 
      desktop:flex-row 
      desktop:justify-between 
      mobile:flex  
      mobile:flex-col 
      mobile:justify-between 
      mobile:items-center 
      tablet:flex
      tablet:flex-col 
      tablet:items-center 
      tablet:gap-5"
      >
        <div className="px-4 ml-7 flex items-center mobile:flex-col mobile:items-center mobile:gap-5">
          <div className="mr-8 mobile:mr-0">
            <Image src={percentOff} alt="percentOff" width={170} height={170} />
          </div>
          <div className="flex flex-col text-[#c7a298] mobile:text-center mobile:gap-5 mobile:mb-5">
            <p className="text-sm">On all flavors</p>
            <h3 className="text-white text-[40px] uppercase">friday special</h3>
            <p className="text-sm">
              offer valid only on friday from 1st july to 30th august 2024
            </p>
          </div>
        </div>
        <div className="desktop:p-4 desktop:bg-white w-1/3 desktop:items-center mobile:p-0 mobile:bg-[#dc8068] tablet:p-0 tablet:bg-[#dc8068] mobile:w-fit">
          <a
            href="#"
            className="flex flex-col items-center justify-center border border-dashed border-black p-2"
          >
            <Image
              alt="qrCode"
              src={qrCode}
              width={98}
              height={98}
              className="my-4 mobile:hidden tablet:hidden desktop:block"
            />
            <span className="mb-5 text-xl uppercase mobile:m-0 tablet:m-0">
              fs21321sdfsdfer1
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerOffer;
