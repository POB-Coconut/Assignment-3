import React from 'react';
import styled from 'styled-components';
import { useLocalStorage } from 'hooks';
import mockData from 'utils/usersData';
import { STORAGE_KEYS } from 'utils/config';
import { COLOR_STYLES, FONT_SIZE_STYLES } from 'styles/styles';
import { SignIn, SignUp } from 'components';

const Login = () => {
  const [userData, setUserData] = useLocalStorage(STORAGE_KEYS.USERS, mockData);

  return (
    <Container>
      <Logo>Jaranda</Logo>
      <SignIn userData={userData} />
      <SignUp userData={userData} setUserData={setUserData} />
    </Container>
  );
};

export default Login;

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
`;

const Logo = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translate(15%, 50%);
  cursor: pointer;
  color: ${COLOR_STYLES.white};
  font-size: ${FONT_SIZE_STYLES.larger};
`;
