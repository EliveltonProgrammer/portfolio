import { useState } from "react";
import { FiBriefcase } from "react-icons/fi";

import Timeline from "../components/Timeline";
import { experiencias } from "../data/experiencias";

function ExperienceSection() {
  const [aberto, setAberto] = useState(null);

  const toggle = (index) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <Timeline
      id="experience"
      title="Experiências"
      subtitle="Clique para ver as responsabilidades"
      icon={<FiBriefcase />}
      items={experiencias}
      aberto={aberto}
      toggle={toggle}
    />
  );
}

export default ExperienceSection;