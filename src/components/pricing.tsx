import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, ArrowRight } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Service Packages</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Every project is unique. Let's discuss yours.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-10 text-center">
                    <h3 className="font-headline text-3xl font-bold text-primary mb-4">
                        Ready to Start a Project?
                    </h3>
                    <p className="text-2xl font-semibold text-foreground mb-6">
                        Call or Email for a Quote
                    </p>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        I provide custom quotes based on your specific needs and project scope. Get in touch to discuss your ideas and get a personalized estimate.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button asChild size="lg">
                            <a href="mailto:tiffanynaku@gmail.com">
                                <Mail className="mr-2 h-5 w-5" />
                                Email Me
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                           <a href="#work">
                                View My Work
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
