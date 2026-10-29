function Contact({ language }) {
  const isArabic = language === "ar";

  const content = {
    en: {
      eyebrow: "GET IN TOUCH",
      title: "Let's Create Something",
      titleAccent: "Made for You.",
      description:
        "Planning a new kitchen or wardrobe? Contact our team and let's discuss your project.",
      whatsapp: "Chat on WhatsApp",
      instagram: "Follow Us on Instagram",
      phone: "Call Us",
      locations: "Visit Our Branches",
      muscat: "Muscat Branch",
      muscatAddress: "Al Mouj Street, next to Al Ubaidani",
      ibri: "Ibri Branch",
      ibriAddress: "Al Iraqi Street, next to Tasdeed and Bank Muscat",
      directions: "Get Directions",
    },
    ar: {
      eyebrow: "تواصل معنا",
      title: "خلينا نصمم",
      titleAccent: "مساحتك المثالية.",
      description:
        "بتخطط لمطبخ جديد أو خزانة ملابس؟ تواصل معانا وخلينا نساعدك تبدأ مشروعك.",
      whatsapp: "تواصل عبر واتساب",
      instagram: "تابعنا على إنستجرام",
      phone: "اتصل بنا",
      locations: "زور فروعنا",
      muscat: "فرع مسقط",
      muscatAddress: "شارع الموج، بجوار العبيداني",
      ibri: "فرع عبري",
      ibriAddress: "شارع العراقي، بجوار تسديد وبنك مسقط",
      directions: "اعرف الاتجاهات",
    },
  };

  const text = content[language] || content.en;

  const whatsappMessage = isArabic
    ? "السلام عليكم، أنا مهتم بتصميم مطبخ أو خزانة ملابس. ممكن أعرف التفاصيل؟"
    : "Hello, I'm interested in a kitchen or wardrobe design. Could you share more details?";

  const whatsappUrl = `https://wa.me/96879900957?text=${encodeURIComponent(
    whatsappMessage,
  )}`;

  const branches = [
    {
      id: "muscat",
      name: text.muscat,
      address: text.muscatAddress,
      phone: "+968 7990 0957",
      phoneLink: "tel:+96879900957",
      mapUrl: "https://maps.app.goo.gl/RAu2LJFk66BWDmc28?g_st=ic",
    },
    {
      id: "ibri",
      name: text.ibri,
      address: text.ibriAddress,
      phone: "+968 7999 3259",
      phoneLink: "tel:+96879993259",
      mapUrl: "https://maps.app.goo.gl/K9zieqTn6Q9RSXUeA?g_st=ic",
    },
  ];

  return (
    <section className="contact" id="contact" dir={isArabic ? "rtl" : "ltr"}>
      <div className="container">
        <div className="contact__header">
          <span className="contact__eyebrow">{text.eyebrow}</span>

          <h2 className="contact__title">
            {text.title}
            <span>{text.titleAccent}</span>
          </h2>

          <p className="contact__description">{text.description}</p>
        </div>

        <div className="contact__actions">
          <a
            href={whatsappUrl}
            className="contact__button contact__button--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.whatsapp}
          </a>

          <a
            href="https://www.instagram.com/brand_cabinet.om/"
            className="contact__button contact__button--secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {text.instagram}
          </a>
        </div>

        <div className="contact__locations">
          <h3 className="contact__locations-title">{text.locations}</h3>

          <div className="contact__grid">
            {branches.map((branch) => (
              <article className="contact__card" key={branch.id}>
                <span className="contact__card-label">
                  {branch.id === "muscat" ? "01" : "02"}
                </span>

                <h4>{branch.name}</h4>

                <p>{branch.address}</p>

                <a href={branch.phoneLink} className="contact__phone">
                  {branch.phone}
                </a>

                <a
                  href={branch.mapUrl}
                  className="contact__directions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text.directions} ↗
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
