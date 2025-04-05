import React from "react";

import { IoMailOpenOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { SlCloudDownload } from "react-icons/sl";

function ContactHeader() {

  return (
  <div className="py-7 border-b border-black/10  ">
    <div className="container">
    <div className="flex justify-end items-center  ">
        <ul className=" ml-[500px] flex flex-end gap-18  ">
          <li className=" flex min-w-fit items-center gap-3 px-8 border border-neutral-200 max-sm:px-4">
            <BiSupport className=" text-brand " />
            <span>contact information</span>
          </li>
          <li className=" flex min-w-fit items-center gap-3 px-8 border border-neutral-200 max-sm:px-4">
            <IoMailOpenOutline className=" text-brand " />
            <span>send message</span>
          </li>
          <li className=" flex min-w-fit items-center gap-3 px-8 border border-neutral-200 max-sm:px-4">
            <SlCloudDownload className=" text-brand " />
            <span>download resume</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default ContactHeader;
