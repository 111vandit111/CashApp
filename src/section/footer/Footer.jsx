import React from "react";
import { AiFillApple } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsArrowDown, BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="Footer flex flex-col relative z-40 items-center  md:flex-row gap-4">
      <div className="buttons w-[100%] justify-center flex  md:w-2/4 gap-8 md:justify-start ">
        <div className="apple flex items-center border-solid border-[1px] p-[10px] rounded-lg bg-white ">
          <AiFillApple className="text-[40px] text-[#00D54B] store" />
          <p className="text-[8px] ">APPLE</p>
        </div>
        <div className="apple flex items-center border-solid border-[1px] p-[10px] rounded-lg bg-white ">
          <BiLogoPlayStore className="text-[40px] text-[#00D54B] store" />
          <p className="text-[8px] ">PLAYSTORE</p>
        </div>
      </div>
      <div className="downArrow w-2/4 items-center justify-center gap-8 md:flex">
        <div className="text text-[10px] font-mono font-light w-[363px] text-[#000000] hidden lg:block">
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

export default Footer;
