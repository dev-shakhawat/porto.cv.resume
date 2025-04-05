import React from "react";

function DetailItem({ label, value, gapClass = "gap-10" }) {
  return (
    <div className={`flex ${gapClass} items-center`}>
      <span className="text-sm font-semibold uppercase text-stone-900">
        {label}
      </span>
      <span className="text-sm font-semibold uppercase text-slate-500">
        {value}
      </span>
    </div>
  );
}

export default DetailItem;
