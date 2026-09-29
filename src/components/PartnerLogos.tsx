import Image from "next/image";
import { partners } from "@/data/content";

// Partner logos on the light band under the hero.
export default function PartnerLogos() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-x-[72px] gap-y-8 px-6 py-16 lg:h-[202px] lg:flex-nowrap lg:justify-between lg:py-0">
        {partners.map((p, i) => (
          <Image
            key={p.src}
            src={p.src}
            alt={`Partner ${i + 1}`}
            width={p.width * 3}
            height={123}
            className="h-[41px] w-auto"
          />
        ))}
      </div>
    </section>
  );
}
