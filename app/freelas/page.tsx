import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Freelance } from "@/components/Freelance";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Freelas",
  description:
    "Design de apresentações, UX/UI, landing pages e consultoria UX. Calcule o orçamento de uma apresentação.",
};

export default function FreelancePage() {
  return (
    <>
      <Nav />
      <main id="main" className="page-main">
        <Freelance />
        <Contact />
      </main>
    </>
  );
}
