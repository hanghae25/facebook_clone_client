import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  ButtonDefaultCss,
  BlueButtonColor,
  GreyButtonColor,
} from "../common_css/style";
import Upload from "../shared/Upload";
import { actionCreators as uploadAction } from "../redux/module/upload";
import { actionCreators as profileAction } from "../redux/module/profile";
import { actionCreators as userAction } from "../redux/modules/user";

const Profile = () => {
  const profileImg = useSelector((state) => state.profile.profileImg);
  const coverImg = useSelector((state) => state.profile.coverImg);
  const profileInput = useRef();
  const coverInput = useRef();
  const dispatch = useDispatch();
  dispatch(profileAction.getProfileImageDB());
  dispatch(profileAction.getCoverImageDB());
  const selectProfileFile = (e) => {
    const reader = new FileReader();
    const file = profileInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(uploadAction.uploadProfileImg(file));
    };
  };

  const selectCoverFile = (e) => {
    const reader = new FileReader();
    const file = coverInput.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      dispatch(uploadAction.uploadCoverImg(file));
    };
  };

  const handleLogout = () => {
    dispatch(userAction.logOutAPI());
  };
  return (
    <Container>
      <input
        type="file"
        id="cover"
        accept="image/png, image/gif, image/jpeg"
        style={{ display: "none" }}
        ref={coverInput}
        onChange={selectCoverFile}
      />
      <label htmlFor="cover">
        <CoverImage coverImg={coverImg}>
          <CoverImageContent>
            {coverImg.length > 0 || "사진추가"}
          </CoverImageContent>
        </CoverImage>
      </label>
      <input
        type="file"
        id="profile"
        accept="image/png, image/gif, image/jpeg"
        ref={profileInput}
        onChange={selectProfileFile}
        style={{ display: "none" }}
      />
      <label htmlFor="profile">
        <ProfileImage profileImg={profileImg}>
          <ProfileCameraImgBox>
            <ProfileCameraImg></ProfileCameraImg>
          </ProfileCameraImgBox>
        </ProfileImage>
      </label>
      <Logout onClick={() => handleLogout()}>로그아웃</Logout>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  position: relative;
  height: 350px;
`;

const CoverImage = styled.div`
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  background-color: #161719;
  background-image: url(${(props) => (props.coverImg ? props.coverImg : "")});
  height: 214px;
  position: relative;
  background-size: 100% 214px;
  background-repeat: no-repeat;
`;

const CoverImageContent = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  color: #90949c;
  transform: translate(-50%, -50%);
`;

const ProfileImage = styled.div`
  width: 163px;
  height: 163px;
  border-radius: 50%;

  background-image: url(${(props) => props.profileImg ? props.profileImg : "https://mblogthumb-phinf.pstatic.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w2"});

  background-repeat: no-repeat;
  position: absolute;
  left: 50%;
  top: 60%;
  background-size: 163px 163px;
  border: 5px solid #fff;
  transform: translate(-50%, -50%);
`;

const ProfileCameraImgBox = styled.div`
  width: 36px;
  height: 36px;
  background-color: #dedfe6;
  border: 2px solid #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileCameraImg = styled.div`
  background-image: url(https://www.facebook.com/rsrc.php/v3/y-/r/NkweCMyK5Ry.png);
  background-position: 0px -46px;
  background-size: 25px 207px;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const Logout = styled.button`
  ${ButtonDefaultCss}
  ${BlueButtonColor}
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 15px;
`;
const CovereDeleteBtn = styled.button``;

export default Profile;
