function InfoCard({
  icon,
  title,
  description,
  children
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-lg
        border
        border-zinc-200
        p-7
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-br
          from-blue-50
          via-transparent
          to-cyan-50
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <div className="flex flex-col items-center">
          <div
            className="
              w-20
              h-20
              rounded-2xl
              bg-blue-50
              flex
              items-center
              justify-center
              shadow-sm
              mb-4
            "
          >
            {icon}
          </div>

          <h3 className="text-xl font-bold text-zinc-800">
            {title}
          </h3>
        </div>

        <p className="mt-5 text-center text-zinc-500">
          {description}
        </p>

        {children}
      </div>
    </div>
  );
}

export default InfoCard;