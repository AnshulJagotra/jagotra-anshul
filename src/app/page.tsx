import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { FutureProjects } from '@/components/sections/future-projects';
import { Experience } from '@/components/sections/experience';
import { Certifications } from '@/components/sections/certifications';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Certifications />
      <FutureProjects />
      <Contact />
    </div>
  );
}
