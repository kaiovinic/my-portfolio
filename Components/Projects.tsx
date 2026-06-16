import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaStar, FaCodeBranch } from "react-icons/fa";
import { Project } from "../lib/github";

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects = [] }: ProjectsProps) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Handle opening modal and locking scroll
  const openModal = (project: Project, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setActiveProject(project);
  };

  const closeModal = () => {
    setActiveProject(null);
  };

  // Keyboard navigation & accessibility effects
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      // Auto-focus first element in modal (Close button)
      const closeBtn = modalRef.current?.querySelector(".modal-close-btn") as HTMLElement;
      if (closeBtn) closeBtn.focus();
    } else {
      document.body.style.overflow = "";
      // Restore focus to button that opened the modal
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }
  }, [activeProject]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
    if (e.key === "Tab" && modalRef.current) {
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex="0"]'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  };

  return (
    <div className="bg-backgroundColor pt-[4rem] md:pt-[8rem] pb-[5rem]" id="projects">
      <h1 className="heading mb-[4rem]">
        Meus <span className="text-cta">Projetos</span>
      </h1>

      <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
        {projects.map((project, index) => {
          const isFeatured = project.featured;
          return (
            <button
              key={project.id}
              onClick={(e) => openModal(project, e)}
              className={`text-left group card-bento p-0 overflow-hidden relative cursor-pointer flex flex-col justify-between ${
                isFeatured ? "md:col-span-2 md:row-span-2" : "col-span-1 row-span-1"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              aria-label={`Ver detalhes do projeto: ${project.title}`}
            >
              {/* Project Image Container */}
              <div className="relative w-full h-full min-h-[160px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Modern Hover Overlay */}
                <div className="absolute inset-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10">
                  <div>
                    <h3 className="text-[20px] font-bold text-textColor font-heading">
                      {project.title}
                    </h3>
                    <p className="text-[14px] text-secondaryColor font-body mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[11px] font-semibold bg-badgeBg text-textColor border border-cardBorder rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Click Indicator & GitHub Stats */}
                    <div className="flex items-center justify-between w-full mt-1">
                      <span className="text-[13px] font-bold text-cta flex items-center gap-1 font-body">
                        Ver detalhes do projeto &rarr;
                      </span>
                      
                      {(project.stars > 0 || project.forks > 0) && (
                        <div className="flex items-center gap-2.5 text-secondaryColor text-[12px] font-bold">
                          {project.stars > 0 && (
                            <span className="flex items-center gap-1">
                              <FaStar className="w-[0.75rem] h-[0.75rem] text-yellow-500" />
                              {project.stars}
                            </span>
                          )}
                          {project.forks > 0 && (
                            <span className="flex items-center gap-1">
                              <FaCodeBranch className="w-[0.75rem] h-[0.75rem]" />
                              {project.forks}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Accessible Lightbox Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100000] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            ref={modalRef}
            className="bg-cardBg rounded-2xl max-w-[700px] w-full shadow-2xl relative overflow-hidden border border-cardBorder flex flex-col md:flex-row max-h-[90vh] md:max-h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Side: Image */}
            <div className="relative w-full md:w-[45%] h-[200px] md:h-auto min-h-[200px] md:min-h-[380px]">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Right Side: Details */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 overflow-y-auto">
              <div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <h2 id="modal-title" className="text-[24px] md:text-[28px] font-bold text-textColor font-heading leading-tight flex-1">
                    {activeProject.title}
                  </h2>
                  
                  {(activeProject.stars > 0 || activeProject.forks > 0) && (
                    <div className="flex items-center gap-2 flex-shrink-0 self-start md:self-center">
                      {activeProject.stars > 0 && (
                        <div className="flex items-center gap-1 px-2.5 py-1 text-[12px] font-bold bg-badgeBg border border-cardBorder text-textColor rounded-full">
                          <FaStar className="w-[0.8rem] h-[0.8rem] text-yellow-500" />
                          <span>{activeProject.stars}</span>
                        </div>
                      )}
                      {activeProject.forks > 0 && (
                        <div className="flex items-center gap-1 px-2.5 py-1 text-[12px] font-bold bg-badgeBg border border-cardBorder text-textColor rounded-full">
                          <FaCodeBranch className="w-[0.8rem] h-[0.8rem] text-secondaryColor" />
                          <span>{activeProject.forks}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-semibold bg-badgeBg text-textColor border border-cardBorder rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-[14px] md:text-[15px] text-secondaryColor font-body mt-4 leading-relaxed">
                  {activeProject.longDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href={activeProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 text-[14px] flex-1 justify-center py-2.5"
                >
                  <span>Acessar Demo</span>
                  <FaExternalLinkAlt className="w-[0.8rem] h-[0.8rem]" />
                </a>
                
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-[14px] justify-center py-2.5 px-4"
                    aria-label="Ver código fonte no GitHub"
                  >
                    <FaGithub className="w-[1.2rem] h-[1.2rem]" />
                  </a>
                )}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="modal-close-btn absolute top-4 right-4 bg-cardBg/90 backdrop-blur border border-cardBorder hover:bg-badgeBg hover:text-cta transition-colors text-textColor rounded-full p-2 cursor-pointer shadow-sm z-20"
              aria-label="Fechar detalhes do projeto"
            >
              <FaTimes className="w-[1rem] h-[1rem]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
