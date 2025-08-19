import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Video } from "lucide-react";

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
                <video
                    src="/images/pricelist.mp4"
                    controls
                    className="transition-transform duration-300 group-hover:scale-105 w-full h-full object-cover"
                    data-ai-hint="pricing video"
                ></video>
            </div>
        </div>
      </div>
    </section>
  );
}
