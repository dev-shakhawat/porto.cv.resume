"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

function Recommendations() {
  return (
    <div
      className="flex flex-col items-center px-0 py-16 w-full bg-brand"
      aria-labelledby="recommendations-heading"
    >
      <div className="flex flex-col items-start py-0 mx-auto w-full container">
        <div className="w-full">
          <h2
            id="recommendations-heading"
            className="cmnHead"
          >
            Recommendations
          </h2>

          <TestimonialCard
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu. Praesent aliquam velit vel libero dictum, non sollicitudin lectus mollis. Morbi sollicitudin auctor gravida."
            name="Bob Doe"
            title="Director of Engineering"
          />

          <div
            className="flex gap-1 justify-end pt-0 pr-16 pb-2 pl-0 max-sm:pr-5"
            role="navigation"
            aria-label="Testimonial navigation"
          >
            <button
              className="w-3 h-3 border-2 border-solid border-primary rounded-[30px]"
              aria-label="View testimonial 1"
              aria-current="true"
            />
            <button
              className="w-3 h-3 border-2 border-solid border-primary rounded-[30px]"
              aria-label="View testimonial 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
