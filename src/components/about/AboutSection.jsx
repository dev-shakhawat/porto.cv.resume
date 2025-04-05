import React from "react";
import PersonalDetails from "./PersonalDetails";

function AboutSection() {
  return (
    <section className="flex flex-col items-center py-16 w-full bg-white">
      <div className="container">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold tracking-tighter uppercase text-stone-900">
            About Me
          </h2>

          <div className="flex gap-8 max-md:flex-col">
            <div className="flex-1">
              <p className="text-sm leading-7 text-neutral-500">
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <button className="px-5 py-1.5 mt-5 text-xs font-semibold text-white uppercase border bg-neutral-700 border-neutral-700 rounded-[35px]">
                View More
              </button>
            </div>

            <PersonalDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
