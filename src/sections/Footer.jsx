function Footer({ language }) {
  const isArabic = language === "ar";

  const content = {
    en: {
      tagline: "Crafting spaces that reflect your lifestyle.",
      description:
        "Specialists in manufacturing kitchens and wardrobes, with interior decoration services.",
      navigation: "Explore",
      contact: "Contact Us",
      locations: "Our Locations",
      home: "Home",
      projects: "Our Work",
      about: "About Us",
      kitchens: "Kitchens & Wardrobes",
      muscat: "Muscat Branch",
      ibri: "Ibri Branch",
      rights: "All rights reserved.",
    },
    ar: {
      tagline: "تصميمات تعكس ذوقك وأسلوب حياتك.",
      description:
        "متخصصون في تصنيع المطابخ وخزائن الملابس وأعمال الديكور الداخلي.",
      navigation: "روابط سريعة",
      contact: "تواصل معنا",
      locations: "فروعنا",
      home: "الرئيسية",
      projects: "أعمالنا",
      about: "من نحن",
      kitchens: "المطابخ والخزائن",
      muscat: "فرع مسقط",
      ibri: "فرع عبري",
      rights: "جميع الحقوق محفوظة.",
    },
  };

  const text = content[language] || content.en;
  const year = new Date().getFullYear();

  return (
    <footer className="footer" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img src="/images/logo.png" alt="Brand Cabinet Oman" />
            </a>

            <h2>{text.tagline}</h2>
            <p>{text.description}</p>
          </div>

          <div className="footer__column">
            <h3>{text.navigation}</h3>
            <a href="#home">{text.home}</a>
            <a href="#projects">{text.projects}</a>
            <a href="#about">{text.about}</a>
          </div>

          <div className="footer__column">
            <h3>{text.contact}</h3>
            <a href="tel:+96879900957">+968 7990 0957</a>
            <a href="tel:+96879992957">+968 7999 2957</a>
            <a
              href="https://wa.me/96879900957"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/brand_cabinet.om/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <div className="footer__column">
            <h3>{text.locations}</h3>
            <a
              href="https://maps.app.goo.gl/RAu2LJFk66BWDmc28?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.muscat}
            </a>
            <a
              href="https://maps.app.goo.gl/K9zieqTn6Q9RSXUeA?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text.ibri}
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {year} Brand Cabinet Oman. {text.rights}
          </p>
          <a href="#home">{text.home} ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
