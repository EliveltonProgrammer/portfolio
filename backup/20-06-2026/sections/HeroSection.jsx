import HeroProfile from "../components/hero/HeroProfile";
import HeroContent from "../components/hero/HeroContent";

function HeroSection() {
  return (
    <section
      id="start"
      className="
        relative
        min-h-screen
        md:h-screen
        flex
        items-start
        md:items-center
        justify-center
        bg-black/50
        text-white
        px-6
        pt-10
        overflow-x-hidden
      "
    >
      <div
        className="
          flex
          flex-col
          md:flex-row
          items-center
          gap-10
          w-full
          max-w-6xl
          mx-auto
        "
      >
        <HeroProfile />

        <HeroContent />
      </div>
    </section>
  );
}

export default HeroSection;