
"use client";

import Image from "next/image";
import { useState } from "react";
import { portfolioPieces, portfolioCategories } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Portfolio() {
  const allPieces = portfolioPieces;
  const categories = portfolioCategories;
  const [visibleItems, setVisibleItems] = useState(8);

  const showMoreItems = () => {
    setVisibleItems(allPieces.length);
  };

  const cardVariants = {
    rest: {
      scale: 1,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-secondary" style={{ perspective: '1000px' }}>
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">My Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of projects that showcase my passion for creative design.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 mx-auto max-w-4xl mb-12">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="All">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {allPieces.slice(0, visibleItems).map((piece, index) => (
                    <motion.div key={index} initial="rest" whileHover="hover" animate="rest" variants={cardVariants}>
                      <Card className="overflow-hidden group transition-all duration-300 flex flex-col h-full shadow-md hover:shadow-xl">
                        <CardContent className="p-0 flex-grow">
                          <div className="relative h-96">
                            <Image
                              src={piece.image}
                              alt={piece.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={piece.aiHint}
                            />
                          </div>
                        </CardContent>
                        <div className="p-6">
                          <h3 className="font-headline text-2xl font-semibold">{piece.title}</h3>
                          <p className="text-muted-foreground mt-2 font-body flex-grow">{piece.description}</p>
                        </div>
                         <CardFooter>
                            {piece.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="mr-2">{tag}</Badge>
                            ))}
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
              </div>
              {visibleItems < allPieces.length && (
                <div className="text-center mt-12">
                  <Button onClick={showMoreItems} size="lg">View More</Button>
                </div>
              )}
            </TabsContent>

          {categories.filter(c => c !== 'All').map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {portfolioPieces
                  .filter((piece) => piece.category === category)
                  .map((piece, index) => (
                     <motion.div key={index} initial="rest" whileHover="hover" animate="rest" variants={cardVariants}>
                        <Card className="overflow-hidden group transition-all duration-300 flex flex-col h-full shadow-md hover:shadow-xl">
                          <CardContent className="p-0 flex-grow">
                            <div className="relative h-96">
                              <Image
                                src={piece.image}
                                alt={piece.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={piece.aiHint}
                              />
                            </div>
                          </CardContent>
                          <div className="p-6">
                            <h3 className="font-headline text-2xl font-semibold">{piece.title}</h3>
                            <p className="text-muted-foreground mt-2 font-body flex-grow">{piece.description}</p>
                          </div>
                           <CardFooter>
                              {piece.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="mr-2">{tag}</Badge>
                              ))}
                          </CardFooter>
                        </Card>
                      </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
