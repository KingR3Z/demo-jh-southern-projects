export const client = {
  // Business Details
  name: "JH Southern Projects",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Winchester.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07465 978255",
  email: "",
  website: "",

  // Location
  address: "Winchester",
  city: "Winchester",
  county: "",
  postcode: "",
  basedIn: "Winchester",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "7",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Kai Mears", rating: 5, text: "Great experience from start to finish. Responding to my initial enquiry very promptly. Arranged a time for Josh to visit to quote for the work in my garden and he provided some great ideas. Lovely level finish to the patio area and good quality finis", date: "2 months ago" },
    { name: "joe moody", rating: 5, text: "Highly recommended, professional service with brilliant communication throughout. Made a change for someone to show passion in what they do, with a fantastic attention to detail. ", date: "2 months ago" },
    { name: "stuart seymour", rating: 5, text: "Great company, very good at what they do. Really happy with the work they have carried out in our garden. Would definitely recommend. Great price too. ", date: "2 months ago" },
    { name: "Megan", rating: 5, text: "Fantastic team. Friendly and we felt very comfortable. So pleased with my garden. Highly recommend. ", date: "2 months ago" },
    { name: "Jamie Hunt", rating: 5, text: "Josh and Jamie did a great job installing an office room from start to finish - from laying the concrete base, to constructing , including sorting electrics and digging a channel for cabling (navigating some tricky block paving). Their …  ", date: "2 months ago" },
    { name: "james mcguire", rating: 5, text: "New garden room and patio installed. Fantastic from start to finish highly recommend! ", date: "2 months ago" },
    { name: "Kieran Kent", rating: 5, text: "Great bunch went above and beyond to get the job done in time for when I asked would totally recommend ! ", date: "2 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "JH Southern Projects | Landscaper in Winchester",
    description: "Professional landscaper in Winchester. 5.0-star rated on Google. Call for a free quote.",
  },
};
