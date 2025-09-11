import React from 'react';
import Link from 'next/link';
import { certifications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Certifications & Achievements
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Validation of my skills from industry and academic leaders.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-card/70 border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-primary/10 backdrop-blur-sm">
               <div className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl font-bold text-foreground flex items-start gap-3">
                      <Award className="w-6 h-6 text-primary mt-1 shrink-0"/>
                      {cert.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground">
                      Issued by <span className="font-semibold text-foreground/90">{cert.issuer}</span> via {cert.platform}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                    <Button asChild size="sm" variant="ghost" className="mt-4 -ml-3">
                        <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                            Verify Credential <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                  </CardContent>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
