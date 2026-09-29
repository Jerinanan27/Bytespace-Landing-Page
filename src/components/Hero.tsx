import Image from "next/image";
import { heroOrnaments } from "@/data/content";
import Ornaments from "./Ornaments";
import { ProgressCard, StudentsCard, TagCard } from "./FloatingCards";

function SearchBar() {
  return (
    <form className="flex w-full max-w-[581px] flex-col items-stretch gap-4 sm:flex-row sm:items-start">
      <label className="flex h-[52px] flex-1 items-center gap-2 rounded-pill bg-white px-6">
        <Image src="/images/icon-search.png" alt="" width={72} height={72} className="h-6 w-6 shrink-0" />
        <input
          type="text"
          placeholder="Course, topic, creator"
          aria-label="Search courses"
          className="w-full bg-transparent font-body text-lg leading-[1.6] text-gray-950 placeholder:text-gray-400 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="rounded-pill bg-electric-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-gray-950 transition-transform hover:scale-[1.03]"
      >
        Search
      </button>
    </form>
  );
}

function Headline() {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <h1 className="max-w-[935px] font-heading text-[40px] font-semibold leading-[1.2] tracking-heading text-white sm:text-[56px] lg:text-[72px]">
        Get Access to Hundreds Courses Available
      </h1>
      <p className="font-body text-base leading-[1.6] text-gray-100 sm:text-lg lg:whitespace-nowrap">
        Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of
        courses.
      </p>
    </div>
  );
}

// Hero. On desktop every element sits at its coordinate from the 1440 x 1024
// design, measured from the page centre so the group stays centred on any width.
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-persian-blue">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />

      {/* Desktop */}
      <div className="relative hidden h-[1024px] lg:block">
        <div
          className="absolute top-[582px] h-[1149px] w-[1149px] rounded-full bg-electric-lime-500"
          style={{ left: "calc(50% - 575px)" }}
        />
        <Ornaments items={heroOrnaments} />
        <Image
          src="/images/hero-person.png"
          alt="Student listening to a course on his laptop"
          width={1444}
          height={1030}
          priority
          className="absolute top-[509px] h-[515px] w-[722px] max-w-none"
          style={{ left: "calc(50% - 310px)" }}
        />
        <div className="absolute left-1/2 top-[169px] flex w-[1200px] -translate-x-1/2 flex-col items-center gap-[60px]">
          <Headline />
          <SearchBar />
        </div>
        <div className="absolute top-[639px]" style={{ left: "calc(50% - 316px)" }}>
          <TagCard />
        </div>
        <div className="absolute top-[651px]" style={{ left: "calc(50% + 122px)" }}>
          <ProgressCard />
        </div>
        <div className="absolute top-[837px]" style={{ left: "calc(50% - 392px)" }}>
          <StudentsCard />
        </div>
      </div>

      {/* Tablet and mobile */}
      <div className="relative pt-[140px] lg:hidden">
        <div className="container-x flex flex-col items-center gap-10">
          <Headline />
          <SearchBar />
        </div>
        <div className="relative mx-auto mt-12 h-[330px] w-full max-w-[560px] overflow-hidden">
          <div className="absolute left-1/2 top-[70px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-electric-lime-500" />
          <Image
            src="/images/hero-person.png"
            alt="Student listening to a course on his laptop"
            width={1444}
            height={1030}
            className="absolute bottom-0 left-1/2 h-[320px] w-auto max-w-none -translate-x-[44%]"
          />
        </div>
        <div className="container-x flex flex-wrap justify-center gap-4 py-10">
          <TagCard />
          <ProgressCard />
          <StudentsCard />
        </div>
      </div>
    </section>
  );
}
