import Homepage from "./Homepage";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About"

const Main = () => {
    return (
        <>
            <div id="homepage"><Homepage /></div>
            <div id="about"><About /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </>
    );
};

export default Main;

/*
import { Route, Routes } from "react-router-dom";

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#projects" element={<Projects />} />
            <Route path="/#contact" element={<Contact />} />
        </Routes>
*/