import React from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";

const Feedback = () => {
    return (
        <StyledWrapper>
            <Container >
                <Title>
                    <h4>
                        Thanks for taking up this assignment.
                    </h4>
                    <p>Anything you would like to add over here?</p>
                    <br />

                    
                </Title>

                <FeedbackDiv>
                    <p>
                        Add your reply here
                        
                    </p>

                   <p  style={{ backgroundColor: "#A6FF96", display: "inline-block", marginTop: "30px",fontSize:"15px" }}>All 4 Task are done.
                        <br />
                        In Task 2, I have used grid and flex wrap to make the boxes responsive according to screen-size.
                        <br/>
                        In Task 3, instead of creating multiple Dropdown boxes, I have created a Dropdown Component named "DropBox.js" and have used it multiple times.
                        <br />
                        In Task 4, I have used the same Dropdown Component named "DropBox" and passed its state as props to "Answer4" to display images as the selected option, and I have set "forest" as the default image.
                        
                        <h4 style={{color:"black",backgroundColor:"unset"}}>Thanks for the Assignment I Loved Working on it and am Looking forward for the Next Step to work with Zluri <br/>
                        ~ Yash Ojha
                        </h4>
                        </p>
                </FeedbackDiv>

            </Container>
        </StyledWrapper>
    )
}

export default Feedback

const StyledWrapper = styled(Wrapper)`
background:#FFFFFF;
`

const Title = styled.div`
h4{
    font-size: 24px;
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
    font-size: 16px;
font-family: Lexend Regular;
font-style: normal;
font-weight: 400;
line-height: 28px;
}
`
const FeedbackDiv = styled.div`
p{
    font-size:24px;
    color:#000000;
    font-family: Lexend Regular;
    font-style: normal;
    font-weight: 400;
    
}
`