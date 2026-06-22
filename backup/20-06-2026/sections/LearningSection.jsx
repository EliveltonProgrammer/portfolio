import FadeInSection from "../components/FadeInSection";
import SectionHeader from "../components/SectionHeader";
import InfoCard from "../components/InfoCard";

import { learning } from "../data/learning";
import { FaBookOpen } from "react-icons/fa";

import {
  FaCogs,
  FaIndustry,
  FaBookmark,
  FaLanguage
} from "react-icons/fa";

import { SiReact } from "react-icons/si";

const icons = {
  FaCogs: <FaCogs className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaIndustry: <FaIndustry className="text-4xl text-orange-500 mx-auto mb-4" />,
  FaBookmark: <FaBookmark className="text-4xl text-blue-500 mx-auto mb-4" />,
  FaLanguage: <FaLanguage className="text-4xl text-yellow-500 mx-auto mb-4" />,
  SiReact: <SiReact className="text-4xl text-cyan-400 mx-auto mb-4" />
};

export default function LearningSection() {
  return (
    <FadeInSection>
      <section
        id="learning"
        className="py-28 container mx-auto px-4"
      >
        <SectionHeader
          icon={<FaBookOpen />}
          title="Aprendizado atual"
          subtitle="Estudando atualmente"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {learning.map((item) => (
            <InfoCard
              key={item.title}
              icon={icons[item.icon]}
              title={item.title}
              description={item.items}
            >
              <div className="mt-6 flex justify-center">
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                  {item.level}
                </span>
              </div>
            </InfoCard>
          ))}
        </div>
      </section>
    </FadeInSection>
  );
}