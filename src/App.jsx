import "./App.css";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import FloatingButtons from "./components/FloatingButtons";
import Modal from "./components/Modal";

// Sections
import HeroSection from "./sections/HeroSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import SkillsSection from "./sections/SkillsSection";
import LearningSection from "./sections/LearningSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import CertificatesSection from "./sections/CertificatesSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

import {
  FaCogs,
  FaGithub,
  FaLightbulb,
  FaTools,
  FaImages,
  FaVideo,
  FaExternalLinkAlt
} from "react-icons/fa";

import Lenis from "lenis";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // abrir modal do projeto
  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  // abrir imagem fullscreen
  const openImage = (img) => {
    setPreviewImage(img);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingButtons />
      <Navbar />

      <HeroSection />
      <TechnologiesSection />

      <ExperienceSection />
      <EducationSection />
      <CertificatesSection />

      <SkillsSection />
      <LearningSection />

      {/* PASSA openModal CORRETAMENTE */}
      <ProjectsSection openModal={openModal} />

      <ContactSection />
      <Footer />

      {/* ================= MODAL ================= */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-8 text-gray-800">

            {/* DESCRIÇÃO */}
            <div className="bg-gray-50 border rounded-xl p-4">
              <p>{selectedProject.description}</p>
            </div>

            {/* LINKS */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* GitHub */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <FaGithub className="text-gray-700" />
                  GitHub
                </h3>

                {selectedProject.github ? (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Acessar repositório
                  </a>
                ) : (
                  <p className="text-sm text-gray-400">Sem repositório</p>
                )}
              </div>

              {/* Live */}
              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <FaExternalLinkAlt className="text-green-600" />
                  Live
                </h3>

                {selectedProject.live ? (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline text-sm"
                  >
                    Acessar aplicação
                  </a>
                ) : (
                  <p className="text-sm text-gray-400">Sem versão online</p>
                )}
              </div>

            </div>

            {/* AUTOMAÇÃO-PROBLEMA / ABORDAGEM */}
            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold text-red-500 mb-2 flex items-center gap-2">
                  <FaCogs className="text-red-500" />
                  Automação
                </h3>

                <p className="text-sm text-gray-600">
                  {selectedProject.automation}
                </p>
              </div>

              <div className="bg-white border rounded-xl p-4">
                <h3 className="font-semibold text-blue-500 mb-2 flex items-center gap-2">
                  <FaLightbulb className="text-blue-500" />
                  Abordagem
                </h3>

                <p className="text-sm text-gray-600">
                  {selectedProject.approach}
                </p>
              </div>

            </div>

            {/* TECNOLOGIAS */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <FaTools className="text-gray-700" />
                Tecnologias
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies?.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGENS (LIGHTBOX) */}
            {selectedProject.images?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <FaImages className="text-gray-700" />
                  Galeria
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedProject.images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border cursor-pointer hover:scale-[1.02] transition"
                      onClick={() => openImage(img)}
                    >
                      <img
                        src={img}
                        className="w-full h-28 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VÍDEOS (DEMONSTRAÇÃO) */}
            {selectedProject?.videos?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <FaVideo className="text-gray-700" />
                  Demonstrações
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.videos.map((video, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border bg-black"
                    >
                      <video
                        key={video}
                        controls
                        preload="auto"
                        playsInline
                        onError={(e) => console.log("Erro no vídeo:", video, e)}
                        className="w-full max-h-[350px] object-contain">
                        <source src={video} type="video/mp4" />
                      </video>
                      
                    </div>
                  ))}

                </div>

              </div>
            )}

          </div>
        )}
      </Modal>

      {/* ================= LIGHTBOX ================= */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;