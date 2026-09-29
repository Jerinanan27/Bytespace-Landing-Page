import Image from "next/image";
import { testimonials } from "@/data/content";

// Community testimonials: heading and intro side by side, then three quote cards.
export default function Testimonials() {
  return (
    <section
      className="bg-[#FAFAFA] bg-cover bg-center py-20 lg:h-[784px] lg:pb-0 lg:pt-[74px]"
      style={{ backgroundImage: "url(/images/bg-testimonials.png)" }}
    >
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:-ml-0.5 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-heading text-black lg:w-[577px] lg:shrink-0 lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="font-body text-lg leading-[1.6] text-black-700 lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do.
            Hear directly from those who have experienced the transformative journey of learning and
            creating on our platform. Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:-ml-0.5 lg:mt-[72px] lg:flex lg:items-start lg:gap-[41px]">
          {testimonials.map((t) => (
            <article key={t.name} className="flex flex-col gap-6 rounded-[24px] bg-white p-6 lg:w-[374px]">
              <Image src={t.avatar} alt={t.name} width={240} height={240} className="h-20 w-20 rounded-full" />
              <div>
                <p className="font-heading text-xl font-semibold leading-7 tracking-heading text-black">
                  {t.name}
                </p>
                <p className="font-body text-lg leading-[1.6] text-persian-blue">{t.role}</p>
              </div>
              <p className="font-body text-lg leading-[1.6] text-black-700">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
