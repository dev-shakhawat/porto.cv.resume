"use client";
import React from "react";

function ExperienceCard({
  fromDate,
  toDate,
  duration,
  company,
  location,
  title,
  description,
}) {
  return (
    <article className="flex overflow-hidden flex-col justify-center w-full bg-white rounded shadow-2xl">
      <div className="flex flex-wrap min-h-[219px]">
        {/* Left column - Date and company information */}
        <div className="grow shrink px-7 pt-10 pb-5 bg-brand max-w-[1110px] min-w-60 text-primary w-[210px] max-md:px-5">
          <div className="flex gap-1 leading-tight">
            <div className="flex-1">
              <div className="text-xs uppercase">From</div>
              <div className="pb-px w-full text-base font-semibold">
                {fromDate}
              </div>
            </div>
            <div className="flex-1 whitespace-nowrap">
              <div className="text-xs uppercase">To</div>
              <div className="pb-px w-full text-base font-semibold">
                {toDate}
              </div>
            </div>
          </div>
          <div className="text-xs leading-7 uppercase">{duration}</div>
          <div className="mt-5">
            <div className="text-lg font-semibold leading-none">{company}</div>
            <div className="w-full text-xs leading-7 uppercase">{location}</div>
          </div>
        </div>

        {/* Right column - Job title and description */}
        <div className="grow shrink py-10 pr-7 pl-10 bg-white max-w-[1110px] min-w-60 w-[766px] max-md:px-5 max-md:max-w-full">
          <h3 className="w-full text-xl font-semibold tracking-tighter leading-none text-primary max-md:max-w-full">
            {title}
          </h3>
          <p className="mt-3.5 w-full text-sm leading-7 text-secondery max-md:max-w-full">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCard;
