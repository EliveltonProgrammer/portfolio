import FadeInSection from "../components/FadeInSection";
import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";
import ProgressBar from "../components/ProgressBar";

import { skills } from "../data/skills";
import { FiCpu } from "react-icons/fi";

import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaServer,
  FaGlobeAmericas
} from "react-icons/fa";

const icons = {
  FaCode: <FaCode className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaLaptopCode: <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaDatabase: <FaDatabase className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaTools: <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaServer: <FaServer className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaGlobeAmericas: <FaGlobeAmericas className="text-4xl text-blue-500 mx-auto mb-4" />
};

export default function SkillsSection() {
  return (
    <FadeInSection>
      {(isVisible) => (
        <section
          id="skills"
          className="py-28 container mx-auto px-4"
        >
          <SectionHeader
            icon={<FiCpu />}
            title="Skills"
            subtitle="Minhas habilidades"
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {skills.map((skill) => (
              <InfoCard
                key={skill.id}
                icon={icons[skill.icon]}
                title={skill.title}
                description={skill.items}
              >
                <ProgressBar
                  value={skill.level || "70%"}
                  isVisible={isVisible}
                />
              </InfoCard>
            ))}
          </div>
        </section>
      )}
    </FadeInSection>
  );
}