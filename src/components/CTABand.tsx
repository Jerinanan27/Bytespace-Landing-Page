import { ctaOrnaments } from "@/data/content";
import Ornaments from "./Ornaments";

// Blue call-to-action band inviting people to join as creators.
export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-persian-blue lg:h-[488px]">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <Ornaments items={ctaOrnaments} />

      <div className="container-x relative flex flex-col items-center py-20 text-center lg:pb-0 lg:pt-[85px]">
        <h2 className="max-w-[710px] font-heading text-[32px] font-semibold leading-[1.2] tracking-heading text-white lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-10 max-w-[964px] font-body text-lg leading-[1.6] text-gray-50">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course
          on the ByteSpace Course Library.
        </p>
        <a
          href="/register"
          className="mt-10 rounded-pill bg-electric-lime px-6 py-3 font-body text-lg font-medium leading-[1.2] text-gray-950 transition-transform hover:scale-[1.03]"
        >
          Join as Creator
        </a>
      </div>
    </section>
  );
}
