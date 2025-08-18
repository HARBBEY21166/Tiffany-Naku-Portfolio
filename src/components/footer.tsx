import { Instagram, Dribbble, Paintbrush } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} VisioFolio. All rights reserved.
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5 icon-bounce" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Dribbble">
              <Dribbble className="h-5 w-5 icon-bounce" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Behance">
              <Paintbrush className="h-5 w-5 icon-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
