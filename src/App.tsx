import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./scences/Navbar";
import { useMediaQuery } from "./hooks";
import { DotGroup } from "./scences/DotGroup";
import { Landing } from "./scences/Landing";
import { LineGradient } from "./components";
import { MySkills } from "./scences/MySkills";
import { Projects } from "./scences/Projects";
import { Testimonials } from "./scences/Testimonials";
import { Contact } from "./scences/Contact";
import { Footer } from "./scences/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="app bg-deep-blue">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <div className="w-5/6 mx-auto md:h-full">
          {isAboveMediumScreens && (
            <DotGroup
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          )}
          <Landing setSelectedPage={setSelectedPage} />
        </div>

        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>

        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Projects />
        </div>

        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Testimonials />
        </div>

        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
