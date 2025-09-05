import React from 'react';
import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, BrainCircuit, Cloud, Wrench, BarChart, BookOpen } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Programming Languages': Code,
  'Data Science & ML': BrainCircuit,
  'Cloud Technologies': Cloud,
  'Data Visualization': BarChart,
  'Web Technologies': Code,
  'Development Tools': Wrench,
  'Databases': Database,
  'Blockchain': Code,
  'CourseWork': BookOpen,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Technical Skills</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            My technical toolbox.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => {
            const Icon = iconMap[category] || Code;
            return (
              <Card key={category} className="bg-card/50 border hover:border-primary/50 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="h-6 w-6 text-primary" />
                    <span>{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
