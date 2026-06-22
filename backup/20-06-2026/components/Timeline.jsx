import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

function Timeline({
  id,
  title,
  icon,
  subtitle,
  items,
  aberto,
  toggle,
  expandable = true
}) {
  return (
    <section
      id={id}
      className="py-20 container mx-auto px-4">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center gap-2 mb-14">
        <h2 className="text-4xl font-bold flex items-center gap-3 text-zinc-800">
          <span className="text-blue-500">{icon}</span>
          {title}
        </h2>

        {subtitle && (
          <p className="text-sm text-zinc-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">

        {/* Linha Vertical */}
        <div
          className="
            absolute
            left-[11px]
            top-0
            h-full
            w-[3px]
            bg-gradient-to-b
            from-blue-400
            via-cyan-400
            to-purple-500
            rounded-full
          "
        />

        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            viewport={{ once: true }}
            className="relative pl-14 mb-10"
          >
            {/* Bolinha */}
            <div
              className="
                absolute
                left-0
                top-7
                w-6
                h-6
                rounded-full
                bg-blue-500
                border-4
                border-white
                shadow-[0_0_20px_rgba(59,130,246,0.7)]
              "
            />

            {/* Card */}
            <div
              className="
                rounded-3xl
                bg-white/80
                backdrop-blur-lg
                border
                border-zinc-200
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                overflow-hidden
              "
            >
              {/* Cabeçalho */}
              <button
                onClick={() =>
                  expandable && toggle(index)
                }
                className="
                  w-full
                  text-left
                  p-6
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>

                    <h3 className="text-xl font-bold text-zinc-800">
                      {item.cargo ||
                        item.titulo ||
                        item.nome}
                    </h3>

                    <div
                      className="
                        mt-3
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        text-sm
                        text-zinc-500
                      "
                    >
                      <span>
                        {item.empresa ||
                          item.instituicao ||
                          item.org}
                      </span>

                      {(item.local ||
                        item.periodo ||
                        item.ano) && (
                          <>
                            <span>•</span>

                            <div
                              className="
                              px-3
                              py-1
                              rounded-full
                              bg-blue-50
                              text-blue-600
                              font-medium
                            "
                            >
                              {item.periodo ||
                                item.ano}
                            </div>
                          </>
                        )}

                      {item.local && (
                        <>
                          <span>•</span>
                          <span>
                            {item.local}
                          </span>
                        </>
                      )}

                      {item.pais && (
                        <img
                          src={`https://flagcdn.com/w40/${item.pais}.png`}
                          alt={item.pais}
                          className="
                            w-5
                            h-4
                            rounded-sm
                            shadow-sm
                          "
                        />
                      )}
                    </div>
                  </div>

                  {expandable && (
                    <motion.div
                      animate={{
                        rotate:
                          aberto === index
                            ? 180
                            : 0
                      }}
                      transition={{
                        duration: 0.3
                      }}
                    >
                      <FiChevronDown
                        size={22}
                        className="text-blue-500"
                      />
                    </motion.div>
                  )}
                </div>
              </button>

              {/* Conteúdo Expandido */}
              <AnimatePresence>
                {expandable &&
                  aberto === index && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto"
                      }}
                      exit={{
                        opacity: 0,
                        height: 0
                      }}
                      transition={{
                        duration: 0.3
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          mx-6
                          mb-6
                          p-5
                          rounded-2xl
                          bg-blue-50
                          border
                          border-blue-100
                          text-zinc-700
                          leading-7
                        "
                      >
                        {item.descricaoLonga ||
                          "Em breve adicionarei mais detalhes sobre esta experiência."}
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;