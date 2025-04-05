
import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";

const EducationCard = ({ university, degree, years }) => {
  return (
    <div className="flex flex-col flex-1 px-3 pt-5 pb-11 max-w-[540px] min-w-[300px]">
      <div className="relative w-full bg-white shadow-2xl h-[207px]">
        <div>
            <RiGraduationCapLine className=" text-brand text-3xl absolute top-7 left-10  "/>
        </div>
        <h3 className="absolute text-xl font-bold tracking-tight leading-7 left-[45px] text-primary top-[79px]">
          {university}
        </h3>
        <p className="absolute text-sm leading-7 left-[45px] text-secondery top-[106px]">
          {degree}
        </p>
        <p className="absolute text-sm font-bold leading-7 text-brand left-[45px] top-[136px]">
          {years}
        </p>
      </div>
    </div>
  );
};

export default EducationCard;
