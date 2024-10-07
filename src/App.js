import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Fullmenu from "./components/Fullmenu";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WrongPage from "./components/WrongPage";
import React, { useState, createContext } from "react";

///style
import "./style/App.css";

export const ThemeContext = createContext(null);

function App() {
  const [present, setPresent] = useState("hide");
  const [showHide, setShowHide] = useState(true);
  const [lightDark, setLightDark] = useState(true);

  const presentBtn = () => {
    if (present === "hide") {
      setShowHide(!showHide);
      setPresent("show");
    } else {
      setPresent("hide");
      setShowHide(!showHide);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ presentBtn, present, showHide, lightDark, setLightDark }}
    >
      <div className="mainProject">
        <Header />

        {showHide ? (
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="*" element={<WrongPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        ) : (
          <Fullmenu />
        )}

        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
