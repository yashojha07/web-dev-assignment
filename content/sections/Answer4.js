import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import HoverDropdownInput from './DropBox'; 
import forest from "../images/forest.png";
import mountain from "../images/mountains.png";
import ocean from "../images/ocean.png";
import desert from "../images/desert.png";
import styled from 'styled-components';

export const Answer4 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const getImageForOption = (option) => {
    switch (option) {
      case 'forest':
        return forest;
      case 'mountain':
        return mountain;
      case 'ocean':
        return ocean;
      case 'desert':
        return desert;
      default:
        return null; 
    }
  };

  return (
    <Ans4>
      <DropBox>
        <HoverDropdownInput onOptionSelect={handleOptionSelect} />
      </DropBox>
      <Image>
       {/* i have added forest as default image */}
       
       {selectedOption==null ?  <img src={forest}  />:  <img src={`${getImageForOption(selectedOption)}`}  />}
      </Image>
    </Ans4>
  );
};

export default Answer4;

const Ans4 = styled.div`
  display: flex;
  margin:5%;
`;

const DropBox = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

img{
    width:70%;
    justify-content:center;
}

`;