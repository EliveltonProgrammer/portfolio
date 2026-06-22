import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaBookOpen
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Links
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a
                  href="https://github.com/elivelton-almeida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaGithub />
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/eliveltonalmeida"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://drive.google.com/file/d/1wddhVTZA1JKC7GoANBuFLydI53EM9DFz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaBookOpen />
                  Currículo (PT-BR)
                </a>
              </li>

              <li>
                <a
                  href="https://drive.google.com/file/d/1c6smU3mFDXZ425Uo9Pxx-Fmhsg1yl2We/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <FaBookOpen />
                  Resume (EN)
                </a>
              </li>

            </ul>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contatos
            </h4>

            <div className="space-y-3 text-gray-400">

              <a
                href="https://wa.me/5515996697754"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaWhatsapp />
                +55 (15) 99669-7754
              </a>

              <a
                href="mailto:eliveltoncarriel.almeida@hotmail.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <FaEnvelope />
                eliveltoncarriel.almeida@hotmail.com
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">

          <p>
            © {new Date().getFullYear()} Desenvolvido por
            {" "}
            Elivelton C. de Almeida
          </p>

          <a
            href="https://github.com/elivelton-almeida"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 mt-3 hover:text-white transition"
          >
            <FaGithub />
            Implantado com GitHub Pages
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;