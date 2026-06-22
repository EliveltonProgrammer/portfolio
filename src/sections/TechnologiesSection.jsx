import { FaLaptopCode } from "react-icons/fa";
import { tecnologias } from "../data/tecnologias";

export default function TechnologiesSection() {
  return (
    <section className="py-28 container mx-auto px-4 bg-gray-50">

      <h2 className="text-3xl font-bold text-gray-800 mb-12 flex items-center justify-center gap-3">
        <FaLaptopCode className="text-blue-500" />
        Tecnologias
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {tecnologias.map((tech, i) => (
          <div
            key={i}
            className="
      flex flex-col items-center gap-3
      p-5 rounded-2xl
      bg-white border border-gray-200
      shadow-sm hover:shadow-md
      hover:-translate-y-1 transition
    "
          >
            {tech.Icon ? (
              <tech.Icon
                className="text-4xl"
                style={{ color: tech.color }}
              />
            ) : (
              <img
                src={import.meta.env.BASE_URL + tech.image.replace(/^\//, "")}
                alt={tech.label}
                className="w-10 h-10 object-contain"
              />
            )}

            <span className="text-sm text-gray-700 font-medium">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}