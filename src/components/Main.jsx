import Homepage from "./Homepage";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";

import styled from "styled-components";

const Main = () => {
    return (
        <Div>
            <div id="homepage"><Homepage /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </Div>
    );
};

export default Main;

const Div = styled.div`
    margin-left: 10vw;
`;


/*
import { Route, Routes } from "react-router-dom";

        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/#about" element={<About />} />
            <Route path="/#projects" element={<Projects />} />
            <Route path="/#contact" element={<Contact />} />
        </Routes>
*/