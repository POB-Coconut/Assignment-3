import styled from 'styled-components';
import { FONT_SIZE_STYLES, SIZE_STYLES, COLOR_STYLES } from './styles';

export const InputWrapper = styled.label`
  display: inline-block;
  width: ${(props) => (props.double ? 'calc(50% - 3px)' : '100%')};
  text-align: start;
  margin-right: ${(props) => props.marginR && SIZE_STYLES.smaller};
  margin-bottom: ${SIZE_STYLES.medium};

  input[type='radio'] {
    width: 14px;
    line-height: 14px;
    margin-top: -1px;
    vertical-align: middle;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: ${SIZE_STYLES.medium} 0;
    padding-left: ${SIZE_STYLES.medium};
    border: ${SIZE_STYLES.micro} solid
      ${(props) => (props.error ? COLOR_STYLES.red : COLOR_STYLES.greyLighter)};
    border-radius: ${SIZE_STYLES.smallest};
    font-size: ${FONT_SIZE_STYLES.small};
    color: ${COLOR_STYLES.greyDarker};
    outline: none;

    &:focus {
      border-color: ${COLOR_STYLES.primary};
    }
  }

  small {
    font-size: ${FONT_SIZE_STYLES.smaller};
    cursor: pointer;
    color: ${(props) => (props.errors === '.' ? COLOR_STYLES.white : COLOR_STYLES.red)};
  }
`;
