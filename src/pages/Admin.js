import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import Navbar from 'components/Navbar';
import Chart from 'components/Chart';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import SignUpModal from 'components/SignUpModal';
import { getLocalStorage } from 'utils/storage';
import { LOGIN_USER, STORAGE_DATA } from '../utils/config';
import { logout } from '../utils/auth';

const Admin = () => {
  const history = useHistory();
  const [loginUser, _] = useState(getLocalStorage(LOGIN_USER));
  const [userData, setUserData] = useState([]);
  const [copiedData, setCopiedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const onLogout = () => (logout(), history.push('/'));
  const onCreateAccount = () => {};

  useEffect(() => {
    setUserData(getLocalStorage(STORAGE_DATA.users).reverse());
    setCopiedData(getLocalStorage(STORAGE_DATA.users).reverse());
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrap>
        <Navbar name={loginUser.name} />
        <AdminContainer>
          <AdminSection>
            <TableBox>
              <SearchBox
                userData={userData}
                copiedData={copiedData}
                setUserData={setUserData}
                setCurrentPage={setCurrentPage}
              />
              <UserTable
                userData={userData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </TableBox>
            <ChartAside>
              <S.Sidebar>
                <S.AccountBox>
                  <SignUpModal />
                  <AccountButton onClick={onLogout} content='로그아웃' />
                </S.AccountBox>
                <Chart userData={userData} />
              </S.Sidebar>
            </ChartAside>
          </AdminSection>
        </AdminContainer>
      </S.Wrap>
    </>
  );
};

const TableBox = styled(S.Content)`
  width: 60%;
  min-width: 600px;
`;

const ChartAside = styled(S.Aside)`
  width: 40%;
  min-width: 300px;
`;

const AdminContainer = styled(S.Container)`
  @media only screen and (max-width: 1287px) {
    margin: 0 calc((${window.innerWidth}px - 600px) / 2) !important;
  }
`;

const AdminSection = styled(S.Section)`
  @media only screen and (max-width: 973px) {
    display: block;
    & ${TableBox} {
      width: 100%;
      margin: 0 auto;
    }
    & ${ChartAside} {
      width: 60%;
    }
  }
`;
export default Admin;
