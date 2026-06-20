import { Typewriter } from "react-simple-typewriter";
import HeroButtons from "./HeroButtons";

function HeroContent() {
  return (
    <div
      className="
        text-center
        md:text-left
        max-w-xl
        w-full
      "
    >
      <h1 className="text-5xl font-bold mb-3">
          Elivelton Almeida
      </h1>

      <p className="text-xl mb-4">
        <Typewriter
          words={[
            "Desenvolvedor .NET Full Stack",
            "Analista de Sistemas",
            "Especialista em Suporte"
          ]}
          typingSpeed={60}
          deletingSpeed={60}
          delay={2000}
          loop
        />
      </p>

      <p
        className="
          text-gray-300
          leading-relaxed
        "
      >
        Profissional de Tecnologia da Informação com mais de
        10 anos de experiência, atuando em suporte técnico,
        análise de sistemas, implantação e sustentação de
        sistemas ERP para gestão comercial e industrial.

        <br />
        <br />

        Experiência em atendimento a usuários,
        resolução de incidentes, migração de dados,
        levantamento de requisitos e evolução de
        sistemas alinhados às necessidades do negócio.

        <br />
        <br />

        Conhecimentos em tecnologias do ecossistema
        .NET e GeneXus, atuando na manutenção e
        desenvolvimento de aplicações web e desktop,
        APIs REST, integrações entre sistemas e bancos
        de dados relacionais.

        <br />
        <br />

        Busco consolidar minha carreira como
        Desenvolvedor, agregando minha experiência
        em suporte, análise e desenvolvimento de
        sistemas para contribuir com soluções
        eficientes e de qualidade.
      </p>

      <HeroButtons />
    </div>
  );
}

export default HeroContent;