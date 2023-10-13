import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const HoverDropdownInput = ({ onOptionSelect }) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['mountain', 'forest', 'ocean', 'desert'];
  
    const handleDropdownToggle = () => {
      setDropdownVisible(!isDropdownVisible);
    };
  
    const handleOptionSelectInternal = (option) => {
      setSelectedOption(option);
      onOptionSelect(option); 
      setDropdownVisible(false);
    };
  
    const placeholder = 'Dropdown';
  
    return (
      <DropdownInput>
        <div
          className="dropdown-box"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <div className="dropdown-content">
            <div className='text-cnt'>{selectedOption || placeholder}</div>
            <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
          </div>
          {isDropdownVisible && (
            <div className="dropdown-options">
              {options.map((option, index) => (
                <div className="opt" key={index} onClick={() => handleOptionSelectInternal(option)}>
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </DropdownInput>
    );
  };
  
  export default HoverDropdownInput;


  const DropdownInput = styled.div`
  display: inline-block;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


  .dropdown-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .dropdown-box {
    padding: 8px;
    border: 1px solid #1ea4d4;
    border-radius: 4px;
    width: 200px;
    cursor: pointer;
    position: relative;
    background-color: white;
    color:black;
    font-weight: 400px;
    
  }

  /* .dropdown-icon {
    padding-left: 85px; 
  } */
  
  .dropdown-box:hover {
    background-color: #f0f0f0;
  }
  
  .dropdown-options {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 150px;
    overflow-y: auto;
    color:black;
    font-weight: 600;
  }
  
  .dropdown-options div {
    padding: 8px;
    cursor: pointer;
  }
  
  .dropdown-options div:hover {
    background-color:rgba(225, 232, 248, 1);
    
    border-radius: 5px;
  }
  
 .opt:hover{
    background-color:  rgba(225, 232, 248, 1);
    ;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;  
    transition: 0.5s;
 }
  
  
  `;