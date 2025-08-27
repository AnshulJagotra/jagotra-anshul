import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anshul Jagotra. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="flex items-center gap-4">
            <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
            </Link>
            <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={`mailto:${personalInfo.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
            </Link>
        </div>
      </div>
    </footer>
  );
}
