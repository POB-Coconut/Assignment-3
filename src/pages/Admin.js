import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { layouts as S } from 'styles/layouts';
import GlobalStyles from 'styles/GlobalStyles';
import { LOGIN_USER, STORAGE_KEYS, ROUTE_PATHS } from 'utils/config';
import { useLocalStorage } from 'hooks';
import Navbar from 'components/Navbar';
import Chart from 'components/Chart';
import UserTable from 'components/UserTable';
import AccountButton from 'components/AccountButton';
import SearchBox from 'components/SearchBox';
import SignUpModal from 'components/SignUpModal';
import { logout } from 'utils/auth';

const Admin = () => {
  const history = useHistory();
  const [loginUser] = useLocalStorage(LOGIN_USER);
  const [userData, setUserData] = useLocalStorage(STORAGE_KEYS.USERS);
  const [copiedData] = useLocalStorage(STORAGE_KEYS.USERS);
  const [currentPage, setCurrentPage] = useState(1);

  const onLogout = () => (logout(), history.push(ROUTE_PATHS.HOME));

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
                  <AccountButton onClick={onLogout} content='๋ก๊ทธ์์' />
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
  min-width: 700px;
`;

const ChartAside = styled(S.Aside)`
  width: 40%;
  min-width: 300px;
`;

const AdminContainer = styled(S.Container)`
  @media only screen and (max-width: 1055px) {
    margin: 0 auto;
  }
`;

const AdminSection = styled(S.Section)`
  @media only screen and (max-width: 1055px) {
    display: block;
    & ${TableBox} {
      min-width: 528px;
      width: 100%;
    }
    & ${ChartAside} {
      min-width: 528px;
      width: 100%;
    }
  }
`;

export default Admin;
