import React from "react";
import heroImg from "@/assets/images/illustration-hero.svg";
import Image from "next/image";
import musicIcon from "@/assets/images/icon-music.svg";
const Card = () => {
  return (
    <div className="relative flex justify-center items-center h-screen ">
      <div className="max-w-[400px] shadow-2xl rounded-2xl overflow-hidden bg-white">
        <Image src={heroImg} alt="hero_image" className="" />
        <div className="mx-8">
          <main className="mt-2 text-center justify-center">
            <h1 className="font-extrabold text-3xl pt-6 pb-4">Order Summary</h1>
            <p className=" text-gray-400 pb-4  ">
              You can now listen to millions of songs. audiobooks. and podcasts
              on any device anywhere you like!
            </p>
            <section className="flex mt-3 justify-around items-center bg-[hsl(225,100%,98%)] rounded-2xl py-4 gap-14">
              <div className="flex  gap-4">
                <Image src={musicIcon} alt="musicIcon" />
                <span>
                  <h1 className="font-bold">Annual Plan</h1>
                  <p className="text-gray-500 font-bold text-sm">$59.99/year</p>
                </span>
              </div>
              <button className="text-purple-600 font-bold hover:opacity-80 ">
                Change
              </button>
            </section>
            <div className="mt-4 flex flex-col">
              <button className="w-full bg-[hsl(245,75%,52%)] text-white font-bold p-4 rounded-2xl drop-shadow-2xl cursor-pointer hover:opacity-70 hover:underline ">
                Proceed to Payment
              </button>
              <button className="w-full font-extrabold pt-5 pb-10 cursor-pointer text-gray-600 hover:text-black  ">
                Cancel Order
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Card;
