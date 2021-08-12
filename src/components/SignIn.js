import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, useLocalStorage } from 'hooks';
import { LOGIN_USER, ROUTE_PATHS } from 'utils/config';
import { loginValidate } from 'utils/regex';
import { COLOR_STYLES, FONT_SIZE_STYLES, SIZE_STYLES } from 'styles/styles';
import styled from 'styled-components';
import SignInForm from './SignInForm';

const SignIn = ({ userData }) => {
  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  const [_, setUser] = useLocalStorage(LOGIN_USER);
  const history = useHistory();

  const login = () => {
    const match = findUser(userData, values);

    if (!match) return alert('아이디와 비밀번호를 확인해주세요');

    (async () => {
      await setUser({ id: match.id, name: match.name, userType: match.userType });
      history.push(match.userType === 'admin' ? ROUTE_PATHS.ADMIN : ROUTE_PATHS.USER);
    })();
  };

  const { values, errors, handleChange, handleSubmit } = useForm(login, loginValidate);

  return (
    <Container isSignInFormOpen={isSignInFormOpen}>
      <form onSubmit={handleSubmit} noValidate>
        <SignInForm
          isSignInFormOpen={isSignInFormOpen}
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        {/* UI Error 문제 때문에 Ternary operator 사용 안함 */}
        {!isSignInFormOpen && (
          <ButtonLogin type='button' onClick={() => setIsSignInFormOpen(true)}>
            <span>LOG IN</span>
          </ButtonLogin>
        )}
        {isSignInFormOpen && (
          <ButtonLogin type='submit'>
            <span>LOG IN</span>
          </ButtonLogin>
        )}
      </form>
    </Container>
  );
};

export default SignIn;

const findUser = (userData, values) =>
  userData.find((user) => user.id === values.id && user.password === values.password);

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
