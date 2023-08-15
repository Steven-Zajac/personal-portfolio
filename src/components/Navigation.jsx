//import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";

const Navigation = () => {

    return (
        <Nav>
            <PrettyLink smooth to='#'>Home</PrettyLink>
            <PrettyLink smooth to='#about'>About Me</PrettyLink>
            <PrettyLink smooth to='#skills'>My Skills</PrettyLink>
            <PrettyLink smooth to='#projects'>My Projects</PrettyLink>
            <PrettyLink smooth to='#contact'>Contact</PrettyLink>
        </Nav>
    );
};

export default Navigation;

/*const Nav = styled.nav`
    background-color: #000000da;
    padding: 2.3vh;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;*/

const Nav = styled.nav`
    height: 100%;
    width: 8rem;
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    background-color: #000000;
    font-weight: bold;
    font-size: 18px;
    padding-top: 1rem;
`;

/*const PrettyLink = styled(HashLink)`
    text-decoration: none;
    color: lightgreen;
    padding: 0 1.2vw;

    &:hover{
        color: pink;
        border: 1px solid pink;
    }
    &:focus{
        color:#C8A2C8;
        border: 1px solid #C8A2C8;
    }
`;*/

const PrettyLink = styled(HashLink)`
    text-decoration: none;
    display: block;
    color: lightgreen;
    padding: 5px 1.2vw;
    margin: 2px 10px 2px 0;
    text-align: left;

    &:hover{
        color: pink;
        border: 1px solid pink;
    }
    &:focus{
        color:#C8A2C8;
        border: 1px solid #C8A2C8;
    }
`;



/*<Nav>
<List>
    <li><PrettyLink smooth to='' style={({ isActive }) => ({color: isActive ? 'red' : null})}>
        Home
    </PrettyLink></li>
    <li><PrettyLink smooth to='about' style={({ isActive }) => ({color: isActive ? 'red' : null})}>
        About Me
    </PrettyLink></li>
    <li><PrettyLink smooth to='projects' style={({ isActive }) => ({color: isActive ? 'red' : null})}>
        My Projects
    </PrettyLink></li>
    <li><PrettyLink smooth to='contact' style={({ isActive }) => ({color: isActive ? 'red' : null})}>
        Contact
    </PrettyLink></li>
</List>
</Nav>*/ 

/*
<Nav>
            <List>
                <ListItem><PrettyLink smooth to='#'>Home</PrettyLink></ListItem>
                <ListItem><PrettyLink smooth to='#about'>About Me</PrettyLink></ListItem>
                <ListItem><PrettyLink smooth to='#projects'>My Projects</PrettyLink></ListItem>
                <ListItem><PrettyLink smooth to='#contact'>Contact</PrettyLink></ListItem>
            </List>
        </Nav>
*/