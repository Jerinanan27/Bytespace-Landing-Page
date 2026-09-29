import Image from "next/image";
import { categories } from "@/data/content";

// "Explore Diverse Learning Paths" with the six category tiles.
export default function CategoriesSection() {
  return (
    <section className="bg-white pb-[120px] pt-[72px]">
      <div className="container-x">
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-[28px] font-semibold leading-[1.2] tracking-heading text-ink lg:text-[36px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-body text-lg leading-[1.6] text-gray-400">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
            courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
            potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="mx-auto mt-[68px] grid max-w-[1202px] grid-cols-2 justify-items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.label}
              href="#courses"
              className="flex h-[167px] w-full max-w-[167px] flex-col items-center justify-center gap-3 rounded-[24px] border border-gray-200 transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-electric-lime">
                <Image src={cat.icon} alt="" width={108} height={108} className="h-9 w-9" />
              </span>
              <span className="font-body text-xl font-medium leading-6 text-gray-950">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
