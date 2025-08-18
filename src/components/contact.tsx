"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not be longer than 500 characters."
  }),
})

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`New message from ${values.name} on VisioFolio`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name}\nEmail: ${values.email}`);
    window.location.href = `mailto:olamilekansunday445@gmail.com?subject=${subject}&body=${body}`;
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Let's Create Together</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                <Input placeholder="Your Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Tell me about your project..."
                            className="resize-none"
                            rows={6}
                            {...field}
                            />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit">
                      Send Message
                    </Button>
                </form>
                </Form>
            </CardContent>
        </Card>
      </div>
    </section>
  )
}
