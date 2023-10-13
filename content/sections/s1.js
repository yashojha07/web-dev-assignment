import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const S1 = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Solution Here
                    </h4>
                    <p>Answer below this.</p>
                    <GridContainer>
                        <Box style={{ background: "#000080" }}><h3>BOX1</h3></Box>
                        <Box style={{ background: "green" }}> <h3>BOX2</h3> </Box>
                        <Box style={{ background: "red" }}> <h3>BOX3</h3></Box>
                        <Box style={{ background: "black" }}><h3>BOX4</h3> </Box>
                    </GridContainer>
                    
                </Title>
            </Container>
        </StyledWrapper>
    )
}

export default S1

const StyledWrapper = styled(Wrapper)`
background:#F6F7F9;
`

const Title = styled.div`
h4{
    font-size: 32px;
font-family: Lexend Medium;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: -0.4px;
    span{
        background:#FAE090;
    }
}
p{
    font-size: 18px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const QuestionsDiv = styled.div`
ul{
    display:flex;
    flex-direction:column;
}
li{
    font-size:20px;
}
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    // background-color:pink;
    justify-content: space-between;
    width: 60%;
    height: auto;
`;

const Box = styled.div`
    border: 2px solid black;
    border-radius: 25px;
    color: white;
    margin-bottom: 10%;
    height: 40%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    padding:30%;
`;