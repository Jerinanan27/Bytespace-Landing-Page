"use client";

import { useState } from "react";
import { categoryTabRows, courses } from "@/data/content";
import CourseCard from "./CourseCard";

// Intro copy, the category filter pills and the grid of course cards.
export default function CoursesSection() {
  const [active, setActive] = useState(categoryTabRows[0][0]);

  return (
    <section id="courses" className="bg-white pt-[72px]">
      <div className="container-x">
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2 className="max-w-[588px] font-heading text-[32px] font-semibold leading-[1.2] tracking-heading text-ink lg:text-[44px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="font-body text-lg leading-[1.6] text-gray-400">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
            courses across different fields, from technology to the arts, and make a difference in your
            career and life.
          </p>
        </div>

        <div className="mt-[42px] flex flex-col items-center gap-[21px]">
          {categoryTabRows.map((row, r) => (
            <div key={r} className="flex flex-wrap justify-center gap-4">
              {row.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  aria-pressed={active === tab}
                  className={`whitespace-nowrap rounded-pill px-4 py-3 font-body text-base leading-[1.2] transition-colors ${
                    active === tab
                      ? "bg-electric-lime text-gray-950"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
              {r === categoryTabRows.length - 1 && (
                <button className="whitespace-nowrap py-3 font-body text-base leading-[1.2] text-persian-blue hover:underline">
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-[77px] grid max-w-[1199px] grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="w-full max-w-[373px]">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
