import Image from "next/image";
import React from "react";
import bgImg from "@/assets/images/pattern-background-desktop.svg";
import bgImgMobile from "@/assets/images/pattern-background-mobile.svg";
import Card from "@/components/Card";
const Home = () => {
  return (
    <div className="bg-[hsl(225,100%,94%)] min-h-screen w-full ">
      <div className="absolute">
        <Image
          className="hidden sm:flex"
          src={bgImg}
          alt="background-img"
          height={2500}
          width={2500} 
        />
        <Image
          className="sm:hidden h-auto w-full"
          src={bgImgMobile}
          alt="background-img-mobile"
          height={1200}
          width={1200}
        />
      </div>
      {/* <div className="relative" > */}

      <Card />
      {/* </div> */}
    </div>
  );
};

export default Home;
