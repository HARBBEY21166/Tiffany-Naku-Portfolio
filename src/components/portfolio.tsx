
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
import { portfolioPieces, portfolioCategories } from '@/lib/data';

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
              className="capitalize"
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
                        fill
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
