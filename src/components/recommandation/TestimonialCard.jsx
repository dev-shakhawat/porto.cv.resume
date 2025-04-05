import React from "react";

function TestimonialCard({ quote, name, title }) {
  return (
    <blockquote className="relative w-full">
      <div className="relative px-20 pt-10 pb-7 max-md:px-10 max-md:py-8 max-sm:p-5">
        <p className="relative px-2.5 py-0 text-sm leading-6 text-white z-[2] max-sm:text-sm max-sm:leading-6">
          {quote}
        </p>

        <span
          className="absolute top-0 left-2.5 text-7xl leading-[80px] text-stone-900 max-sm:text-6xl"
          aria-hidden="true"
        >
          &quot;
        </span>

        <span
          className="absolute right-2.5 -bottom-10 text-7xl leading-[80px] text-stone-900 max-sm:text-6xl"
          aria-hidden="true"
        >
          &quot;
        </span>

        <footer className="relative py-5 pr-0 pl-20 max-md:pl-10 max-sm:pl-5">
          <cite className="not-italic">
            <div className="mb-0.5 text-base font-bold leading-5 uppercase text-stone-900">
              {name}
            </div>
            <div className="text-sm font-light leading-4 text-white">
              {title}
            </div>
          </cite>
          <div
            className="mt-2.5 h-px bg-black bg-opacity-30 w-[100px]"
            aria-hidden="true"
          />
        </footer>
      </div>
    </blockquote>
  );
}

export default TestimonialCard;
