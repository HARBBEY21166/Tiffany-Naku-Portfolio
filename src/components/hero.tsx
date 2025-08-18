import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="py-24 sm:py-32 md:py-40">
      <div className="container max-w-7xl text-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight md:leading-snug">
          Where Creativity <span className="text-primary">Meets</span> Design
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-body">
          Crafting unique visual identities and compelling digital experiences that resonate with your audience and elevate your brand.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#work">Explore My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
