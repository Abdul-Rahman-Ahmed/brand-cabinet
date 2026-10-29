import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/projects/ProjectCard";

function Projects({ language }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const content = {
    en: {
      eyebrow: "SELECTED WORK",
      title: "Spaces Made",
      titleSecond: "Exceptional.",
      description:
        "Explore our kitchens, wardrobes, and interior designs, crafted with care and attention to detail.",
      filters: {
        all: "All",
        kitchens: "Kitchens",
        wardrobes: "Wardrobes",
        bedrooms: "Bedrooms",
      },
    },
    ar: {
      eyebrow: "أعمال مختارة",
      title: "مساحات بتصميم",
      titleSecond: "استثنائي.",
      description:
        "اكتشف تصميمات المطابخ وخزائن الملابس والديكورات الداخلية، بعناية واهتمام بالتفاصيل.",
      filters: {
        all: "الكل",
        kitchens: "المطابخ",
        wardrobes: "خزائن الملابس",
        bedrooms: "غرف النوم",
      },
    },
  };

  const text = content[language] || content.en;

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filters = ["all", "kitchens", "wardrobes", "bedrooms"];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <header className="projects__header">
          <div>
            <p className="projects__eyebrow">{text.eyebrow}</p>

            <h2 className="projects__title">
              {text.title}
              <br />
              <span>{text.titleSecond}</span>
            </h2>
          </div>

          <p className="projects__description">{text.description}</p>
        </header>

        <div
          className="projects__filters"
          aria-label={language === "ar" ? "تصفية الأعمال" : "Filter projects"}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`projects__filter ${
                activeFilter === filter ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {text.filters[filter]}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
