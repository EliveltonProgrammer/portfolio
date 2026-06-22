import { useState } from "react";
import { FiBookOpen } from "react-icons/fi";

import Timeline from "../components/Timeline";
import { formacoes } from "../data/formacoes";

function EducationSection() {
  const [aberto, setAberto] = useState(null);

  const toggle = (index) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <Timeline
      id="training"
      title="Formação"
      icon={<FiBookOpen />}
      items={formacoes}
      aberto={aberto}
      toggle={toggle}
    />
  );
}

export default EducationSection;