'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { personalInfo } from '@/lib/data';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Message from ${name} via Portfolio`)}&body=${encodeURIComponent(message + `\n\nFrom: ${name}\nEmail: ${email}`)}`;

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card/50 p-8 rounded-lg border">
            <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <Input id="name" name="name" type="text" required placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <Input id="email" name="email" type="email" required placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <Textarea id="message" name="message" required placeholder="Your message..." rows={5} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <Button asChild size="lg" className="w-full">
                <Link href={mailtoHref}>Send Message</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">Direct Contact</h3>
            <div className="space-y-4">
                <Link href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{personalInfo.email}</span>
                </Link>
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">LinkedIn</span>
                </Link>
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <Github className="h-6 w-6 text-primary" />
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
