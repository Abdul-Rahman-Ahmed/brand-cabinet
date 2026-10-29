function Hero({ content }) {
  return (
    <section className="hero" id="home">
      <video
        className="hero__background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">{content.eyebrow}</p>

          <h1>
            {content.titleFirst}
            <br />
            <span>{content.titleSecond}</span>
          </h1>

          <p className="hero__description">{content.description}</p>

          <div className="hero__actions">
            <a href="#projects" className="hero__button">
              {content.explore} <span aria-hidden="true">→</span>
            </a>

            <a href="#contact" className="hero__text-link">
              {content.start} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <p className="hero__image-caption">{content.imageCaption}</p>
      </div>
    </section>
  );
}

export default Hero;
