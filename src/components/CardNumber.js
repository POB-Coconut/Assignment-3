import React, { useState, useRef } from 'react';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';

function CardNumber({ cardNumber, handleChange }) {
  const cardNumberRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
    handleChange({ target: { name: 'cardNumber', value: '' } });
  };

  const closeModal = (e) => {
    if (e.currentTarget.id === 'save-btn') {
      const a = [...cardNumberRef.current.childNodes].map((node) => node.value);
      cardNumberRef.current.childNodes.value = '';
      handleChange({ target: { name: 'cardNumber', value: a.join('-') } });
    }
    setModalVisible(false);
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(e);
    }
  };

  const handleKeyUp = (e) => {
    const num = e.target;
    const max = num.getAttribute('maxlength');

    if (num.value.length >= max) {
      num.nextElementSibling.focus();
    }
  };

  return (
    <>
      <input
        type='password'
        onClick={openModal}
        value={cardNumber}
        placeholder='카드번호 16자리를 입력해주세요'
        readOnly
      />
      <ModalOverlay visible={modalVisible} />
      <ModalWrapper onClick={onMaskClick} tabIndex='-1' visible={modalVisible}>
        <ModalInner tabIndex='0' className='modal-inner'>
          <ModalInputWrapper ref={cardNumberRef}>
            <input className='card-number' type='text' onKeyUp={handleKeyUp} maxLength='4' />
            <input className='card-number' type='password' onKeyUp={handleKeyUp} maxLength='4' />
            <input className='card-number' type='password' onKeyUp={handleKeyUp} maxLength='4' />
            <input className='card-number' type='text' maxLength='4' />
          </ModalInputWrapper>
          <ModalSubmit type='button' id='save-btn' onClick={closeModal}>
            <span>저장</span>
          </ModalSubmit>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  min-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;
const ModalInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input.card-number {
    width: 4rem;
    margin: 0 10px;
    text-align: center;
    padding-left: 0;
  }
`;
const ModalSubmit = styled.button`
  padding: ${SIZE_STYLES.medium};
  border-radius: ${SIZE_STYLES.smallest};
  background-color: ${COLOR_STYLES.primary};
  cursor: pointer;
  white-space: nowrap;
  span {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.medium};
    font-weight: 500;
  }
`;

export default CardNumber;
