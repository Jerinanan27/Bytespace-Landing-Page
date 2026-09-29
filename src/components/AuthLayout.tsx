import Image from "next/image";
import Link from "next/link";
import { courses } from "@/data/content";
import CourseCard from "./CourseCard";
import { StudentsCard } from "./FloatingCards";
import Logo from "./Logo";

// Shared shell for Login and Register, laid out from the 1440 x 1024 register
// frame: intro text and a stack of decorative cards on the left, the form card
// on the right.
export default function AuthLayout({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-persian-blue">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-16 lg:h-[1024px] lg:px-0 lg:pb-0">
        <Link href="/" className="inline-block pt-[35px] lg:absolute lg:left-[122px] lg:top-[35px] lg:pt-0">
          <Logo markOnly />
        </Link>

        <div className="mt-10 max-w-[475px] text-gray-50 lg:absolute lg:left-[122px] lg:top-[120px] lg:mt-0">
          <p className="font-heading text-xl font-semibold leading-[1.2] tracking-heading">{title}</p>
          <p className="mt-4 font-body text-lg leading-[1.6]">{text}</p>
        </div>

        {/* Decorative cards and shapes (desktop) */}
        <div className="hidden lg:block" aria-hidden="true">
          <div className="absolute left-[122px] top-[394px] w-[373px]">
            <CourseCard course={courses[1]} dark />
          </div>
          <div className="absolute left-[233px] top-[305px] w-[373px]">
            <CourseCard course={courses[2]} dark />
          </div>
          <Image src="/images/lime-ring.png" alt="" width={476} height={436} className="absolute left-[172px] top-[345px] h-[93px] w-[102px]" />
          <div className="absolute left-[348px] top-[740px]">
            <StudentsCard variant="register" />
          </div>
          <Image src="/images/hero-white-spring-sm.png" alt="" width={230} height={246} className="absolute left-[502px] top-[654px] h-[123px] w-[115px]" />
          <Image src="/images/cta-lime-cone.png" alt="" width={250} height={281} className="absolute left-[122px] top-[723px] h-[140px] w-[125px]" />
        </div>

        <div className="mx-auto mt-10 w-full max-w-[579px] rounded-[24px] bg-white px-6 py-10 sm:px-[63px] sm:pb-10 sm:pt-[61px] lg:absolute lg:left-[calc(50%+21px)] lg:top-[120px] lg:mt-0 lg:h-[784px]">
          {children}
        </div>
      </div>
    </main>
  );
}
