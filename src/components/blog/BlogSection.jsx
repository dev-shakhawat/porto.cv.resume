"use client";
import React from "react";
import BlogCard from "./BlogCard";

import blog1 from "../../assets/blog-1.jpg"
import blog2 from "../../assets/blog-2.jpg"

function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      altText: "Design blog post",
      title: "Design Driven",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapib...",
      date: "July 12-2025",
    },
    {
      id: 2,
      image: blog2,
      altText: "UI/UX blog post",
      title: "UI, UX Concepts",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique...",
      date: "July 12-2025",
    },
  ];

  return (
    <section className="flex flex-col items-center px-0 py-16 bg-white">
      <div className="flex flex-col items-start container">
        <h2 className="cmnHead">
          My Blog
        </h2>
        <div className="flex flex-wrap gap-6 items-start self-stretch max-md:justify-center">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              altText={post.altText}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>
        <button
          className="px-8 py-2.5 mt-6 w-fit mx-auto text-xs font-bold leading-5 uppercase border border-solid border-secondery rounded-[35px] text-primary"
          aria-label="View all blog posts"
        >
          View All
        </button>
      </div>
    </section>
  );
}

export default BlogSection;
