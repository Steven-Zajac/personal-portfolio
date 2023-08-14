import styled from "styled-components";

const Skills = () => {

    return (
        <Container>
            <Icons>
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original-wordmark.svg" />*/}
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />*/}

                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" />*/}
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" />*/}
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" />*/}
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" />*/}


                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />*/}
                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                <ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                {/*<ProgramIcons src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />*/}
            </Icons>
        </Container>
    );
};

export default Skills;

const Container = styled.div`
    margin: 4rem 4vh 0 4vh;
    width: 80%;
    padding: 1rem 0 7rem;
`;

/*const SectionTitle = styled.h1`
    padding: 1rem 0;
    font-size: 2.15rem;
`;*/

const Icons = styled.div`
    margin-top: 1vh;
    display: grid;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(2, 1vw);
    grid-gap: 5%;
    margin-left: 3rem;
`;

const ProgramIcons = styled.img`
    width: 5rem;
    height: 5rem;
`;