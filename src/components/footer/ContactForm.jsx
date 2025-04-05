"use client";
import React from "react";

function ContactForm() {
  return (
    <section className="flex flex-col flex-1 justify-center py-16 w-full bg-brand max-md:max-w-full">
      <div className="flex flex-wrap pr-4 pl-96 w-full max-md:pl-5 max-md:max-w-full">
        <div className="flex-1 shrink px-4 w-full basis-0 max-w-[555px] min-h-px min-w-60 max-md:max-w-full">
          <h2 className="w-full text-2xl font-extrabold tracking-tighter leading-loose max-md:max-w-full">
            SAY HELLO
          </h2>
          <form className="flex flex-col gap-7 mt-4 w-full text-xs font-semibold max-md:max-w-full">
            <div className="   rounded border-solid border-b border-black/30 w-full max-md:max-w-full">
              <label className="overflow-hidden pb-px w-full max-md:max-w-full">
                YOUR NAME *
                <input
                  type="text"
                  className="block w-full outline-none  "
                  aria-label="Your name"
                  required
                />
              </label>
            </div>
            <div className="   rounded border-solid border-b border-black/30 w-full max-md:max-w-full">
              <label className="overflow-hidden pb-px w-full max-md:max-w-full">
                SUBJECT *
                <input
                  type="text"
                  className="block w-full outline-none "
                  aria-label="Subject"
                  required
                />
              </label>
            </div>
            <div className="    rounded border-solid border-b border-black/30 leading-[22px] min-h-[100px] w-full max-md:max-w-full">
              <label className="w-full max-md:max-w-full">
                MESSAGE*
                <textarea className="block w-full outline-none " aria-label="Message" required />
              </label>
            </div>
            <button
              type="submit"
              className="overflow-hidden self-start px-8 py-3 mt-4 text-sm text-center text-white whitespace-nowrap border border-solid bg-primary border-primary rounded-[35px] max-md:px-5"
              aria-label="Submit form"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
