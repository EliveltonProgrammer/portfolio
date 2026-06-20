function ProgressBar({
  value,
  isVisible
}) {
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-zinc-500">
          Proficiência
        </span>

        <span className="font-semibold text-blue-600">
          {value}
        </span>
      </div>

      <div className="h-3 bg-zinc-100 rounded-full overflow-hidden">
        <div
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-blue-500
            via-cyan-500
            to-purple-500
            transition-all
            duration-[1500ms]
          "
          style={{
            width: isVisible
              ? value
              : "0%"
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;