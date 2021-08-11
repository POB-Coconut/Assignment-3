import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from 'hooks/useForm';
import { LOGIN_USER, STORAGE_DATA, ROUTE_PATHS } from 'utils/config';
import { loginValidate } from 'utils/regex';
import { getLocalStorage, setLocalStorage } from 'utils/storage';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';
import SignInForm from './SignInForm';

const SignIn = () => {
  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  const history = useHistory();
  function login() {
    const userList = getLocalStorage(STORAGE_DATA.users);
    const user = userList.find(
      (user) => user.id === values.id && user.password === values.password,
    );

    if (user === undefined) {
      alert('아이디와 비밀번호를 확인해주세요');
      return null;
    }

    if (user.userType === 'admin') {
      setLocalStorage(LOGIN_USER, { id: user.id, name: user.name, userType: user.userType });
      history.push(ROUTE_PATHS.ADMIN);
    } else if (user.userType === 'teacher' || user.userType === 'parent') {
      setLocalStorage(LOGIN_USER, { id: user.id, name: user.name, userType: user.userType });
      history.push(ROUTE_PATHS.USER);
    }
  }

  const { values, errors, handleChange, handleSubmit } = useForm(login, loginValidate);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (!isSignInFormOpen) return setIsSignInFormOpen(true);
  };

  return (
    <Container isSignInFormOpen={isSignInFormOpen}>
      <form onSubmit={handleSubmit} noValidate>
        <SignInForm
          isSignInFormOpen={isSignInFormOpen}
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        {!isSignInFormOpen ? (
          <ButtonLogin type='button' onClick={handleSubmitLogin}>
            <span>LOG IN</span>
          </ButtonLogin>
        ) : (
          <ButtonLogin type='submit'>
            <span>LOG IN</span>
          </ButtonLogin>
        )}
      </form>
    </Container>
  );
};

export default SignIn;

const Container = styled.section`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLOR_STYLES.white};
  background: ${COLOR_STYLES.primaryGradient};
  clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.isSignInFormOpen && '50%'};
  }
`;

const ButtonLogin = styled.button`
  background-color: inherit;
  border: ${SIZE_STYLES.micro} solid ${COLOR_STYLES.white};
  border-radius: ${SIZE_STYLES.smallest};
  padding: ${SIZE_STYLES.medium} ${SIZE_STYLES.largest};
  margin-top: ${SIZE_STYLES.larger};
  cursor: pointer;
  transition: all 0.3s;

  span {
    color: ${COLOR_STYLES.white};
    font-size: ${FONT_SIZE_STYLES.medium};
    font-weight: 500;
    transition: all 0.3s;
  }

  &:hover {
    background-color: ${COLOR_STYLES.white};
    span {
      color: ${COLOR_STYLES.primaryDarker};
    }
  }
`;
