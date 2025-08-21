
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const portfolioCategories = ["All", "Poster", "Brochure", "3D character", "Social Post", "Logos", "Illustration", "Branding"];

const portfolioPieces = [
  // Poster
  {
    title: "3D Character design",
    description: "A few renders showcasing my character creation skills.",
    image: "/images/3Dcharacter2.jpg",
    aiHint: "abstract vibrant",
    tags: ["3D character", "Event"],
    category: "3D character",
  },
  {
    title: "Wedding Invitation",
    description: "This design showcases my poster design skills as well as my motion graphics skills.",
    image: "/images/poster1.png",
    aiHint: "abstract vibrant",
    tags: ["Poster", "Event"],
    category: "Poster",
  },
  {
    title: "ART",
    description: "Some digital illustrations.",
    image: "/images/illustration2.jpg",
    aiHint: "eco friendly",
    tags: ["Illustration", "Identity"],
    category: "Illustration",
  },
  {
    title: "Just Dance",
    description: "Just Dance 3d character",
    image: "/images/3Dcharacter1.jpg",
    aiHint: "music logo",
    tags: ["Logo", "3D character"],
    category: "3D character",
  },
  {
    title: "The Shed",
    description: "The Shed Factor poster",
    image: "/images/poster2.jpg",
    aiHint: "elegant packaging",
    tags: ["Poster", "Branding"],
    category: "Poster",
  },
  // Web Design
  {
    title: "Solar Initiative",
    description: "New Solar Initiative poster design",
    image: "/images/poster3.jpg",
    aiHint: "fashion minimalist",
    tags: ["Poster", "E-commerce"],
    category: "Poster",
  },
  {
    title: "Logos",
    description: "This is a logo was done for a client’s hookah business titled ‘Hubbly Haven’.",
    image: "/images/logo1.jpg",
    aiHint: "tech website",
    tags: ["Logos", "Corporate"],
    category: "Logos",
  },
  {
    title: "EVOLV3",
    description: "These posters were commissioned by Burst Digital",
    image: "/images/poster7.jpg",
    aiHint: "cafe website",
    tags: ["Poster", "Local Business"],
    category: "Poster",
  },
  {
    title: "AllStar",
    description: "Digital Illustration.",
    image: "/images/illustration1.jpg",
    aiHint: "elearning platform",
    tags: ["Illustration", "Education", "Web Design"],
    category: "Illustration",
  },
  // UI/UX
  {
    title: "Back",
    description: "Some basic t-shirt designs I created for Anglican Church",
    image: "/images/branding1.jpg",
    aiHint: "dashboard analytics",
    tags: ["Branding", "Dashboard"],
    category: "Branding",
  },
  {
    title: "Front",
    description: "Basic t-shirt designs I created for Anglican Church",
    image: "/images/branding2.jpg",
    aiHint: "futuristic dark",
    tags: ["Branding", "Mobile App"],
    category: "Branding",
  },
  {
    title: "Back",
    description: "Basic t-shirt designs I created for ACTIONSA",
    image: "/images/branding3.jpg",
    aiHint: "fitness app",
    tags: ["Branding", "Health"],
    category: "Branding",
  },
  // Illustration
  {
    title: "Ice Cream",
    description: "These posters were done for a client’s ice cream business.",
    image: "/images/poster6.jpg",
    aiHint: "retro neon",
    tags: ["Poster", "Poster Design"],
    category: "Poster",
  },
  {
    title: "PBX",
    description: "This was a brochure that I created for Innovo Networks",
    image: "/images/poster5.jpg",
    aiHint: "space illustration",
    tags: ["Brochure", "Digital Art"],
    category: "Brochure",
  },
  {
    title: "THINK.CONECT.",
    description: "Some social media post designs that I created for Innovo Networks.",
    image: "/images/social1.jpg",
    aiHint: "plant illustration",
    tags: ["Illustration", "Vector Art"],
    category: "Social Post",
  },
  {
    title: "Diva Wena",
    description: "A collection of unique and expressive characters.",
    image: "/images/diva3d.jpg",
    aiHint: "character design",
    tags: ["Illustration", "Characters"],
    category: "3D character",
  },
  {
    title: "Pool Side",
    description: "Pool Side Poetry design.",
    image: "/images/poster4.jpg",
    aiHint: "magazine layout",
    tags: ["Poster", "Print"],
    category: "Poster",
  },
];


const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleItems, setVisibleItems] = useState(8);

  const filteredProjects = activeCategory === 'All'
    ? portfolioPieces
    : portfolioPieces.filter(p => p.category === activeCategory);

  const projectsToShow = filteredProjects.slice(0, visibleItems);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleItems(8); 
  };

  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">My Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of my projects.
          </p>
        </div>

        {/* Mobile Dropdown */}
        <div className="md:hidden mb-8">
          <Select onValueChange={handleCategoryChange} defaultValue={activeCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {portfolioCategories.map(category => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex justify-center flex-wrap gap-2 mb-12">
          {portfolioCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'ghost'}
              onClick={() => handleCategoryChange(category)}
              className="capitalize hover:bg-[#c61affe6] hover:text-white"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {projectsToShow.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden h-full group shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={800}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={project.aiHint}
                      />
                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold text-lg border-2 border-white rounded-full px-4 py-2">View Project</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-headline text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground mt-1">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleItems < filteredProjects.length && (
          <div className="text-center mt-12">
            <Button onClick={loadMore} size="lg">
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
