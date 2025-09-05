import React from 'react';
import { futureProjects } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Rocket, CheckCircle } from 'lucide-react';

export function FutureProjects() {
  return (
    <section id="future-projects" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Beyond Boundaries (Upcoming Projects)
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A glimpse into the innovative projects on my horizon.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureProjects.map((project, index) => (
            <Card key={index} className="bg-card/70 border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col group overflow-hidden">
                <CardHeader>
                    <div className="flex items-start gap-4">
                        <span className="text-4xl mt-1 opacity-80 group-hover:text-primary transition-colors">{project.icon}</span>
                        <div>
                            <CardTitle className="text-xl font-bold text-foreground mb-2">{project.title}</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-6">
                    <div>
                        <h4 className="font-semibold text-primary flex items-center gap-2 mb-2">
                            <Lightbulb className="w-5 h-5" />
                            What I’ll Build
                        </h4>
                        <p className="text-muted-foreground text-sm">{project.build}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary flex items-center gap-2 mb-2">
                           <Rocket className="w-5 h-5" />
                           Skills I’ll Learn
                        </h4>
                        <p className="text-muted-foreground text-sm">{project.skills}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-primary flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5" />
                            Impact
                        </h4>
                        <p className="text-muted-foreground text-sm">{project.impact}</p>
                    </div>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
