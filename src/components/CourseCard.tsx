import Image from "next/image";
import type { Course } from "@/data/content";
import AvatarStack from "./AvatarStack";

const learners = [1, 2, 3, 4].map((n) => `/images/learner-${n}.png`);

// One course: thumbnail with meta chips, title and rating, level and enrolled
// learners, then the price. Sized from the 373 x 384 card in the design.
export default function CourseCard({ course, dark = false }: { course: Course; dark?: boolean }) {
  return (
    <article className="h-[384px] rounded-[24px] border border-gray-200 bg-white p-[15px]">
      <div className="relative aspect-[341/195] w-full overflow-hidden rounded-[12px] bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, 90vw"
          className="object-cover"
        />
        <ul className="absolute left-[13px] top-[150px] flex gap-3">
          {[course.lessons, course.duration, course.comments].map((chip) => (
            <li
              key={chip}
              className="whitespace-nowrap rounded-pill bg-[rgba(246,246,246,0.6)] px-3 py-1.5 font-body text-xs font-medium leading-[1.2] text-black-700 backdrop-blur-[4px]"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-heading text-xl font-semibold leading-[1.2] tracking-heading text-black">
            {course.title}
          </h3>
          <p className="font-body text-xs leading-[1.6] text-black-700">
            by <span className="text-persian-blue">{course.author}</span>
          </p>
        </div>
        <div className="flex shrink-0 items-center">
          <span className="font-body text-lg leading-[1.6] text-black-700">{course.rating}</span>
          <Image src={dark ? "/images/icon-star-lime.png" : "/images/icon-star-gray.png"} alt="" width={72} height={72} className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-pill bg-gray-50 px-3 py-1.5">
          <Image src="/images/icon-signal.png" alt="" width={60} height={60} className="h-5 w-5" />
          <span className="font-body text-xs font-medium leading-[1.2] text-gray-700">{course.level}</span>
        </span>
        <AvatarStack
          srcs={learners}
          size={32}
          overlap={8}
          badge={course.learners}
          badgeClassName={dark ? "bg-gray-950 text-white" : "bg-electric-lime text-gray-950"}
          badgeTextClassName="text-xs font-medium"
        />
      </div>

      <p className="mt-4 flex items-end">
        <span className="font-heading text-xl font-semibold leading-[1.2] tracking-heading text-persian-blue">
          {course.price}
        </span>
        <span className="font-body text-xs leading-[1.6] text-black-700">/lifetime</span>
      </p>
    </article>
  );
}
