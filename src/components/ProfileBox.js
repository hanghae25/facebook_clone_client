import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProfileBox = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <ProfileBoxContainer>
      <ProfileImgBox>
        <ProfileImg></ProfileImg>
      </ProfileImgBox>
      <ProfileRightBox>
        <ProfileRightText>{user.username}</ProfileRightText>
      </ProfileRightBox>
    </ProfileBoxContainer>
  );
};

const ProfileBoxContainer = styled.div`
  background: #fff;
  border-bottom: 1px solid #dadde1;
  border-top: 1px solid #dadde1;
  padding: 8px;
  height: 66px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const ProfileImgBox = styled.div`
  margin-right: 8px;
`;
const ProfileImg = styled.i`
  background: url("https://mblogthumb-phinf.pstatic.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w2")
    no-repeat center;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
`;

const ProfileRightBox = styled.div``;

const ProfileRightText = styled.div`
  color: #444950;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 4px;
`;
export default ProfileBox;
