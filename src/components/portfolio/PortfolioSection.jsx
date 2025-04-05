
import React, { useState } from "react";
import PortfolioFilter from "./PortfolioFilter";

// images
import fort1 from "../../assets/portfolio-1.jpg"
import fort2 from "../../assets/portfolio-2.jpg"
import fort3 from "../../assets/portfolio-3.jpg"
import fort4 from "../../assets/portfolio-4.jpg"
import fort5 from "../../assets/portfolio-5.jpg"
import fort6 from "../../assets/portfolio-6.jpg"
import fort7 from "../../assets/portfolio-7.jpg"
import fort8 from "../../assets/portfolio-8.jpg"
import masonry from "../../assets/masonry.png"

function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Show All");

  const categories = ["Show All", "Websites", "Logos", "Brands"];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <section
      className="flex flex-col justify-center items-center self-stretch py-16 uppercase bg-slate-100 text-primary"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          <div className="flex-1 shrink px-3 w-full basis-0 ">
            <h2
              id="portfolio-heading"
              className="cmnHead"
            >
              Portfolio
            </h2>

            <nav aria-label="Portfolio categories">
              <ul className="flex flex-wrap mt-4 w-full text-sm font-bold leading-6 max-md:max-w-full">
                {categories.map((category) => (
                  <li
                    key={category}
                    className={
                      category === "Show All"
                        ? "w-[137px]"
                        : category === "Websites"
                          ? "w-[134px]"
                          : category === "Logos"
                            ? "w-[116px]"
                            : "w-[125px]"
                    }
                  >
                    <PortfolioFilter
                      category={category}
                      isActive={activeFilter === category}
                      onClick={() => handleFilterClick(category)}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            <figure className="mt-4 w-full">
                <img src={masonry} alt="masonry" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
