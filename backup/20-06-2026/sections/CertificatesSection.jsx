import { FiAward } from "react-icons/fi";

import Timeline from "../components/Timeline";
import { certificados } from "../data/certificados";

function CertificatesSection() {
  return (
    <Timeline
      id="certification"
      title="Certificados"
      icon={<FiAward />}
      items={certificados}
      expandable={false}
    />
  );
}

export default CertificatesSection;