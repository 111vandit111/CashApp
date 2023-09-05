import React, { useRef } from "react";
import phone from "/img/bankPhone.png";
import "./Banking.css";
import { useInView } from "framer-motion";

const Banking = () => {
  const myRef = useRef(null);
  const myView = useInView(myRef);
  return (
    <div
      className="banking w-[100%] h-screen bg-center bg-cover bg-no-repeat relative"
      ref={myRef}
    >
      <div className="text max-w-[300px] absolute z-[20] top-[40%] right-[60%] ">
        <h2 className="text-[30px] text-[#fff] ">Banking</h2>
        <p className="text-[14px] font-thin font-mono leading-none">
          Receive your paycheck, tax returns, and other direct deposits up to
          two days early using your Cash App routing and account number.
        </p>
      </div>
      <div className="images w-100% h-100% m-auto pt-[9%] ">
        <img
          src={phone}
          alt=""
          srcset=""
          className={myView ? "m-auto animate-bounce2" : "hidden"}
        />
      </div>
    </div>
  );
};

export default Banking;
