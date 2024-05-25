"use client";
import Image from "next/image";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h1 className="text-[40px] md:text-[60px] font-bold ">
          Find, Book, and Rent a Car - Quick and Easy!
        </h1>
        <h2 className="text-[20px] text-gray-500 pr-20 mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </h2>
        <button className="p-2 mt-5 bg-blue-500 text-white rounded-full px-4 hover:scale-105 transition-all">
          Explore Inventory
        </button>
      </div>
      <div>
        <Image
          src="/hero.png"
          alt="hero"
          width={300}
          height={400}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
}

export default Hero;
