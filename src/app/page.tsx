"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills';
import Portfolio from '@/components/portfolio';
import About from '@/components/about';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { motion, AnimatePresence } from 'framer-motion';
import Pricing from '@/components/pricing';
import Preloader from '@/components/preloader';

const MotionSection = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen"
        >
          <Header />
          <main className="flex-grow">
            <MotionSection><Hero /></MotionSection>
            <MotionSection><Skills /></MotionSection>
            <MotionSection><Portfolio /></MotionSection>
            <MotionSection><About /></MotionSection>
            <MotionSection><Testimonials /></MotionSection>
            <MotionSection><Pricing /></MotionSection>
            <MotionSection><Contact /></MotionSection>
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
