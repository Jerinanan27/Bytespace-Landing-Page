import Image from "next/image";
import type { Ornament } from "@/data/content";

// Decorative 3D shapes placed at their exact positions from the 1440px design.
// Shapes on the left half are anchored to the left edge and shapes on the right
// half to the right edge, so on wider screens they keep hugging the sides like
// they do in the design. Hidden below `lg`, where they would crowd the content.
export default function Ornaments({ items }: { items: Ornament[] }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden select-none lg:block" aria-hidden="true">
      {items.map(({ src, box: [x, y, w, h] }) => {
        const fromLeft = x + w / 2 < 720;
        return (
          <Image
            key={src}
            src={src}
            alt=""
            width={Math.round(w * 2)}
            height={Math.round(h * 2)}
            className="absolute max-w-none"
            style={{
              top: y,
              width: w,
              height: h,
              ...(fromLeft ? { left: x } : { right: 1440 - x - w }),
            }}
          />
        );
      })}
    </div>
  );
}
