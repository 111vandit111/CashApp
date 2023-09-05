import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsArrowDown, BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";

const HeroFooter = () => {
  return (
    <div className="heroFooter flex flex-col relative z-40 items-center px-10 md:flex-row gap-4">
      <div className="buttons w-[100%] justify-center flex  md:w-2/4 gap-8 md:justify-start ">
        <div className="apple flex items-center border-solid border-[1px] p-[10px] rounded-lg bg-black ">
          <AiFillApple className="text-[40px] text-[#00D54B] store" />
          <p>APPLE</p>
        </div>
        <div className="play flex items-center border-solid border-[1px] p-[10px] rounded-lg bg-black ">
          <BiLogoPlayStore className="text-[40px] text-[#00D54B] store" />
          <p>PLAYSTORE</p>
        </div>
      </div>
      <div className="downArrow w-2/4 items-center justify-between md:flex">
        <div className="hidden arrow md:block motion-safe:animate-bounce">
          <BsArrowDown className="text-[30px] text-[#00D54B]" />
        </div>
        <div className="text text-[10px] font-mono font-light w-[363px] text-[#B6B6B6] hidden lg:block">
          <p>
            Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
            See our BrokerCheck. Investing involves risk; you may lose money.
            Bitcoin trading offered by Cash App. Cash App Investing does not
            trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash
            App facilitates banking services through Sutton Bank and Lincoln
            Savings Bank, Members FDIC.
          </p>
        </div>

        <div className="socials flex gap-5 text-[17px] justify-center">
          <BsTwitch />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
