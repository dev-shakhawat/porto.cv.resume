
import React from "react";

const PortfolioFilter = ({ category, isActive, onClick }) => {
  return (
    <div className="flex flex-col justify-center pr-2.5 whitespace-nowrap">
      <div
        className={`max-w-full min-h-10 ${category === "Show All" ? "w-[127px]" : category === "Websites" ? "w-[124px]" : category === "Logos" ? "w-[106px]" : "w-[115px]"}`}
      >
        <button
          onClick={onClick}
          className={`px-5 py-2 border border-solid rounded-[35px] w-full  text-sm font-bold  uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand ${
            isActive
              ? "bg-brand border-brand"
              : "border-[#D0D3D6] hover:bg-gray-100"
          }`}
          aria-pressed={isActive}
        >
          {category}
        </button>
      </div>
    </div>
  );
};

export default PortfolioFilter;
