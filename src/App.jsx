import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import en from "./locales/en";
import ar from "./locales/ar";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  const [language, setLanguage] = useState("en");

  const translations = language === "ar" ? ar : en;

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} lang={language}>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        content={translations}
      />

      <main>
        <Hero content={translations.hero} />
        <Projects language={language} />
        <About language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
