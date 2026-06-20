import foto from "../../assets/foto.jpg";

function HeroProfile() {
  return (
    <div
      className="
        w-40 h-40
        md:w-52 md:h-52
        rounded-full
        overflow-hidden
        border-4 border-white/20
        shadow-2xl
        shrink-0
      "
    >
      <img
        src={foto}
        alt="Elivelton Almeida"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default HeroProfile;