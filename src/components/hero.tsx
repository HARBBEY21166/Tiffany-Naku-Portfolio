"use client"

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const FloatingShape = ({
  className,
  initial,
  animate,
  transition,
}: {
  className: string;
  initial: any;
  animate: any;
  transition: any;
}) => (
  <motion.div
    className={`absolute -z-10 rounded-full bg-primary/20 blur-3xl ${className}`}
    initial={initial}
    animate={animate}
    transition={transition}
  />
);

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div className="absolute inset-0 -z-20">
        <FloatingShape
          className="h-64 w-64 top-10 left-10"
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <FloatingShape
          className="h-72 w-72 bottom-0 right-0"
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
        />
         <FloatingShape
          className="h-48 w-48 bottom-24 left-1/3"
          initial={{ opacity: 0, scale: 0.5, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.6, ease: 'easeInOut' }}
        />
      </div>

      <div className="container max-w-7xl text-center relative z-10">
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight md:leading-snug"
        >
          Where Creativity <span className="text-primary">Meets</span> Design
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-body"
        >
          Crafting unique visual identities and compelling digital experiences that resonate with your audience and elevate your brand.
        </motion.p>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex justify-center gap-4"
        >
          <Button asChild size="lg">
            <a href="#work">Explore My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
