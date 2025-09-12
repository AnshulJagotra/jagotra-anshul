
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { certifications } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Certifications() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const updateClasses = useCallback(() => {
    if (!api) {
      return
    }
    const engine = api.internalEngine();
    const slides = api.slideNodes();

    slides.forEach((slide, index) => {
      slide.classList.remove('is-active', 'is-prev', 'is-next');
      if (engine.scrollProgress.get() < 0) {
        if (index === engine.index.get() && current !== 0) {
            slide.classList.add('is-active');
        }
      } else {
         if (index === engine.index.get()) {
            slide.classList.add('is-active');
        }
      }
    });

  }, [api, current]);

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
    updateClasses();

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      updateClasses();
    })
    api.on("scroll", () => {
        updateClasses();
    })
    api.on('resize', updateClasses);

  }, [api, updateClasses])

  return (
    <section id="certifications" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Certifications & Achievements
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Validation of my skills from industry and academic leaders.
          </p>
        </div>
        
        <Carousel 
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto"
        >
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
          <CarouselContent className='-ml-4'>
            {certifications.map((cert, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-8">
                 <Card className="carousel-item-container card bg-card/70 border-border/50 group overflow-hidden backdrop-blur-sm h-full flex flex-col transition-all duration-300 ease-in-out">
                    <div className='h-full flex flex-col bg-transparent border-0'>
                      <div className="p-6 flex flex-col flex-grow">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-xl font-bold text-foreground flex items-start gap-3">
                            <Award className="w-6 h-6 text-primary mt-1 shrink-0"/>
                            {cert.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 flex-grow">
                          <p className="text-muted-foreground">
                            Issued by <span className="font-semibold text-foreground/90">{cert.issuer}</span> via {cert.platform}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
                        </CardContent>
                        <div className="mt-auto pt-4">
                          <Button asChild size="sm" variant="ghost" className="-ml-3">
                              <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                                  Verify Credential <ExternalLink className="ml-2 h-4 w-4" />
                              </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                 </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </div>
    </section>
  );
}
