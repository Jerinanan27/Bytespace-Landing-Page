import AvatarStack from "./AvatarStack";

// The small stat cards that float over the photos in the hero, the feature
// blocks and the register page.

const faces = [1, 2, 3, 4, 5, 6, 7].map((n) => `/images/avatar-${n}.png`);

export function Star({ className = "", color = "#D4FB20" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
}

export function TagCard() {
  return (
    <div className="rounded-card bg-white p-4 backdrop-blur-[10px]">
      <p className="font-body text-base font-medium leading-[1.2] text-gray-950">UI/UX Design</p>
      <p className="flex items-start gap-2 whitespace-nowrap font-body text-xs leading-[1.6] text-gray-400">
        <span>200 Courses</span>
        <span className="text-[10px] leading-[1.5]">•</span>
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

export function ProgressCard({ labelLeading = "leading-[1.2]" }: { labelLeading?: string }) {
  return (
    <div className="flex w-[232px] flex-col gap-2 rounded-card bg-white p-4 backdrop-blur-[10px]">
      <p className={`font-body text-sm font-medium text-gray-950 ${labelLeading}`}>Learning Progress</p>
      <p className="font-heading text-[48px] font-semibold leading-[1.2] tracking-heading text-gray-950">
        55%
      </p>
      <div className="relative h-2 w-[200px] rounded-pill bg-[#F6F6F6]">
        <div className="absolute inset-y-0 left-0 w-[112px] rounded-pill bg-electric-lime" />
      </div>
    </div>
  );
}

type StudentsVariant = "hero" | "creator" | "register";

export function StudentsCard({ variant = "hero" }: { variant?: StudentsVariant }) {
  const lime = variant === "register";
  return (
    <div
      className={`flex w-[258px] flex-col justify-center gap-2 rounded-card p-4 backdrop-blur-[10px] ${
        lime ? "bg-electric-lime" : "bg-white"
      }`}
    >
      <div>
        <p
          className={`font-body text-base font-medium text-gray-950 ${
            variant === "hero" ? "leading-[1.2]" : "leading-6"
          }`}
        >
          Happy Students
        </p>
        {variant === "hero" ? (
          <p className="flex items-center font-body text-xs leading-[1.6] text-gray-400">
            <span className="text-gray-950">4.5&nbsp;</span>(240)
            <Star className="h-4 w-4" />
          </p>
        ) : (
          <p
            className={`flex items-center font-body text-[10px] leading-[1.5] ${
              lime ? "text-gray-800" : "text-gray-400"
            }`}
          >
            <span className="font-bold text-gray-950">4.5&nbsp;</span>(240)
            <Star className="h-4 w-4" color={lime ? "#003BE2" : "#D4FB20"} />
          </p>
        )}
      </div>
      <AvatarStack
        srcs={faces}
        size={43}
        overlap={16}
        badge="2K+"
        badgeClassName={lime ? "bg-gray-950 text-gray-50" : "bg-electric-lime text-gray-950"}
      />
    </div>
  );
}
