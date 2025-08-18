"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, WandSparkles } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <WandSparkles className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold">VisioFolio</span>
        </a>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
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
                    <span className="font-headline text-2xl font-bold">VisioFolio</span>
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-2xl font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
