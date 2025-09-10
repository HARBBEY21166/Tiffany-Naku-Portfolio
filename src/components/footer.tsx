import { Dribbble, Paintbrush, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Tiffany Naku. All rights reserved.
        </p>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="capitalize hover:bg-[#c61affe6] hover:text-white" asChild>
            <a href="https://www.linkedin.com/in/tiffany-naku-591027242?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="Email">
              <Linkedin className="h-5 w-5 icon-bounce" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="capitalize hover:bg-[#c61affe6] hover:text-white" asChild>
            <a href="mailto:tiffanynaku@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5 icon-bounce" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="capitalize hover:bg-[#c61affe6] hover:text-white" asChild>
            <a href="https://www.behance.net/tiffanynaku" aria-label="Behance">
              <Paintbrush className="h-5 w-5 icon-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
