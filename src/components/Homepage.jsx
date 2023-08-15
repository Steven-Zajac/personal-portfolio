//import usePageTitle from "../hooks/usePageTitle";

import styled from "styled-components";

const Homepage = () => {

    //usePageTitle("Homepage");

    return (
        <Container>
            <Img src={require("../images/me_img.png")} alt="face"/>
            <Text>
                <SectionTitle>Hello 👋🏻</SectionTitle>
                <br />
                <div>
                    <p>Welcome to my page!</p>
                    <br />
                    <p>I'm Steven and I am a Montreal-based Data Scientist with a passion for coding!</p>
                </div>
            </Text>
        </Container>
    )

};

export default Homepage;

const Container = styled.div`
    margin: 0 5vw 4.5vh 3vh;
    padding: 7vh 0 25px 2vw;
`;

const Img = styled.img`
    max-height: 30vh;
    max-width: 25vw;
    border-radius: 50%;
    float: left;
    margin-right: 7%;
    margin-bottom: .75rem;
`;

const Text = styled.div`
    padding-top: 3%;
    margin-left: 5%;
    font-size: larger;
    font-weight: 600;
`;

const SectionTitle = styled.h1`
    font-size: 3.5rem;
`;