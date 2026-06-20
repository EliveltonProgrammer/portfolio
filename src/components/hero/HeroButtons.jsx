import { Button } from "@/components/ui/button";
import {
  FaIdBadge,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin
} from "react-icons/fa";

function HeroButtons() {
  return (
    <div
      className="
        flex
        flex-wrap
        gap-4
        justify-center
        md:justify-start
        mt-8
      "
    >
      <Button
        onClick={() =>
          window.scrollTo({
            top: 800,
            behavior: "smooth"
          })
        }
        className="
          flex items-center gap-2
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <FaIdBadge />
        Ver Portfólio
      </Button>

      <Button
        asChild
        className="
          flex items-center gap-2
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <a
          href="https://wa.me/5515996697754"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          Fale comigo
        </a>
      </Button>

      <Button
        asChild
        className="
          flex items-center gap-2
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <a href="mailto:eliveltoncarriel.almeida@hotmail.com">
          <FaEnvelope />
          E-mail
        </a>
      </Button>

      <Button
        asChild
        className="
          flex items-center gap-2
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        <a
          href="https://www.linkedin.com/in/eliveltonalmeida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </Button>
    </div>
  );
}

export default HeroButtons;