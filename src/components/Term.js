import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';

const Term = ({ isChecked, handleChange }) => {
  return (
    <TermWrapper isChecked={isChecked} htmlFor='term'>
      <input
        type='checkbox'
        id='term'
        name='term'
        onChange={(e) => handleChange({ target: { name: e.target.name, value: e.target.checked } })}
      />
      <AiOutlineCheck />
      <a target='_blank' rel='noreferrer'>
        이용약관
      </a>
      <span>을 모두 읽었으며 이에 동의합니다.</span>
    </TermWrapper>
  );
};

export default Term;

const TermWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${SIZE_STYLES.larger};
  font-size: ${FONT_SIZE_STYLES.small};
  cursor: pointer;

  input[type='checkbox'] {
    display: none;
  }

  a {
    color: ${COLOR_STYLES.primary};
  }

  svg {
    color: ${(props) => (props.isChecked ? COLOR_STYLES.primaryDarker : COLOR_STYLES.greyLighter)};
    font-size: ${FONT_SIZE_STYLES.large};
    margin-right: ${SIZE_STYLES.small};
  }
`;
