import { useState } from "react";

function Navbar({ language, setLanguage, content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isArabic = language === "ar";

  function handleLanguageChange() {
    setLanguage(isArabic ? "en" : "ar");
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar__container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Brand Cabinet Oman"
            className="navbar__logo-image"
          />
        </a>

        <button
          type="button"
          className="navbar__menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`navbar__menu ${menuOpen ? "is-open" : ""}`}>
          <nav
            id="main-navigation"
            className="navbar__links"
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>
              {content.nav.home}
            </a>
            <a href="#projects" onClick={closeMenu}>
              {content.nav.projects}
            </a>
            <a href="#about" onClick={closeMenu}>
              {content.nav.about}
            </a>
            <a href="#contact" onClick={closeMenu}>
              {content.nav.contact}
            </a>
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__language"
              onClick={handleLanguageChange}
            >
              {isArabic ? "EN" : "عربي"}
            </button>

            <a href="#contact" className="navbar__cta" onClick={closeMenu}>
              {content.nav.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
