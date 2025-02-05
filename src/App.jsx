import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SKills from "./components/SKills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <SKills />
      <Portfolio />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
