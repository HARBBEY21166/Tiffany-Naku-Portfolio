import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

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
            <Card className="overflow-hidden">
                <CardContent className="p-0">
                    <Image
                        src="https://placehold.co/600x700.png"
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
              Hello! I'm a passionate and detail-oriented graphic designer with a love for creating beautiful, functional, and user-centered designs. My journey began with a simple curiosity for how visuals can tell a story, which blossomed into a full-fledged career dedicated to branding, digital illustration, and UI/UX design.
            </p>
            <p>
              I believe that great design is not just about aesthetics, but about solving problems and communicating ideas effectively. I thrive on collaborating with clients to bring their visions to life and create memorable experiences.
            </p>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary"><GraduationCap className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-headline text-xl text-foreground font-semibold">Education</h3>
                        <p className="mt-1">B.F.A in Graphic Design, University of Creative Arts</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary"><Briefcase className="h-6 w-6" /></div>
                    <div>
                        <h3 className="font-headline text-xl text-foreground font-semibold">Experience</h3>
                        <p className="mt-1">5+ years of experience working with startups and established brands on a wide range of projects, from brand identity to digital products.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
