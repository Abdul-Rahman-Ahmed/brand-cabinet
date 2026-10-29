import { useEffect, useRef, useState } from "react";

function ProjectCard({ project, language }) {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) {
          video.play().catch(() => {
            // The browser may block autoplay.
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  const isArabic = language === "ar";

  const categories = {
    kitchens: { en: "Kitchens", ar: "مطابخ" },
    wardrobes: { en: "Wardrobes", ar: "خزائن ملابس" },
    bedrooms: { en: "Bedrooms", ar: "غرف نوم" },
  };

  const contentTypes = {
    tip: { en: "Design Tips", ar: "نصائح التصميم" },
    inspiration: { en: "Design Inspiration", ar: "إلهام التصميم" },
    project: { en: "Our Work", ar: "أعمالنا" },
  };

  const category = categories[project.category];
  const type = contentTypes[project.contentType];

  const badgeText = type
    ? `${type[language]}${category ? ` · ${category[language]}` : ""}`
    : (category?.[language] ?? "");

  return (
    <article className="project-card">
      <div className="project-card__media">
        <video
          ref={videoRef}
          className="project-card__video"
          src={project.media}
          poster={project.media
            .replace(/^\/videos\//, "/images/")
            .replace(/\.(mp4|MP4)$/i, "-poster.jpg")}
          muted
          loop
          playsInline
          preload="none"
          aria-label={project.title[language]}
        />
        <span className="project-card__category">{badgeText}</span>
      </div>
      <div className="project-card__info">
        <h3>{project.title[language]}</h3>
        <p>{project.description[language]}</p>
      </div>
    </article>
  );
}

export default ProjectCard;
