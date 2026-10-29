function About({ language }) {
  const content = {
    en: {
      eyebrow: "ABOUT BRAND CABINET",
      title: "Designed Around",
      titleSecond: "Your Lifestyle.",
      description:
        "We specialize in manufacturing custom kitchens and wardrobes, alongside interior decoration work. Our focus is on quality craftsmanship, practical solutions, and refined designs tailored to your space.",
      highlight: "Every detail has a purpose.",
      button: "Start Your Project",
    },
    ar: {
      eyebrow: "عن براند كابنت",
      title: "تصميم يناسب",
      titleSecond: "أسلوب حياتك.",
      description:
        "شركة براند كابنت عُمان متخصصة في تصنيع المطابخ وخزائن الملابس وأعمال الديكور الداخلي، مع الاهتمام بجودة التصنيع، والاستغلال العملي للمساحات، والتفاصيل اللي بتفرق في كل تصميم.",
      highlight: "كل تفصيلة ليها هدف.",
      button: "ابدأ مشروعك",
    },
  };

  const text = content[language] || content.en;

  return (
    <section className="about" id="about">
      <div className="container about__container">
        <div className="about__content">
          <p className="about__eyebrow">{text.eyebrow}</p>

          <h2 className="about__title">
            {text.title}
            <br />
            <span>{text.titleSecond}</span>
          </h2>

          <p className="about__description">{text.description}</p>

          <p className="about__highlight">{text.highlight}</p>

          <a href="#contact" className="about__button">
            {text.button}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about__visual" aria-hidden="true">
          <span className="about__visual-label">BRAND CABINET — OMAN</span>
          <span className="about__visual-mark">BC</span>
        </div>
      </div>
    </section>
  );
}

export default About;
