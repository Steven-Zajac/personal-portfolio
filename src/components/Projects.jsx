//import usePageTitle from "../hooks/usePageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Projects = () => {

    //usePageTitle('My Projects');

    return (
        <Container>
            <SectionTitle>Projects</SectionTitle>
            <ItemContainer>
                <PTitle>Dino Dash</PTitle>
                <GameLink to="https://dino-dash.vercel.app/">
                    <GameImg src={require("../images/dino_dash.png")} alt="dino-dash image"/>
                </GameLink>
                <GameDesc>
                    A simple Alien Invaders-style game. The player must navigate the dinosaur away from the falling asteroids
                </GameDesc>
            </ItemContainer>
        </Container>
    )
};

export default Projects;

const Container = styled.div`
    margin: 3vh 6vh 8rem 5vh;
    min-height: fit-content;
`;

const SectionTitle = styled.h1`
    padding-bottom: .5vh;
    //padding: 1rem 0 .75em 0;
    font-size: 2.15rem;
`;

const ItemContainer = styled.div`
    margin-left: 3rem;
    padding-top: 1rem;
`;

const PTitle = styled.div`
    margin-left: 2rem;
    padding-bottom: 1rem;
    text-decoration: underline;
    font-size: x-large;
    font-weight: bolder;
`;

const GameLink = styled(Link)`
    transition: all .2s ease-in-out; 
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: translate(4px);
    }
`;

const GameDesc = styled.div`
    margin-left: 11rem;
    width: 20rem;
    margin-top: 5rem;
    font-size: large;
    font-weight: bold;
`;

const GameImg = styled.img`
    width: 12rem;
    height: 18rem;
    //min-width: 15rem;
    //min-height: 20rem;
    margin-right: 3rem;
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

