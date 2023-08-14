//import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import styled from "styled-components";

const Navigation = () => {

    return (
        <Nav>
            <Left>
                <PrettyLink smooth to='#'>Home</PrettyLink>
            </Left>
            <Right>
                <PrettyLink smooth to='#about'>About Me</PrettyLink>
                <PrettyLink smooth to='#projects'>My Projects</PrettyLink>
                <PrettyLink smooth to='#contact'>Contact</PrettyLink>
            </Right>
        </Nav>
    );
};

export default Navigation;

const Nav = styled.nav`
    background-color: #000000da;
    padding: 2.3vh;
    font-weight: bolder;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.span`
    font-size: 27px;
`;

const Right = styled.span`
    font-size: 23px;
`;

const PrettyLink = styled(HashLink)`
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