
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, WandSparkles, Moon, Sun } from "lucide-react";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <WandSparkles className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-headline text-3xl font-bold">Tiffany Naku</span>
        </a>

        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-primary group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </a>
          ))}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-4">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <nav className="flex flex-col gap-6 pt-12">
                        <a href="#" className="flex items-center gap-2 mb-4">
                            <WandSparkles className="h-6 w-6 text-primary" />
                            <span className="font-headline text-2xl font-bold">Tiffany Naku</span>
                        </a>
                        {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-3xl font-medium text-muted-foreground transition-colors hover:text-primary"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                        >
                            {link.name}
                        </motion.a>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
