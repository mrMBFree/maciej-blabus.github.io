import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Intro from "./components/Intro";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div id="wrapper">
      <Header />
      <div id="main">
        <Intro />
        <Work />
        <About />
        <Contact />
      </div>
      <Footer />
      <div id="bg"></div>
    </div>
  );
}

export default App;
