import Image from "next/image";
import { PlayCircle } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Service Packages</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Watch our short video to understand the value we can bring to your project.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-secondary rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
                 <Image
                    src="https://placehold.co/1280x720.png"
                    alt="Video placeholder"
                    fill
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="pricing video"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <PlayCircle className="w-20 h-20 text-white/80 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110 animate-pulse" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
