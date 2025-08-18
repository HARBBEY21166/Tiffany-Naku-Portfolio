export type PortfolioPiece = {
  title: string;
  description: string;
  image: string;
  aiHint: string;
  tags: string[];
  category: string;
};

export const portfolioCategories = ["All", "Branding", "Web Design", "UI/UX", "Illustration", "Packaging", "Editorial", "Mobile App", "Characters"];

export const portfolioPieces: PortfolioPiece[] = [
  // Branding
  {
    title: "Vibrant Strokes",
    description: "Bold, energetic branding for a digital art festival.",
    image: "https://placehold.co/600x800.png",
    aiHint: "abstract vibrant",
    tags: ["Branding", "Event"],
    category: "Branding",
  },
  {
    title: "Eco-Friendly",
    description: "Identity for a sustainable products company.",
    image: "https://placehold.co/600x800.png",
    aiHint: "eco friendly",
    tags: ["Branding", "Identity"],
    category: "Branding",
  },
  {
    title: "SoundWave",
    description: "Logo and branding for a music streaming startup.",
    image: "https://placehold.co/600x800.png",
    aiHint: "music logo",
    tags: ["Logo", "Branding"],
    category: "Branding",
  },
  {
    title: "Gourmet Bites",
    description: "Elegant packaging for a luxury chocolate brand.",
    image: "https://placehold.co/600x800.png",
    aiHint: "elegant packaging",
    tags: ["Packaging", "Branding"],
    category: "Packaging",
  },
  // Web Design
  {
    title: "Eco-Wear",
    description: "Minimalist, clean web design for a fashion brand.",
    image: "https://placehold.co/600x800.png",
    aiHint: "fashion minimalist",
    tags: ["Web Design", "E-commerce"],
    category: "Web Design",
  },
  {
    title: "Tech-Forward",
    description: "Corporate website for a software development company.",
    image: "https://placehold.co/600x800.png",
    aiHint: "tech website",
    tags: ["Web Design", "Corporate"],
    category: "Web Design",
  },
  {
    title: "Artisan Cafe",
    description: "Warm and inviting website for a local coffee shop.",
    image: "https://placehold.co/600x800.png",
    aiHint: "cafe website",
    tags: ["Web Design", "Local Business"],
    category: "Web Design",
  },
  {
    title: "LearnLink",
    description: "Intuitive design for an e-learning platform.",
    image: "https://placehold.co/600x800.png",
    aiHint: "elearning platform",
    tags: ["UI/UX", "Education", "Web Design"],
    category: "Web Design",
  },
  // UI/UX
  {
    title: "ConnectSphere",
    description: "Dashboard design for a social media analytics tool.",
    image: "https://placehold.co/600x800.png",
    aiHint: "dashboard analytics",
    tags: ["UI/UX", "Dashboard"],
    category: "UI/UX",
  },
  {
    title: "Future Now",
    description: "Futuristic UI/UX for a smart home application.",
    image: "https://placehold.co/600x800.png",
    aiHint: "futuristic dark",
    tags: ["UI/UX", "Mobile App"],
    category: "Mobile App",
  },
  {
    title: "HealthTrack",
    description: "User-friendly interface for a fitness tracking app.",
    image: "https://placehold.co/600x800.png",
    aiHint: "fitness app",
    tags: ["UI/UX", "Health"],
    category: "Mobile App",
  },
  // Illustration
  {
    title: "Retro Revival",
    description: "Posters inspired by 80s synthwave aesthetics.",
    image: "https://placehold.co/600x800.png",
    aiHint: "retro neon",
    tags: ["Illustration", "Poster Design"],
    category: "Illustration",
  },
  {
    title: "Cosmic Dreams",
    description: "A series of celestial-themed digital illustrations.",
    image: "https://placehold.co/600x800.png",
    aiHint: "space illustration",
    tags: ["Illustration", "Digital Art"],
    category: "Illustration",
  },
  {
    title: "Botanical Wonders",
    description: "Detailed vector illustrations of exotic plants.",
    image: "https://placehold.co/600x800.png",
    aiHint: "plant illustration",
    tags: ["Illustration", "Vector Art"],
    category: "Illustration",
  },
  {
    title: "Character-Verse",
    description: "A collection of unique and expressive characters.",
    image: "https://placehold.co/600x800.png",
    aiHint: "character design",
    tags: ["Illustration", "Characters"],
    category: "Characters",
  },
  {
    title: "Urban Explorer",
    description: "Engaging editorial layout for a travel magazine.",
    image: "https://placehold.co/600x800.png",
    aiHint: "magazine layout",
    tags: ["Editorial", "Print", "Web"],
    category: "Editorial",
  },
];

export const testimonials = [
  {
    quote: "An absolutely stunning transformation of our brand identity. The creativity and attention to detail were second to none. Truly a visionary designer.",
    name: "Alex Johnson",
    company: "CEO, Innovatech",
  },
  {
    quote: "The new website design has received overwhelmingly positive feedback. It's not just beautiful, it's intuitive and user-friendly. Our engagement has skyrocketed.",
    name: "Samantha Lee",
    company: "Marketing Director, Threads & Co.",
  },
  {
    quote: "Working on our app's UI/UX was a seamless experience. The final product is polished, futuristic, and exactly what we dreamed of. Highly recommended!",
    name: "Ben Carter",
    company: "Founder, Quantum Leap",
  },
  {
    quote: "The packaging design elevated our product to a new level of luxury. We've seen a significant increase in sales since the launch.",
    name: "Maria Garcia",
    company: "Owner, Artisan Chocolatiers",
  },
];
