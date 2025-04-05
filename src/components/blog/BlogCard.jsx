"use client";
import React from "react";

function BlogCard({ image, altText, title, excerpt, date }) {
  return (
    <article className="flex flex-col flex-1 items-start bg-white rounded shadow-2xl max-w-[570px] max-sm:max-w-full">
      <div className="overflow-hidden w-full rounded-2xl">
        <img
          src={image}
          className="object-cover w-full rounded h-[206px]"
          alt={altText}
        />
      </div>
      <div className="px-11 py-6 w-full max-sm:p-5">
        <h3 className="mb-2 text-lg font-semibold tracking-tighter leading-7 text-primary">
          {title}
        </h3>
        <p className="mb-6 text-xs leading-6 text-secondery">{excerpt}</p>
        <footer className="flex justify-between items-center pt-6 border-t border-solid border-t-black border-t-opacity-10 max-sm:flex-col max-sm:gap-4 max-sm:items-start">
          <time className="text-xs font-semibold leading-7 uppercase text-primary">
            {date}
          </time>
          <div className="flex gap-2 items-center">
            <span className="text-xs font-semibold leading-7 uppercase text-primary">
              Share:
            </span>
            <div className="flex items-center max-sm:mt-2.5">
              <button
                className="px-2.5 py-0.5 text-xs font-semibold leading-3 uppercase"
                aria-label="Share on Facebook"
              >
                Facebook
              </button>
              <button
                className="px-2.5 py-0.5 text-xs font-semibold leading-3 uppercase"
                aria-label="Share on Twitter"
              >
                Twitter
              </button>
              <button
                className="px-2.5 py-0.5 text-xs font-semibold leading-3 uppercase"
                aria-label="Share on Google Plus"
              >
                Google Plus
              </button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}

export default BlogCard;
