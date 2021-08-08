import React from 'react';
import styled from 'styled-components';

const UserCard = ({ name, userType }) => {
  return (
    <CardWrap>
      {userType === 'teacher' ? (
        <>
          <div>
            <ImgBox>
              <StudentImg />
            </ImgBox>
            <p>신규</p>
          </div>
          <TextBox>
            <ImOnTheTextLevel>
              <UserIcon />
              <TextLevel>잘 자란 학생</TextLevel>
            </ImOnTheTextLevel>
            <TextName>{name}</TextName>
            <TextSchool>학교</TextSchool>
            <TextComment>미술과 공룡 그리기를 좋아하는 친구</TextComment>
          </TextBox>
        </>
      ) : (
        <>
          <div>
            <ImgBox>
              <TeacherImg />
            </ImgBox>
            <p>신규</p>
          </div>
          <TextBox>
            <ImOnTheTextLevel>
              <UserIcon />
              <TextLevel>잘 자란 선생님</TextLevel>
            </ImOnTheTextLevel>
            <TextName>{name}</TextName>
            <TextSchool>학교</TextSchool>
            <TextComment>의대생과 함께하는 이해 쏙쏙 수학 수업</TextComment>
          </TextBox>
        </>
      )}
    </CardWrap>
  );
};

const CardWrap = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 16px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 2px 3px 0 #e5e5e5;
  border-radius: 4px;
  background: #fff;
  margin-top: 20px;
`;

const ImgBox = styled.div`
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 30px;
  margin-bottom: 10px;
`;

const StudentImg = styled.img.attrs({
  src: '../../images/studentLogo.png',
})`
  width: 64px;
  height: 64px;
`;
const TeacherImg = styled.img.attrs({
  src: '../../images/teacherLogo.png',
})`
  width: 64px;
  height: 64px;
`;

const UserIcon = styled.img.attrs({
  src: '../../images/expertise_level_3.png',
})`
  width: 24px;
  height: 24px;
`;

const TextBox = styled.div`
  padding-left: 20px;
`;

const JustP = styled.p`
  padding: 5px 0;
  text-align: left;
`;

const TextLevel = styled(JustP)`
  padding: 0 6px;
`;

const ImOnTheTextLevel = styled(JustP)`
  display: flex;
  color: #5e7f35;
  font-size: 14px;
  line-height: 24px;
`;

const TextName = styled(JustP)`
  font-size: 18px;
  padding: 6px 0;
`;

const TextSchool = styled(JustP)`
  color: #888;
  font-size: 15px;
`;

const TextComment = styled(JustP)`
  color: #8263cc;
  font-size: 15px;
`;

export default UserCard;
