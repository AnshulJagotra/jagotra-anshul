'use client';
import React, { useState, useMemo } from 'react';
import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';

const categories = [...Array.from(new Set(projects.map(p => p.category)))];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">My Work</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            A selection of projects that I'm proud of.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'ghost'}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category.toLowerCase()}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
