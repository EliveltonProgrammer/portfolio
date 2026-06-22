import FadeInSection from "../components/FadeInSection";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";

import { projetos } from "../data/projetos";
import { FaLaptopCode } from "react-icons/fa";

import {
  FaServer,
  FaProjectDiagram,
  FaCloudSun,
  FaMicrochip
} from "react-icons/fa";

const icons = {
  FaServer: <FaServer className="text-3xl mb-2 text-blue-500" />,
  FaProjectDiagram: <FaProjectDiagram className="text-3xl mb-2 text-blue-500" />,
  FaCloudSun: <FaCloudSun className="text-3xl mb-2 text-blue-500" />,
  FaMicrochip: <FaMicrochip className="text-3xl mb-2 text-blue-500" />
};

export default function ProjectsSection({ openModal }) {
  return (
    <FadeInSection>
      <section 
      id="projects" 
      className="py-28 container mx-auto px-4">

        <SectionHeader
          icon={<FaLaptopCode />}
          title="Projetos"
          subtitle="Clique para mais detalhes dos projetos"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projetos.map((proj) => (
            <ProjectCard
              key={proj.title}
              projeto={{
                ...proj,
                icon: icons[proj.icon]
              }}
              onClick={() => openModal(proj)}
            />
          ))}
        </div>

      </section>
    </FadeInSection>
  );
}