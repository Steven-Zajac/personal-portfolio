/*
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
*/

import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import Main from "./Main";
import GlobalStyles from "../GlobalStyles";

const App = () => {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Navigation />
      <Main />
    </BrowserRouter>
  );
};

export default App;
