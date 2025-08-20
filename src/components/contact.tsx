"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { useToast } from "@/hooks/use-toast"
import { Label } from "./ui/label"
import { Mail, Linkedin, Paintbrush } from "lucide-react"

const ContactInfoItem = ({ icon: Icon, title, value, href }: { icon: React.ElementType, title: string, value: string, href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group p-4 rounded-lg transition-colors hover:bg-secondary/50">
        <div className="p-3 rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
        </div>
        <div>
            <h3 className="font-headline text-xl text-foreground font-semibold">{title}</h3>
            <p className="mt-1 text-muted-foreground group-hover:text-primary transition-colors">{value}</p>
        </div>
    </a>
);

export default function Contact() {
  const { toast } = useToast();
  const [result, setResult] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "7bff244b-11e9-43da-814c-af569e6f1ea8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you shortly.",
        });
        (event.target as HTMLFormElement).reset();
        setResult(null);
      } else {
        console.error("Error submitting form:", data);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: data.message || "There was a problem sending your message. Please try again.",
        });
        setResult(data.message);
      }
    } catch (error) {
        console.error("Error submitting form:", error);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again.",
        });
        setResult("An error occurred.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Let's Create Together</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="font-headline text-3xl font-bold">Contact Details</h3>
                <div className="space-y-6">
                    <ContactInfoItem icon={Mail} title="Email" value="tiffanynaku@gmail.com" href="mailto:tiffanynaku@gmail.com" />
                    <ContactInfoItem icon={Linkedin} title="LinkedIn" value="tiffany-naku" href="#" />
                    <ContactInfoItem icon={Paintbrush} title="Behance" value="tiffanynaku" href="#" />
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={onSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" name="name" placeholder="Your Name" required/>
                            </div>
                            <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" name="email" placeholder="your.email@example.com" required/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Tell me about your project..."
                                className="resize-none"
                                rows={6}
                                required
                            />
                        </div>
                        <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                    {result && <p className="mt-4 text-sm text-muted-foreground">{result}</p>}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  )
}
