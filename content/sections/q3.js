import React, { useState } from "react";
import styled from 'styled-components';
import { Container, Wrapper } from "./style";
import DropBox from "./DropBox";



  const Q3 = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };

    return (
      <StyledWrapper>
        <StyledContainer>
          <Title>
            <h3>
              <span>Task 3:</span> Build a dropdown
            </h3>
            <p>Your objective is to replicate the design and functionality of the given Figma design. Pay attention to details such as colors, fonts, and spacing to achieve a faithful representation of the design.</p>
          </Title>
          <QuestionsGrid>
            <AnswerDiv>
              <a href="https://www.figma.com/file/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=16-26&mode=design&t=LMCvfVQBL3S5dApY-0" target="_blank"><FigmaButton>Figma</FigmaButton></a>
              <a href="https://www.figma.com/proto/kPxYk2EWTMsBmx4lAc92ni/Web-Dev-Assignment?type=design&node-id=36-670&t=56Qr3ehXorgFodbH-1&scaling=min-zoom&page-id=36%3A647&starting-point-node-id=36%3A670" target="_blank"><PrototypeButton>Prototype</PrototypeButton></a>
            </AnswerDiv>
          </QuestionsGrid>
  
          <DropDown>
            <Category>
              <h4>Default state</h4>
              <DropBox onOptionSelect={handleOptionSelect}/>
            </Category>
            <Category>
              <h4>Hover state</h4>
              <DropBox onOptionSelect={handleOptionSelect}/>
            </Category>
            <Category>
              <h4>Active state</h4>
              <DropBox onOptionSelect={handleOptionSelect}/>
            </Category>
          </DropDown>

          
         

          
        </StyledContainer>
        
      </StyledWrapper>

    );
  }
  

export default Q3

const StyledWrapper = styled(Wrapper)`
`
const Title = styled.div`
h3{
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
const QuestionsGrid = styled.div`

`
const StyledContainer = styled(Container)`
margin-top:0;
`
const AnswerDiv = styled.div`
align-self:center;
display: flex;
flex-direction:row;
button{
    margin:0 10px;
}
`
const FigmaButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #2684FE;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`
const PrototypeButton = styled.button`
border-radius: 40px;
border: 1px solid #2684FE;
background: #FFFFFF;
min-width:150px;
height: 54px;
padding: 6px 14px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
color: #2684FE;
text-align: center;
font-size: 16px;
font-family: Lexend Bold;
font-style: normal;
font-weight: 700;
line-height: 160%;
cursor:pointer;
`


//CSS added by me[Yash Ojha]

const DropDown = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:5px;

`;




const Category = styled.div`
display:flex;
flex-direction:column;
font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


h4{
    color:grey;
    margin-bottom:10px;
    padding-left: 4px;
    font-weight:500;
}



`;