import { Hero } from "@/components/sections/Hero";
import { Departments } from "@/components/sections/Departments";
import { Projects } from "@/components/sections/Projects";
import { Teams } from "@/components/sections/Teams";
import { CodingLanguages } from "@/components/sections/CodingLanguages";
import { ContactForm } from "@/components/sections/ContactForm";





export default function Index() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Departments />
      <CodingLanguages />
      <Projects />
      <Teams />
      <ContactForm />


      {/* Call to Action Section */}

    </div>
  );
}
