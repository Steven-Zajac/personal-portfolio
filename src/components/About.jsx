//import usePageTitle from "../hooks/usePageTitle";
import styled from "styled-components";

const About = () => {
    
    //usePageTitle("About Me");

    return (
        <Container>
            <SectionTitle>About Me</SectionTitle>
            <SectionText>
                My academic journey spans sociology, data science, and machine learning. Positioning me uniquely at the intersection of human insights and technology.
                Currently, I am immersed in web development and learning design, working towards adding to more diplomas to my portfolio.<br /><br /> My deep-rooted enthusiasm
                for programming and machine learning is complemented by a steadfast commitment to lifelong learning. I'm continually captivated by the advancements in the 
                tech realm and am motivated to keep myself updated. My technical toolkit includes: Python, Javascript, HTML, and CSS.<br /><br /> With mindset centered around 
                growth, I'm keen on blending the subtleties of human behaviour with the capabilities of code. My goal? Crafting solutions that resonate on a human level while 
                being technologically robust. I'm excited to collaborate and innovate with like-minded folks.<br /><br /> Let's connect!
            </SectionText>
        </Container>
    )
};

export default About;

const Container = styled.div`
    padding-top: 1.25rem;
    margin: 3vh 5vh;
    width: 80%;
`;

const SectionTitle = styled.h1`
    padding: 1rem 0 .75em 0;
    font-size: 2.15rem;
    text-decoration: underline;
`;

const SectionText = styled.p`
    //width: fit-content;
    font-size: large;
    font-weight: 500;
    padding-left: 5%;
`;
