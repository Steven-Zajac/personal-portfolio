//import usePageTitle from "../hooks/usePageTitle";
import { SocialIcon } from "react-social-icons";
import styled from "styled-components";
import { useState } from "react";


const Contact = () => {

    //usePageTitle("Let's get in touch!");

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const mailTo = `mailto:zajac.steve@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    
    return (
        <Container>
            <SectionTitle>Contact me</SectionTitle>
            <Form  action={mailTo}  method="post" encType="text/plain" target="_blank" rel="noopener">
                <Input required autoComplete='name' type="text" placeholder="Full Name"></Input>
                <Input required autoComplete="email" type="email" placeholder="E-mail"></Input>
                <Input onChange={e => setSubject(e.target.value)} required type="text" placeholder="Subject"></Input>
                <MessageBox onChange={e => setMessage(e.target.value)} required type="text" placeholder="Message"></MessageBox>
                <br />
                <Submit type="submit" value="Send Message"></Submit>
            </Form>
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
    margin: 5rem 5vh 0 5vh;
    width: 80%;
    padding-bottom: 0vh;
`;

const SectionTitle = styled.h1`
    padding-bottom: .5vh;
    font-size: 2.15rem;
`;

const Form = styled.form`
    display: block;
    border-radius: 5px;
    margin: 3vh 2vw 0 2.5vh;
    padding-right: 5vw;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    padding-left: 5px;
    text-align: left;
    width: 30rem;
    height: 2rem;
    border-radius: 5px;
    font-size: large;
    border: 2px solid #000000da;
    font-family: 'Courier New', Courier, monospace;

`;

const MessageBox = styled.textarea`
    margin-bottom: 1rem;
    padding: 6px;
    width: 40rem;
    height: 12rem;
    border-radius: 7px;
    //vertical-align: ;
    text-align: justify;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    border: 2px solid #000000da;

`;

const Submit = styled.input`
    border-radius: 5px;
    margin-left: .5vw;
    background-color: pink;
    font-weight: bold;
    border: 2px solid #000000da;
    color: black;
    padding: .5rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: large;
    transition: all .2s ease-in-out; 
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        //box-shadow: 0 5px #666;
        transform: translate(4px);
    }
`;

const Icons = styled.div`
    padding: 3rem 0 2vh 0;
    margin-left: 2vw;
`;

const Social = styled(SocialIcon)`
    margin-right: 2.5vw;
    transition: all .2s ease-in-out; 
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        //box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`;
