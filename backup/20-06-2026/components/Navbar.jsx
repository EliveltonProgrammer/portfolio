import { useState, useEffect } from "react";

import { FaBars, FaTimes } from "react-icons/fa"

import {
    FiHome,
    FiBriefcase,
    FiBookOpen,
    FiAward,
    FiCpu,
    FiFolder,
    FiMail,
    FiLink,
    FiFileText,
    FiChevronDown
} from "react-icons/fi";

export default function Navbar() {
    const BASE_PATH = import.meta.env.BASE_URL;

    const [menuOpen, setMenuOpen] = useState(false);
    const [curriculoOpen, setCurriculoOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-50
                bg-white/95 backdrop-blur-md
                transition-all duration-300
                ${scrolled
                    ? "shadow-lg py-3"
                    : "shadow-md py-5"
                }`}
        >
            <div className="container mx-auto flex justify-between items-center px-6">

                {/* Logo + Título */}
                <div
                    className="flex items-center gap-3 cursor-pointer text-blue-400"
                    onClick={() => handleScroll("start")}
                >
                    {/* Logo */}
                    <img
                        src={BASE_PATH + "logo.png"}
                        alt="Logo"
                        className={`transition-all duration-300
                            ${scrolled
                                ? "w-8 h-8"
                                : "w-10 h-10"
                            }`}
                    />

                    {/* Titulo */}
                    <h1
                        className={`font-bold transition-all duration-300
                            ${scrolled
                                ? "text-xl"
                                : "text-2xl"
                            }`}
                    >
                        Portfólio
                    </h1>
                </div>

                {/* Menu Desktop */}
                <ul
                    className={`
                        hidden md:flex
                        font-medium text-gray-700
                        transition-all duration-300
                        ${scrolled
                            ? "gap-6 text-sm"
                            : "gap-8 text-base"
                        }`}
                >

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("start")}>
                        <FiHome /> Início
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("experience")}>
                        <FiBriefcase /> Experiências
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("training")}>
                        <FiBookOpen /> Acadêmico
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("certification")}>
                        <FiAward /> Certificações
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("skills")}>
                        <FiCpu /> Skills
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("projects")}>
                        <FiFolder /> Projetos
                    </li>

                    <li className="relative">
                        <button
                            onClick={() => setCurriculoOpen(!curriculoOpen)}
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                        >
                            <FiFileText />
                            Currículo
                            <FiChevronDown
                                className={`transition-transform ${curriculoOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {curriculoOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border overflow-hidden">
                                <a
                                    href="https://drive.google.com/file/d/1wddhVTZA1JKC7GoANBuFLydI53EM9DFz/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-3 hover:bg-gray-100"
                                >
                                    🇧🇷 Currículo (PT-BR)
                                </a>

                                <a
                                    href="https://drive.google.com/file/d/1c6smU3mFDXZ425Uo9Pxx-Fmhsg1yl2We/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-4 py-3 hover:bg-gray-100"
                                >
                                    🇺🇸 Resume (EN)
                                </a>
                            </div>
                        )}
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("contact")}>
                        <FiMail /> Contato
                    </li>

                    <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                        onClick={() => handleScroll("footer")}>
                        <FiLink /> Links
                    </li>
                </ul>

                {/* Botão Mobile */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-lg py-4">
                    <ul className="flex flex-col gap-6 items-center font-medium text-gray-700">

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("start")}>
                            <FiHome /> Início
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("experience")}>
                            <FiBriefcase /> Experiências
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("training")}>
                            <FiBookOpen /> Acadêmico
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("certification")}>
                            <FiAward /> Certificações
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("skills")}>
                            <FiCpu /> Skills
                        </li>

                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("projects")}>
                            <FiFolder /> Projetos
                        </li>

                        <li className="relative">
                            <button
                                onClick={() => setCurriculoOpen(!curriculoOpen)}
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                            >
                                <FiFileText />
                                Currículo
                                <FiChevronDown
                                    className={`transition-transform ${curriculoOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {curriculoOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border overflow-hidden">
                                    <a
                                        href="https://drive.google.com/file/d/1wddhVTZA1JKC7GoANBuFLydI53EM9DFz/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-3 hover:bg-gray-100"
                                    >
                                        🇧🇷 Currículo (PT-BR)
                                    </a>

                                    <a
                                        href="https://drive.google.com/file/d/1c6smU3mFDXZ425Uo9Pxx-Fmhsg1yl2We/view"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-3 hover:bg-gray-100"
                                    >
                                        🇺🇸 Resume (EN)
                                    </a>
                                </div>
                            )}
                        </li>
                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("contact")}>
                            <FiMail /> Contato
                        </li>


                        <li className="cursor-pointer flex items-center gap-2 hover:text-blue-400"
                            onClick={() => handleScroll("footer")}>
                            <FiLink /> Links
                        </li>

                    </ul>
                </div>
            )}
        </nav>
    );
}