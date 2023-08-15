//import usePageTitle from "../hooks/usePageTitle";
import styled from "styled-components";
//import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage";


const Projects = () => {

    //usePageTitle('My Projects');

    return (
        <>
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <ItemContainer>
                <PTitle>Dino Dash</PTitle>
                <ProjectImage />
            </ItemContainer>
        </Container>
        </>
    );
};

export default Projects;

const Container = styled.div`
    margin: 3vh 6vh 7rem 5vh;
    min-height: fit-content;
`;

const SectionTitle = styled.h1`
    padding-bottom: 1.5vh;
    //padding: 1rem 0 .75em 0;
    font-size: 2.15rem;
    text-decoration: underline;

`;

const ItemContainer = styled.div`
    margin-left: 2rem;
    padding-top: 1rem;
    width: fit-content;
`;

const PTitle = styled.h2`
    width: 80%;
    //margin-left: 0rem;
    padding-bottom: 1rem;
    text-decoration: underline;
    //font-size: x-large;
    font-weight: bolder;
`;

/*const GameLink = styled(Link)`
    transition: all .2s ease-in-out; 
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: translate(4px);
    }
`;

const GameDesc = styled.div`
    margin-left: 7rem;
    width: 20rem;
    margin-top: 2rem;
    font-size: large;
    font-weight: bold;
`;

const GameImg = styled.img`
    width: 10rem;
    height: 13rem;
    margin-right: 2rem;
    margin-left: 2rem;
    float: left;
    transition: all .2s ease-in-out; 
    border-radius: 5px;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: translate(4px);
    }
`;

const Break = styled.hr`
    width: 15%;
    border: 1px solid;
    background-color: black;
`;*/