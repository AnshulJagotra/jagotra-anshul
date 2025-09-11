'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#future-projects', label: 'Upcoming' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link href={href} onClick={() => setSheetOpen(false)}>
      <span className="font-medium text-muted-foreground hover:text-primary transition-colors">{label}</span>
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Anshul Jagotra</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] bg-background/90 backdrop-blur-lg">
                <div className="flex flex-col p-6 pt-12">
                <Link href="/" className="flex items-center mb-8" onClick={() => setSheetOpen(false)}>
                    <h1 className="text-xl font-bold text-primary">Anshul Jagotra</h1>
                </Link>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} />
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
