import React from "react";

function CarsFilterOptions() {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Car Catalog</h2>
        <h2>Explore our Inventory!</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Prices
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full md:block max-w-xs hidden">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Chevrolet</option>
          <option>Ford</option>
        </select>
      </div>
    </div>
  );
}

export default CarsFilterOptions;
