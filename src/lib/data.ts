export type PortfolioPiece = {
  title: string;
  description: string;
  image: string;
  aiHint: string;
  tags: string[];
};

export const portfolioPieces: PortfolioPiece[] = [
  {
    title: "Vibrant Strokes",
    description: "A bold and energetic branding identity for a digital art festival, focusing on dynamic color palettes and abstract shapes.",
    image: "https://placehold.co/600x800.png",
    aiHint: "abstract vibrant",
    tags: ["Branding", "Event"],
  },
  {
    title: "Eco-Wear",
    description: "Minimalist and clean web design for a sustainable fashion brand, emphasizing natural textures and earthy tones.",
    image: "https://placehold.co/600x800.png",
    aiHint: "fashion minimalist",
    tags: ["Web Design", "E-commerce"],
  },
  {
    title: "Future Now",
    description: "Futuristic UI/UX concept for a smart home application, featuring holographic elements and a dark, moody interface.",
    image: "https://placehold.co/600x800.png",
    aiHint: "futuristic dark",
    tags: ["UI/UX", "Mobile App"],
  },
  {
    title: "Gourmet Bites",
    description: "Elegant packaging design for a luxury chocolate brand, using gold foil and intricate patterns to convey sophistication.",
    image: "https://placehold.co/600x800.png",
    aiHint: "elegant packaging",
    tags: ["Packaging", "Branding"],
  },
  {
    title: "Retro Revival",
    description: "A series of posters inspired by 80s synthwave aesthetics, with neon grids and chrome typography.",
    image: "https://placehold.co/600x800.png",
    aiHint: "retro neon",
    tags: ["Illustration", "Poster Design"],
  },
  {
    title: "Urban Explorer",
    description: "A modern and engaging editorial layout for a travel magazine, focusing on powerful photography and clean typography.",
    image: "https://placehold.co/600x800.png",
    aiHint: "magazine layout",
    tags: ["Editorial", "Print"],
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
