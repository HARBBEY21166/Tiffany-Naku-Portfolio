import Image from "next/image";
import { portfolioPieces } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  return (
    <section id="work" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">My Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of projects that showcase my passion for creative design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioPieces.map((piece, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
              <CardContent className="p-0 flex-grow">
                <div className="relative h-96">
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={piece.aiHint}
                  />
                </div>
              </CardContent>
              <div className="p-6">
                <h3 className="font-headline text-2xl font-semibold">{piece.title}</h3>
                <p className="text-muted-foreground mt-2 font-body flex-grow">{piece.description}</p>
              </div>
              <CardFooter>
                  {piece.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="mr-2">{tag}</Badge>
                  ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
