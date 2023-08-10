//import usePageTitle from "../hooks/usePageTitle";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";


const Contact = () => {

    //usePageTitle("Let's get in touch!");

    return (
        <Container>
            <SectionTitle>Contact me</SectionTitle>
            <div>This is where people will see my contact information</div>
            <Icons>
                <Social url="https://www.linkedin.com/in/steven-zajac/" target="_blank"/>
                <Social url="https://github.com/Steven-Zajac" target="_blank"/>
                <Social url="mailto:zajac.steve@icloud.com" target="_blank" />
            </Icons>
        </Container>
    );
};

export default Contact;

const Container = styled.div`
    //margin: 5vh;
    padding: 5vh;
    
`;

const SectionTitle = styled.h1`
    padding-bottom: 2vh;
    font-size: 2.15rem;
`;

const Icons = styled.div`
    padding: 5vh 0 2vh 0;

`;

const Social = styled(SocialIcon)`
    margin-right: 2.5vw;
`;