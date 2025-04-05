"use client";
import React from "react";
import EducationCard from "./EducationCard";

const EducationSection = () => {
  // Education data could be fetched from an API or passed as props
  const educationData = [
    {
      id: 1,
      university: "Porto University",
      degree: "Master of Information Technology",
      years: "2001-2025",
    },
    {
      id: 2,
      university: "Porto University",
      degree: "Master of Information Technology",
      years: "2001-2025",
    },
  ];

  return (
    <section
      className="flex flex-col items-center px-0 py-16 bg-white"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center items-start w-full">
          <div className="flex flex-col flex-1 items-start px-3 py-0 w-full">
            <h2
              id="education-heading"
              className="cmnHead"
            >
              Education
            </h2>
            <div className="flex flex-col gap-2.5 items-start w-full">
              <div className="flex relative justify-end items-center w-full">
                <div className="flex flex-wrap gap-6 w-full">
                  {educationData.map((item) => (
                    <EducationCard
                      key={item.id}
                      university={item.university}
                      degree={item.degree}
                      years={item.years}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
