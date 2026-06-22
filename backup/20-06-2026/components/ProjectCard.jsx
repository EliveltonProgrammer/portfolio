function ProjectCard({
  projeto,
  onClick
}) {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-lg
        border
        border-zinc-200
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
        cursor-pointer
      "
    >
      <div
        className="
          h-2
          bg-gradient-to-r
          from-blue-500
          via-cyan-500
          to-purple-500
        "
      />

      <div className="p-7">
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-blue-50
            flex
            items-center
            justify-center
            mb-5
          "
        >
          {projeto.icon}
        </div>

        <h3 className="text-2xl font-bold text-zinc-800">
          {projeto.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-4">
          {projeto.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-zinc-100
                text-xs
                font-medium
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 text-zinc-600 leading-7">
          {projeto.description}
        </p>

        <div className="mt-6 flex justify-between items-center">
          <span
            className="
              text-sm
              font-semibold
              text-green-600
            "
          >
            {projeto.level}
          </span>

          <span
            className="
              text-blue-500
              font-semibold
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            Ver detalhes →
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;