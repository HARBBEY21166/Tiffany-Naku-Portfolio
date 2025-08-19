import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A little bit about my journey into the world of design.
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0">
                    <Image
                        src="/images/tiffany-naku.jpg"
                        alt="Portrait of the designer"
                        width={600}
                        height={700}
                        className="object-cover w-full h-full"
                        data-ai-hint="designer portrait"
                    />
                </CardContent>
            </Card>
          </div>
          <div className="md:col-span-3 space-y-8 font-body text-lg text-muted-foreground">
            <p>
            I’m a multidisciplinary Graphic Designer based in Johannesburg (North),
Gauteng. I’m proficient in various sectors of Graphic Design namely, digital
illustration, 3D modeling and animation,branding, motion graphics, UI design as well as Copywriting.
            </p>
            <p>
            I’m a perfectionist, by nature, with a very
strong work ethic who doesn’t shy away
from learning new skills. I’m an individual who’s able to adapt to any work
environment, given the chance.
            </p>
            <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className="p-3 rounded-full bg-primary/10 text-primary"><GraduationCap className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-headline text-xl text-foreground font-semibold">Education</h3>
                        <p className="mt-1">Bachelor of Arts, Graphic Design - EDUVOS University</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className="p-3 rounded-full bg-primary/10 text-primary"><Briefcase className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-headline text-xl text-foreground font-semibold">Experience</h3>
                        <p className="mt-1">5+ years working with startups and established brands on a wide range of projects, from brand identity to digital products.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className="p-3 rounded-full bg-primary/10 text-primary"><Award className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-headline text-xl text-foreground font-semibold">Awards</h3>
                        <p className="mt-1">Loeries Woolworths Student Portfolio Bootcamp (Top 75 in Africa)</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
