import React from "react";
import DetailItem from "./DetailItem";

function PersonalDetails() {
  const personalInfo = [
    { label: "Birthday:", value: "1990 October 2" },
    { label: "Skype:", value: "yourskype" },
    { label: "Marital:", value: "Single" },
    { label: "Phone:", value: "123-456-789" },
    { label: "Nationality:", value: "American" },
    { label: "Email:", value: "me@domain.com" },
  ];

  return (
    <article className="p-9 bg-white shadow-2xl max-md:w-full">
      <h3 className="mb-3.5 text-xl font-semibold text-stone-900">
        Personal Details
      </h3>
      <div className="grid grid-cols-2 gap-px max-sm:grid-cols-1">
        {personalInfo.map((item, index) => (
          <DetailItem
            key={index}
            label={item.label}
            value={item.value}
            gapClass={
              item.label === "Birthday:"
                ? "gap-10"
                : item.label === "Skype:"
                ? "gap-16"
                : item.label === "Marital:"
                ? "gap-12"
                : item.label === "Phone:"
                ? "gap-14"
                : item.label === "Nationality:"
                ? "gap-5"
                : "gap-16"
            }
          />
        ))}
      </div>
    </article>
  );
}

export default PersonalDetails;
