import React from "react";

function LanguageItem({ flagSrc, language, proficiency }) {
  return (
    <div className="flex gap-1 items-start w-full">
      <div className="flex gap-1 items-center pr-14 min-w-[130px] text-primary">
        <img
          src={flagSrc}
          alt={`${language} flag`}
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.45]"
        />
        <div className="self-stretch my-auto">{language}:</div>
      </div>
      <div className="text-secondery">{proficiency}</div>
    </div>
  );
}

export default LanguageItem;
