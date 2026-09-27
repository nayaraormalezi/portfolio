import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ExperienceOverview } from "@/components/ExperienceOverview";
import { Freelance } from "@/components/Freelance";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pillars } from "@/components/Pillars";
import { Process } from "@/components/Process";
import { Repertoire } from "@/components/Repertoire";
import { SelectedWork } from "@/components/SelectedWork";
import { Statement } from "@/components/Statement";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <SelectedWork variant="carousel" />
        <Statement />
        <ExperienceOverview />
        <Pillars />
        <Repertoire />
        <Process />
        <Freelance />
        <Contact />
      </main>
    </>
  );
}
