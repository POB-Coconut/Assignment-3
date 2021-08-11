import React, { useState } from 'react';
import styled from 'styled-components';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import { InputWrapper } from 'styles/InputWrapper';
import { STORAGE_KEYS } from 'utils/config';
import { filterObject } from 'utils/filterObject';
import mockData from 'utils/usersData';
import { signupValidate } from 'utils/regex';
import { useForm, useInput, useLocalStorage } from 'hooks';
import CardNumber from 'components/CardNumber';
import Address from 'components/Address';
import Term from 'components/Term';
import UserTypeSelect from 'components/UserTypeSelect';

const SignUp = () => {
  const [userData, setUserData] = useLocalStorage(STORAGE_KEYS.users, mockData);
  const [isTermChecked, setIsTermChecked] = useState(false);
  const [isParentChecked, setIsParentChecked] = useState(true);
  const address = useInput('');
  const cardNumber = useInput('');

  const signUp = (values) => {
    if (!address.value || !cardNumber.value) {
      address.checkIsError();
      cardNumber.checkIsError();
      return;
    }

    if (!isTermChecked) return alert('이용약관에 동의 후 가입 가능합니다.');

    const userType = isParentChecked ? 'parent' : 'teacher';
    const newValues = filterObject(values, 'checkingPassword');
    const newUser = {
      ...newValues,
      address: address.value,
      cardNumber: cardNumber.value,
      userType,
    };
    const updatedUserData = [...userData, newUser];

    setUserData(updatedUserData);
    setIsTermChecked(false);
    address.clearValue();
    cardNumber.clearValue();
    alert('회원가입이 성공적으로 되었습니다. 더 진행하시려면 로그인을 해주십시오.');

    return true;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(signUp, signupValidate);

  const handleClickTerm = (e) => {
    if (e.target.id === 'term') return;

    setIsTermChecked((isChecked) => !isChecked);
  };

  const handleClickType = (e) => {
    if (e.target.closest('#parent')) {
      setIsParentChecked(true);
    }
    if (e.target.closest('#teacher')) {
      setIsParentChecked(false);
    }
  };

  return (
    <Container>
      <h3>자란다 회원가입</h3>
      <p>10초만에 가입하고 아이와 함께 할 선생님 정보를 받아보세요</p>
      <form onSubmit={handleSubmit} noValidate>
        <UserTypeSelect handleClick={handleClickType} isChecked={isParentChecked} />
        <InputWrapper error={errors.id}>
          <input
            autoComplete='off'
            type='text'
            id='id'
            name='id'
            placeholder='아이디를 입력해주세요'
            onChange={handleChange}
            value={values.id || ''}
            required
          />
          {errors.id && <label htmlFor='id'>{errors.id}</label>}
        </InputWrapper>

        <InputDouble>
          <InputWrapper double='true' marginR='true' error={errors.password}>
            <input
              autoComplete='off'
              type='password'
              id='password'
              name='password'
              placeholder='비밀번호를 입력해주세요'
              onChange={handleChange}
              value={values.password || ''}
              required
            />
            {errors.password && <label htmlFor='password'>{errors.password}</label>}
          </InputWrapper>
          <InputWrapper double='true' error={errors.checkingPassword}>
            <input
              autoComplete='off'
              type='password'
              id='checkingPassword'
              name='checkingPassword'
              placeholder='비밀번호 확인'
              onChange={handleChange}
              value={values.checkingPassword || ''}
              required
            />
            {errors.checkingPassword && (
              <label htmlFor='checkingPassword'>{errors.checkingPassword}</label>
            )}
          </InputWrapper>
        </InputDouble>

        <InputDouble>
          <InputWrapper double='true' marginR='true' error={errors.name}>
            <input
              autoComplete='off'
              type='text'
              id='name'
              name='name'
              placeholder='이름을 입력해주세요'
              onChange={handleChange}
              value={values.name || ''}
              required
            />
            {errors.name && <label htmlFor='name'>{errors.name}</label>}
          </InputWrapper>
          <InputWrapper double='true' error={errors.age}>
            <input
              autoComplete='off'
              type='text'
              id='age'
              name='age'
              placeholder='나이를 입력해주세요'
              onChange={handleChange}
              value={values.age || ''}
              required
            />
            {errors.age && <label htmlFor='name'>{errors.age}</label>}
          </InputWrapper>
        </InputDouble>

        <InputWrapper error={address.isError}>
          <Address id='address' {...address} />
        </InputWrapper>
        <InputWrapper error={cardNumber.isError}>
          <CardNumber id='cardNumber' {...cardNumber} />
        </InputWrapper>

        <Term isChecked={isTermChecked} handleClick={handleClickTerm} />

        <ButtonSubmit type='submit'>
          <span>가입하기</span>
        </ButtonSubmit>
      </form>
    </Container>
  );
};

export default SignUp;

const Container = styled.section`
  flex-basis: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${COLOR_STYLES.greyDarker};

  h3 {
    font-size: ${FONT_SIZE_STYLES.large};
    font-weight: 600;
    margin-bottom: ${SIZE_STYLES.large};
  }

  p {
    font-size: ${FONT_SIZE_STYLES.medium};
    margin-bottom: ${SIZE_STYLES.large};
  }

  form {
    width: 60%;
  }
`;

const InputDouble = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ButtonSubmit = styled.button`
  width: 100%;
  background: ${COLOR_STYLES.primary};
  padding: ${SIZE_STYLES.medium};
  border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.primary};
  border-radius: ${SIZE_STYLES.smallest};
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.medium};
    font-weight: 500;
  }

  &:hover {
    background-color: ${COLOR_STYLES.white};
    border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.primary};
    span {
      color: ${COLOR_STYLES.primaryDarker};
    }
  }
`;
