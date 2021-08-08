import React, { useCallback, useState } from 'react';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';
import { SEARCH_DROPDOWN_ITEMS } from 'utils/config';
import { COLOR_STYLES } from 'styles/styles';
import styled from 'styled-components';

const SearchDropdown = ({ dropdownName, setDropdownItem, setDropdownName, setInputValue }) => {
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const onDropdownToggle = useCallback(() => {
    setDropdownToggle((prev) => !prev);
  }, []);

  const onSelectDropdownItem = useCallback(
    (data) => {
      const { value, title } = data;
      setDropdownItem(value);
      setDropdownName(title);
      setInputValue('');
    },
    [setDropdownItem, setDropdownName, setInputValue],
  );

  return (
    <DropdownContainer onClick={onDropdownToggle} onMouseLeave={() => setDropdownToggle(false)}>
      <DropdownBody>
        <BsArrowDownShort />
        {dropdownName}
        {dropdownToggle ? <BsArrowUpShort /> : <BsArrowDownShort />}
      </DropdownBody>
      <DropdownMenu isActive={dropdownToggle}>
        {SEARCH_DROPDOWN_ITEMS.map((data) => (
          <DropdownItem key={data.id} onClick={() => onSelectDropdownItem(data)}>
            <p>{data.title}</p>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default SearchDropdown;

const DropdownContainer = styled.div`
  background: ${COLOR_STYLES.primaryDarker};
  color: white;
  padding: 6px 0;
  border-radius: 6px 0 0 6px;
`;

const DropdownBody = styled.p`
  width: 150px;
  height: 36px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & svg {
    font-size: 1.8rem;
  }
  & svg:nth-child(1) {
    color: ${COLOR_STYLES.primaryDarker};
  }
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  display: ${(props) => (props.isActive ? `block` : `none`)};
  position: absolute;
  background-color: white;
  width: 150px;
  background: ${COLOR_STYLES.primaryDarker};
  color: white;
  border-radius: 0 0 6px 6px;
`;

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  border-top: 1px solid white;
  &:hover {
    border-left: 1px solid white;
    border-right: 1px solid white;
  }
`;
