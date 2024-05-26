"use client";
import CarsFilterOptions from "@/components/Home/CarsFilterOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";

export default function Home() {
  const getCarList_ = async () => {
    //left off here 5/26 8am yt video timestamp at 57:33
  };
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <CarsFilterOptions />
    </div>
  );
}
