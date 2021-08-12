import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';

const Radios = ({ isChecked, handleChange }) => {
  return (
    <RadioContainer>
      <input
        type='checkbox'
        id='check'
        name='isTeacherChecked'
        onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.checked } })}
      />
      <RadioBox htmlFor='check' isChecked={!isChecked}>
        <AiOutlineCheck htmlFor='check' />
        <span>부모님</span>
      </RadioBox>
      <RadioBox htmlFor='check' isChecked={isChecked}>
        <AiOutlineCheck />
        <span>선생님</span>
      </RadioBox>
    </RadioContainer>
  );
};

export default Radios;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  margin-bottom: ${SIZE_STYLES.large};

  input[type='checkbox'] {
    display: none;
  }
`;

const RadioBox = styled.label`
  display: flex;
  align-items: center;
  font-size: ${FONT_SIZE_STYLES.small};
  cursor: pointer;

  svg {
    color: ${(props) => (props.isChecked ? COLOR_STYLES.primaryDarker : COLOR_STYLES.greyLighter)};
    font-size: ${FONT_SIZE_STYLES.large};
    margin-right: ${SIZE_STYLES.small};
  }
`;
