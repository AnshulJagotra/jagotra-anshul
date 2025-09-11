import React from 'react';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Target, Zap, Wrench, BarChart, ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  problem: string;
  solution: string;
  skills: string[];
  impact: string;
  repoUrl?: string;
  category: string;
};

export function ProjectCard({
  title,
  problem,
  solution,
  skills,
  impact,
  repoUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border bg-card/60 p-6 shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      <div className="relative z-10 flex flex-grow flex-col">
        <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
        
        <div className="space-y-4 text-sm flex-grow mb-6 text-muted-foreground">
          <div className="flex items-start gap-3">
            <Target className="h-4 w-4 mt-1 text-primary/80 shrink-0"/>
            <div><strong className="text-foreground/90">Problem:</strong> {problem}</div>
          </div>
          <div className="flex items-start gap-3">
            <Zap className="h-4 w-4 mt-1 text-primary/80 shrink-0"/>
            <div><strong className="text-foreground/90">Solution:</strong> {solution}</div>
          </div>
           <div className="flex items-start gap-3">
            <BarChart className="h-4 w-4 mt-1 text-primary/80 shrink-0"/>
            <div><strong className="text-foreground/90">Impact:</strong> {impact}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary/90 border-primary/20">
              {skill}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 border-t border-border/50 pt-4">
          {repoUrl && (
            <Button asChild size="sm" variant="ghost" className="w-full">
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                View on GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
