import Image from "next/image";

// A row of overlapping round avatars ending in a count badge.
export default function AvatarStack({
  srcs,
  size,
  overlap,
  badge,
  badgeClassName = "bg-electric-lime text-gray-950",
  badgeTextClassName = "text-xs font-bold",
}: {
  srcs: string[];
  size: number;
  overlap: number;
  badge: string;
  badgeClassName?: string;
  badgeTextClassName?: string;
}) {
  return (
    <div className="flex items-start">
      {srcs.map((src, i) => (
        <Image
          key={src + i}
          src={src}
          alt=""
          width={size * 3}
          height={size * 3}
          className="relative shrink-0 rounded-full"
          style={{ width: size, height: size, marginRight: -overlap }}
        />
      ))}
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-full font-body ${badgeClassName} ${badgeTextClassName}`}
        style={{ width: size, height: size }}
      >
        {badge}
      </span>
    </div>
  );
}
