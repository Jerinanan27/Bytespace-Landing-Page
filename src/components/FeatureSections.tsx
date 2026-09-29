import Image from "next/image";
import { courses, creatorBenefits, growthStats } from "@/data/content";
import CourseCard from "./CourseCard";
import { ProgressCard, StudentsCard } from "./FloatingCards";

// A composition drawn at its design size (e.g. 621 x 552). Below `sm` it is
// scaled down so it still fits a phone screen.
function Stage({ w, h, children }: { w: number; h: number; children: React.ReactNode }) {
  return (
    <div
      className="relative shrink-0 h-[calc(var(--h)*0.55)] w-[calc(var(--w)*0.55)] sm:h-[var(--h)] sm:w-[var(--w)]"
      style={{ "--w": `${w}px`, "--h": `${h}px` } as React.CSSProperties}
    >
      <div className="absolute left-0 top-0 h-[var(--h)] w-[var(--w)] origin-top-left scale-[0.55] sm:scale-100">
        {children}
      </div>
    </div>
  );
}

function Heading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-heading text-[32px] font-semibold leading-[1.2] tracking-heading text-gray-950 lg:text-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}

// "Your Path to Professional Growth" and "Create & Manage Courses Easily".
export default function FeatureSections() {
  return (
    <section
      id="creators"
      className="relative overflow-hidden bg-[#FAFAFA] bg-cover bg-center py-20 xl:h-[1460px] xl:py-[120px]"
      style={{ backgroundImage: "url(/images/bg-features.png)" }}
    >
      <div className="container-x relative flex flex-col gap-[72px]">
        {/* Professional growth */}
        <div className="flex flex-col items-center gap-16 xl:ml-px xl:flex-row xl:gap-[63px]">
          <div className="flex w-full flex-col gap-10 xl:w-[574px] xl:shrink-0">
            <Heading className="xl:w-[577px]">Your Path to Professional Growth Starts Here!</Heading>
            <p className="max-w-[477px] font-body text-lg leading-[1.6] text-gray-700">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills, gain
              industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>
            <dl className="flex items-end gap-14">
              {growthStats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <dt className="font-heading text-4xl font-medium leading-[44px] tracking-heading text-persian-blue">
                    {s.value}
                  </dt>
                  <dd className="font-body text-lg leading-[1.6] text-gray-700">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Stage w={621} h={552}>
            <div className="absolute left-0 top-0 w-[373px]">
              <CourseCard course={courses[0]} />
            </div>
            <Image
              src="/images/growth-person.png"
              alt="Student following a course"
              width={1444}
              height={1236}
              className="absolute left-[-21px] top-[9px] h-[618px] w-[722px] max-w-none"
            />
            <div className="absolute left-[345px] top-[213px]">
              <ProgressCard labelLeading="leading-6" />
            </div>
            <Image
              src="/images/growth-spring.png"
              alt=""
              width={137}
              height={179}
              className="absolute left-[451px] top-[92px] h-[163px] w-[124px]"
            />
          </Stage>
        </div>

        {/* Create and manage */}
        <div className="flex flex-col-reverse items-center gap-16 xl:ml-px xl:flex-row xl:gap-[79px]">
          <Stage w={541} h={596}>
            <RevenueCard />
            <YearCard />
            <Image
              src="/images/creator.png"
              alt="Course creator with a tablet"
              width={509}
              height={654}
              className="absolute left-[28px] top-0 h-[596px] w-[464px] max-w-none drop-shadow-float"
            />
            <div className="absolute left-[283px] top-[413px]">
              <StudentsCard variant="creator" />
            </div>
          </Stage>

          <div className="flex w-full flex-col gap-10 xl:w-[580px] xl:shrink-0">
            <Heading className="max-w-[391px]">Create &amp; Manage Courses Easily.</Heading>
            <p className="font-body text-lg leading-[1.6] text-gray-700">
              <span className="font-bold text-gray-950">ByteSpace</span> supports individuals or entities
              in the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-end gap-2">
                  <Image src="/images/icon-check.png" alt="" width={72} height={72} className="h-6 w-6" />
                  <span className="font-body text-lg font-medium leading-[1.2] text-gray-950">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge() {
  return (
    <span className="rounded-pill bg-electric-lime-500 px-2 py-0.5 font-body text-[10px] font-medium leading-5 text-gray-950">
      +12$
    </span>
  );
}

function RevenueCard() {
  return (
    <div className="absolute left-0 top-[44px] flex flex-col gap-2 rounded-card bg-persian-blue p-4 text-gray-50">
      <div>
        <p className="font-body text-base font-medium leading-[1.2]">Total Revenue</p>
        <p className="font-body text-[10px] leading-[1.2]">July 1-28</p>
      </div>
      {/* The design's "+12$" badge on this card sits hidden behind the photo. */}
      <p className="w-[200px] font-heading text-2xl font-semibold leading-8 tracking-heading">$120.29</p>
      <div className="relative h-2 w-[200px] rounded-pill bg-white">
        <div className="absolute inset-y-0 left-0 w-[112px] rounded-pill bg-electric-lime" />
      </div>
    </div>
  );
}

function YearCard() {
  return (
    <div className="absolute left-0 top-[194px] flex w-[134px] flex-col items-start gap-2 rounded-card bg-persian-blue p-4 text-gray-50">
      <div>
        <p className="font-body text-base font-medium leading-[1.2]">Year to Date</p>
        <p className="font-body text-[10px] leading-[1.2]">2023</p>
      </div>
      <span className="whitespace-nowrap font-heading text-2xl font-semibold leading-8 tracking-heading">
        $1,200.38
      </span>
      <Badge />
    </div>
  );
}
