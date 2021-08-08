import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';

const Term = ({ isChecked, handleClick }) => {
  return (
    <TermWrapper isChecked={isChecked} onClick={handleClick}>
      <input type='checkbox' id='term' />
      <AiOutlineCheck />
      <a target='_blank' rel='noreferrer'>
        이용약관
      </a>
      <label htmlFor='term'>을 모두 읽었으며 이에 동의합니다.</label>
    </TermWrapper>
  );
};

export default Term;

const TermWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SIZE_STYLES.larger};
  font-size: ${FONT_SIZE_STYLES.small};

  input[type='checkbox'] {
    display: none;
  }

  label {
    cursor: pointer;
  }

  a {
    color: ${COLOR_STYLES.primary};
  }

  svg {
    color: ${(props) => (props.isChecked ? COLOR_STYLES.primaryDarker : COLOR_STYLES.greyLighter)};
    font-size: ${FONT_SIZE_STYLES.large};
    margin-right: ${SIZE_STYLES.small};
    cursor: pointer;
  }
`;
