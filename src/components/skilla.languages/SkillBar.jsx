import React from "react";

function SkillBar({ name, progressWidth }) {
  return (
    <div className="flex mt-2.5 first:mt-0    ">
      <div className="text-sm font-semibold min-w-[120px] leading-7 uppercase whitespace-nowrap text-primary">
        {name}
      </div>
      <div className="flex my-auto rounded-3xl min-h-[3px]">
        <div
          className="flex rounded-3xl bg-primary min-h-[3px]"
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
