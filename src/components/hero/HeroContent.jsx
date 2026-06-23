import FadeTypewriter from "../FadeTypewriter";
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
        <FadeTypewriter
          words={[
            "Desenvolvedor .NET Jr",
            "Analista de Sistemas Jr",
            "Analista de Suporte Sr"
          ]}
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
        
        Busco consolidar minha carreira como Desenvolvedor, 
        ampliando meus conhecimentos em automação e integrando 
        minha experiência em suporte, análise e desenvolvimento 
        de sistemas, com o objetivo de contribuir para a entrega 
        de soluções eficientes, escaláveis e de alta qualidade.
      </p>

      <HeroButtons />
    </div>
  );
}

export default HeroContent;