import React, { useRef } from "react";
import "./investing.css";
import Footer from "../footer/Footer";
import { useInView } from "framer-motion";

const Investing = () => {
  const myRef = useRef(null);
  const myView = useInView(myRef);
  return (
    <div className="investing w-[100%] bg-center bg-cover px-5" ref={myRef}>
      <div className="heading w-[100%] m-auto text-center h-[25%] align-middle p-[5%]">
        <h2 className="m-auto text-[30px]"> Investing</h2>
      </div>

      <div className="phoneContainer flex flex-col md:flex-row">
        <div className="container1 flex  w-[100%] md:w-[50%] flex-col sm:flex-row gap-3">
          <div className="text w-[100%] pt-5 m-auto sm:w-[50%]">
            <h2 className="text-[22px]">Stocks</h2>
            <p className=" font-sans text-[16px]">
              {" "}
              Whether you’re an expert or just getting started, Cash App is the
              fastest and most accessible way to invest in stocks. Start now
              with as little as $1.
            </p>
          </div>
          <div className="image w-[100%] md:w-[50%]">
            <img
              src="/img/stocks.png"
              className={
                myView
                  ? "aspect-[161/349] max-w-[170px] m-auto animate-changeCol"
                  : ""
              }
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div className="container2  flex  w-[100%] md:w-[50%] flex-col-reverse sm:flex-row gap-3">
          <div className="image w-[100%] md:w-[50%]">
            <img
              src="/img/bitcoin.png"
              className={
                myView
                  ? "aspect-[161/349] max-w-[170px] m-auto animate-changeCol"
                  : ""
              }
              alt=""
              srcset=""
            />
          </div>
          <div className="text w-[100%] pt-5 m-auto sm:w-[50%]">
            <h2 className="text-[22px]">Bitcoin</h2>
            <p className="font-sans text-[16px]">
              Cash App is the fastest way to convert dollars to bitcoin. From
              your home screen, six taps are all it takes to stack sats, buy an
              entire bitcoin, or just see what it’s all about.
            </p>
          </div>
        </div>
      </div>

      <div className="footer mt-[70px] pb-[5px]">
        <Footer className="mt-12" />
      </div>
    </div>
  );
};

export default Investing;
