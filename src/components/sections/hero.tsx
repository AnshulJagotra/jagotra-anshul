import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[200%_auto] animate-gradient">
                        Anshul Jagotra
                    </span>
                </h1>
                <p className="mt-4 text-xl sm:text-2xl font-medium text-primary tracking-wide">
                Software Engineer &amp; AI/ML Enthusiast
                </p>
                <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
                Building scalable web apps, machine-learning solutions, and blockchain prototypes. Ready to join your team or consult on product engineering.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#projects">See Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                    <Link href="#contact">Contact Me</Link>
                </Button>
                </div>
            </div>
            <div className="hidden md:flex justify-center items-center h-full relative">
                <div className="relative w-96 h-96 lg:w-[26rem] lg:h-[26rem]">
                    <figure className="relative w-full h-full rounded-full overflow-hidden shadow-2xl shadow-primary/20 z-10">
                        <Image
                            src="/anshul.png"
                            alt="Anshul Jagotra"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center 15%"
                        />
                    </figure>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
