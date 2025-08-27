import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileCode, Bot, DatabaseZap } from 'lucide-react';

const TechIcon = ({ icon, className }: { icon: React.ElementType, className?: string }) => {
    const Icon = icon;
    return (
        <div className={`absolute rounded-full bg-primary/10 p-3 text-primary animate-pulse ${className}`}>
            <Icon className="h-6 w-6" />
        </div>
    )
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background -z-10">
         <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-background via-primary/5 to-background"></div>
         <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50 dark:opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight whitespace-nowrap">
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
            <div className="hidden md:flex justify-center items-center h-full">
                <div className="relative w-96 h-96">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin [animation-duration:10s]"></div>
                    <div className="absolute inset-8 border-t-2 border-primary/20 rounded-full animate-spin [animation-duration:8s] [animation-direction:reverse]"></div>
                    <div className="absolute inset-16 border-b-2 border-primary/20 rounded-full animate-spin [animation-duration:6s]"></div>
                    <div className="flex items-center justify-center h-full">
                        <span className="text-6xl font-black text-primary/80">AI</span>
                    </div>
                    <TechIcon icon={FileCode} className="top-8 left-8" />
                    <TechIcon icon={Bot} className="top-8 right-8" />
                    <TechIcon icon={DatabaseZap} className="bottom-8 left-1/2 -translate-x-1/2" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
