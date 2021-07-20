import React, { useEffect } from "react";
import styled from "styled-components";
import PostWriteHeader from "../components/PostWriteHeader";
import ProfileBox from "../components/ProfileBox";
import ImgUploadBox from "../components/ImgUploadBox";
import Mention from "../components/Mention";
import SubmitBox from "../components/SubmitBox";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as imageAction } from "../redux/module/upload";
const PostWrite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(imageAction.deleteUploadImageUrlList());
  }, []);
  return (
    <Container>
      <PostWriteHeader></PostWriteHeader>
      <ProfileBox></ProfileBox>
      <Mention></Mention>
      <ImgUploadBox></ImgUploadBox>
      <SubmitBox></SubmitBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
`;

export default PostWrite;
