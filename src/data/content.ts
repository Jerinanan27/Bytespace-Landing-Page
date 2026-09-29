// Static content for the ByteSpace landing page, kept apart from the markup
// so copy and data can be edited in one place.

export type Course = {
  id: number;
  title: string;
  author: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  learners: string;
  price: string;
  rating: string;
  image: string;
};

export type Category = { label: string; icon: string };

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

// Partner logos under the hero, with their exported widths.
export const partners = [
  { src: "/images/partner-1.png", width: 167 },
  { src: "/images/partner-2.png", width: 168 },
  { src: "/images/partner-3.png", width: 170 },
  { src: "/images/partner-4.png", width: 170 },
  { src: "/images/partner-5.png", width: 169 },
];

// Filter pills above the course grid, in the three rows the design uses.
export const categoryTabRows = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const categories: Category[] = [
  { label: "Design", icon: "/images/cat-design.png" },
  { label: "Development", icon: "/images/cat-development.png" },
  { label: "IT & Software", icon: "/images/cat-it.png" },
  { label: "Business", icon: "/images/cat-business.png" },
  { label: "Marketing", icon: "/images/cat-marketing.png" },
  { label: "Photography", icon: "/images/cat-photography.png" },
];

const courseDefaults = {
  author: "purepearl studio",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  level: "Beginner",
  learners: "26+",
  price: "$25",
  rating: "4.5",
};

export const courses: Course[] = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "the Power of Big Data",
  "Balancing Productivity and Self-Care",
  "Mastering Money Management",
  "From Idea to Startup Success",
].map((title, i) => ({
  id: i + 1,
  title,
  ...courseDefaults,
  image: `/images/course-${i + 1}.jpg`,
}));

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    avatar: "/images/testi-1.png",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    avatar: "/images/testi-2.png",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    avatar: "/images/testi-3.png",
  },
];

// Footer link columns. Column headings exist in the design but are hidden.
export const footerColumns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

/* Decorative 3D shapes: [x, y, width, height] in the 1440px design frame. */
export type Ornament = { src: string; box: [number, number, number, number] };

export const heroOrnaments: Ornament[] = [
  { src: "/images/hero-lime-spring.png", box: [0, 285, 195, 268.5] },
  { src: "/images/hero-white-spring-sm.png", box: [215.5, 505, 115, 123] },
  { src: "/images/hero-white-ring.png", box: [67.5, 741.5, 238, 218] },
  { src: "/images/hero-white-cone.png", box: [1131, 485.5, 125, 139] },
  { src: "/images/hero-white-spring.png", box: [1196.5, 710.5, 190, 249.5] },
  { src: "/images/hero-lime-cone.png", box: [1276, 255.5, 164, 300] },
];

export const ctaOrnaments: Ornament[] = [
  { src: "/images/cta-lime-spring.png", box: [0, 0, 164.5, 170.5] },
  { src: "/images/cta-white-spring-sm.png", box: [210.5, 34, 116, 122] },
  { src: "/images/cta-white-cone.png", box: [0, 242, 115.5, 152.5] },
  { src: "/images/cta-lime-ring.png", box: [69, 358, 238.5, 130] },
  { src: "/images/cta-lime-cone.png", box: [1105, 20, 125, 140.5] },
  { src: "/images/cta-white-cylinder.png", box: [1271, 40.5, 169, 300] },
  { src: "/images/cta-lime-spring-br.png", box: [1179.5, 327, 192, 161] },
];
