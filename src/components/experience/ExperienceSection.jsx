"use client";
import React from "react";
import ExperienceCard from "./ExperienceCard";

function ExperienceSection() {
  // Sample experience data
  const experiences = [
    {
      id: 1,
      fromDate: "Sep 2012",
      toDate: "Present",
      duration: "(3 Years 9 Months)",
      company: "Okler Themes",
      location: "Greater New York",
      title: "Chief Product Officer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim
      tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque
      in tincidunt ligula, nec dignissim arcu.`,
    },
    {
      id: 2,
      fromDate: "Sep 2012",
      toDate: "Present",
      duration: "(3 Years 9 Months)",
      company: "Okler Themes",
      location: "Greater New York",
      title: "Chief Product Officer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim
      tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque
      in tincidunt ligula, nec dignissim arcu.`,
    },
    {
      id: 3,
      fromDate: "Sep 2012",
      toDate: "Present",
      duration: "(3 Years 9 Months)",
      company: "Okler Themes",
      location: "Greater New York",
      title: "Chief Product Officer",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim
      tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque
      in tincidunt ligula, nec dignissim arcu.`,
    },
  ];

  return (
    <section
      className="flex flex-col justify-center items-center self-stretch py-16 bg-slate-100"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="flex flex-wrap justify-center w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink pr-0.5 pl-3 w-full basis-0 max-w-[1140px] min-w-60 max-md:max-w-full">
            <h2
              id="experience-heading"
              className="cmnHead"
            >
              Experience
            </h2>

            <div className="relative self-end py-4 mt-4 max-w-full w-full">
              {/* Vertical timeline line */}
              <div
                className="flex absolute -left-10 z-0 bg-primary bottom-[124px] min-h-[498px] right-[1123px] top-[125px] w-[3px]"
                aria-hidden="true"
              />

              {/* Experience cards */}
              {experiences.map((experience, index) => (
                <div key={experience.id} className={index > 0 ? "mt-8" : ""}>
                  <ExperienceCard
                    fromDate={experience.fromDate}
                    toDate={experience.toDate}
                    duration={experience.duration}
                    company={experience.company}
                    location={experience.location}
                    title={experience.title}
                    description={experience.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
