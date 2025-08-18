"use client";

import React, { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { suggestPortfolioPieces } from "@/ai/flows/style-advisor";
import { portfolioPieces } from "@/lib/data";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AiAdvisor() {
  const [styleDescription, setStyleDescription] = useState("");
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();

  const portfolioDescriptions = portfolioPieces.map(p => `${p.title}: ${p.description}`);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!styleDescription) return;

    startTransition(async () => {
      const result = await suggestPortfolioPieces({
        styleDescription,
        portfolioPieces: portfolioDescriptions,
      });
      setRecommendations(result.recommendations);
    });
  };

  return (
    <section id="ai-advisor" className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-8 w-8" />
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">AI Style Advisor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Describe a design style you're looking for, and my AI assistant will suggest relevant projects from my portfolio.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Get Recommendations</CardTitle>
            <CardDescription>
              For example, try "minimalist and clean with earthy tones" or "bold, vibrant, and futuristic".
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="Describe a design style..."
                value={styleDescription}
                onChange={(e) => setStyleDescription(e.target.value)}
                rows={4}
              />
              <Button type="submit" disabled={isPending || !styleDescription}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Suggest Projects"
                )}
              </Button>
            </form>

            {recommendations.length > 0 && (
              <div className="mt-8">
                <Alert>
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle className="font-headline">Here are my suggestions!</AlertTitle>
                  <AlertDescription>
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      {recommendations.map((rec, index) => (
                        <li key={index}>{rec.split(':')[0]}</li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
