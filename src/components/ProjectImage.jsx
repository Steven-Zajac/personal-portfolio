import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const ProjectImage = () => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <ImageLink 
        onMouseOver={() => setIsHovered(true)} 
        onMouseOut={() => setIsHovered(false)} 
        to="https://dino-dash.vercel.app/" 
        target="_blank" 
        rel="noopener">
            <Image src={require("../images/dino_dash.png")} alt="dino-dash image" />
            {isHovered && <Text>A simple Alien Invaders-style game. The player must navigate the dinosaur away from the falling asteroids</Text>}
        </ImageLink>
    );

};

export default ProjectImage;


const ImageLink = styled(Link)`
    position: relative;
`;

const Image = styled.img`
    width: 11rem;
    height: 14rem;
    display: block;
    transition: all .2s ease-in-out; 
    border-radius: 7px;
`;

const Text = styled.div`
    position: absolute;
    top: -10;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    transition: opacity 0.3s;
    width: 11rem;
    height: 14rem;
    padding-left: 4px;
    padding-right: 4px;
    text-align: center;
    border-radius: 7px;
    &:active {
        transform: scale(0.95);
    }
`;