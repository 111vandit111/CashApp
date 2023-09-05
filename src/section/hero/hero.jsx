import React, { useRef } from "react";
import Nav from "../../components/navbar/navbar";
import Cube1 from "/img/intro-cube.png";
import Cube2 from "/img/intro-cubes.png";
import Phone from "/img/intro-phone.png";
import Pillar from "/img/intro-pillar.png";
import Stairs from "/img/intro-stairs.png";
import HeroFooter from "../../components/heroFooter/HeroFooter";
import { useInView } from "framer-motion";

const Hero = () => {
  const myRef = useRef(null);
  const inView = useInView(myRef);

  return (
    <div
      className="hero bg-black bg-hero bg-cover w-[100%] h-max-[967px] text-white relative pb-3 bg-center"
      ref={myRef}
    >
      <Nav />
      <div className="HeroText size mt-[40px] min-h-[500px]">
        <h1 className="absolute  top-[35%] w-[100%] text-center ">
          <div className="underT   text-center lh z-[1] md:font-black">
            CASH
          </div>
          <div className="upperT text-center z-20 relative md:font-black">
            APP
          </div>
        </h1>
      </div>

      <div className="images">
        <img
          src={Cube1}
          alt=""
          srcset=""
          className="hidden lg:block  absolute top-20 left-20 animate-spin-slow"
        />
        <img
          src={Cube2}
          alt=""
          srcset=""
          className="hidden lg:block absolute bottom-[150px] left-20 animate-spin-slow"
        />
        <img
          src={Phone}
          alt=""
          srcset=""
          className={
            inView
              ? "w-[200px]  absolute m-auto md:w-[400px]  md:top-[20%]  md:z-10 PhoneImg animate-slideReveal"
              : "hidden"
          }
        />
        <img
          src={Pillar}
          alt=""
          srcset=""
          className="hidden lg:block absolute bottom-0 right-20 animate-spin-slow"
        />
        <img
          src={Stairs}
          alt=""
          srcset=""
          className="hidden lg:block absolute top-20 right-20 animate-spin-slow"
        />
      </div>

      <HeroFooter />
    </div>
  );
};

export default Hero;
