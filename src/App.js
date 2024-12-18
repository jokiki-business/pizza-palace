import React, { useEffect } from "react";
import "./styles.css";
import ScrollReveal from "scrollreveal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    ScrollReveal().reveal(".reveal", {
      duration: 1000,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="reveal">
        <Home />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Menu />
      </div>
      <div className="reveal">
        <Services />
      </div>
      <div className="reveal">
        <Connect />
      </div>
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
