function SectionHeader({
  icon,
  title,
  subtitle
}) {
  return (
    <div className="flex flex-col items-center gap-2 mb-14">
      <h2
        className="
          text-4xl
          font-bold
          flex
          items-center
          gap-3
          text-zinc-800
        "
      >
        <span className="text-blue-500">
          {icon}
        </span>

        {title}
      </h2>

      {subtitle && (
        <p className="text-sm text-zinc-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;