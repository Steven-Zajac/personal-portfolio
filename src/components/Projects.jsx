//import usePageTitle from "../hooks/usePageTitle";
import styled from "styled-components";


const Projects = () => {

    //usePageTitle('My Projects');

    return (
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <div>                
            </div>
            <div>Could be cool to add the nyan cat project and try to figure out something else</div>
        </Container>
    )
};

export default Projects;

const Container = styled.div`
    margin: 3vh 5vh;
`;

const SectionTitle = styled.h1`
    padding: 2rem 0;
    font-size: 2.15rem;
`;