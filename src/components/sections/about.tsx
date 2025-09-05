import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, education } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <div className="relative w-48 h-48 md:w-60 md:h-60 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
                <div className="relative flex h-40 w-40 md:h-52 md:w-52 items-center justify-center rounded-full bg-card/60 backdrop-blur-sm border border-primary/20 shadow-lg">
                    <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[200%_auto] animate-gradient">
                        AJ
                    </span>
                </div>
            </div>
            <p className="text-lg text-primary mt-6 font-medium max-w-sm">
              My journey blends coding, problem-solving, and research to build intelligent, scalable, and impactful solutions.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary">
                        <Briefcase className="h-6 w-6" />
                        Professional Summary
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                        {personalInfo.professionalSummary}
                    </p>
                </CardContent>
            </Card>

            <Card className="mt-8 bg-card/50 border-border/50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-primary">
                        <GraduationCap className="h-6 w-6" />
                        Education
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <h4 className="text-lg font-semibold text-foreground">{education.degree}</h4>
                    <p className="text-muted-foreground">{education.university}</p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
