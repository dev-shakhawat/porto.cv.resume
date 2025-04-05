"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

function ContactSection() {
  return (
    <div>
      <div className="flex flex-wrap w-full max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-center uppercase basis-0 max-w-[1920px] min-w-60 text-primary max-md:max-w-full">
          <ContactForm />
        </div>
        <div className="flex flex-col flex-1 shrink justify-center basis-0 max-w-[1920px] min-w-60 max-md:max-w-full">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
