
import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaSkype } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import contactbg from "../../assets/contactbg.jpg"

function ContactInfo() {
  return (
    <div className="flex relative flex-col flex-1 justify-center py-16 w-full min-h-[436px] max-md:max-w-full">
      <img
        src={contactbg}
        alt="Background image"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-wrap justify-center pr-96 pl-4 w-full max-md:pr-5 max-md:max-w-full">
        <div className="flex-1 shrink px-4 w-full basis-0 max-w-[555px] min-h-px min-w-60 max-md:max-w-full">
          <a
            href="mailto:you@domain.com"
            className="flex justify-center items-start w-full max-md:max-w-full"
            aria-label="Email us"
          >
            <div className="flex flex-wrap flex-1 shrink items-center w-full basis-0 min-w-60 max-md:max-w-full">
              <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-10 rounded-[40px]">
                <div className="flex items-start w-5">
                  <IoMailOutline className="object-contain w-[19px] text-white" />
                </div>
              </div>
              <div className="self-stretch pb-1.5 pl-6 my-auto whitespace-nowrap min-w-60 w-[243px]">
                <div className="w-full text-xs font-semibold leading-normal uppercase text-zinc-400">
                  Email
                </div>
                <div className="text-2xl font-light leading-none text-white">
                  you@domain.com
                </div>
              </div>
            </div>
          </a>

          <a
            href="tel:123-456-7890"
            className="flex justify-center items-start mt-6 w-full max-md:max-w-full"
            aria-label="Call us"
          >
            <div className="flex flex-wrap flex-1 shrink items-center w-full basis-0 min-w-60 max-md:max-w-full">
              <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-10 rounded-[40px]">
                <div className="flex items-start w-5">
                  <FiPhone className="object-contain w-[19px] text-white" />
                </div>
              </div>
              <div className="self-stretch pb-1.5 pl-6 my-auto whitespace-nowrap w-[186px]">
                <div className="w-full text-xs font-semibold leading-normal uppercase text-zinc-400">
                  Phone
                </div>
                <div className="text-2xl font-light leading-none text-white">
                  123-456-7890
                </div>
              </div>
            </div>
          </a>

          <a
            href="skype:yourskype"
            className="flex justify-center items-start mt-6 w-full max-md:max-w-full"
            aria-label="Contact on Skype"
          >
            <div className="flex flex-wrap flex-1 shrink items-center w-full basis-0 min-w-60 max-md:max-w-full">
              <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-10 rounded-[40px]">
                <div className="flex items-start w-5">
                  <FaSkype className="object-contain w-[19px] text-white" />
                </div>
              </div>
              <div className="self-stretch pb-1.5 pl-6 my-auto whitespace-nowrap w-[145px]">
                <div className="w-full text-xs font-semibold leading-normal uppercase text-zinc-400">
                  Skype
                </div>
                <div className="text-2xl font-light leading-none text-white">
                  yourskype
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-wrap items-center mt-6 w-full max-md:max-w-full">
            <div className="flex flex-col justify-center self-stretch p-2.5 my-auto w-10 rounded-[40px]">
              <div className="flex items-start w-5">
                <FaFacebookF className="object-contain w-[19px] text-white" />
              </div>
            </div>
            <div className="flex self-stretch my-auto w-[141px]">
              <div className="pl-6 w-[141px]">
                <div className="w-full text-xs font-semibold leading-normal uppercase text-zinc-400">
                  Follow me
                </div>
                <a
                  href="#"
                  className="text-2xl font-light leading-none text-white hover:underline"
                  aria-label="Follow on Facebook"
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="flex self-stretch px-3.5 pt-2 my-auto">
              <a
                href="#"
                className="text-2xl font-light leading-none text-white whitespace-nowrap border-r border-l border-[#52504D] px-[17px] hover:underline"
                aria-label="Follow on Twitter"
              >
                Twitter
              </a>
            </div>
            <div className="flex self-stretch pt-2 my-auto">
              <a
                href="#"
                className="text-2xl font-light leading-none text-white whitespace-nowrap hover:underline"
                aria-label="Follow on LinkedIn"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
