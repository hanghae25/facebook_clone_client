import React from "react";
import styled from "styled-components";
import { ButtonDefaultCss, BlueButtonColor } from "../common_css/style";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as uploadAction } from "../redux/module/upload";

const SubmitBox = () => {
  const dispatch = useDispatch();

  const handleAddArticle = async () => {
    dispatch(uploadAction.uploadImageFB());
  };
  return (
    <SubmitBoxContainer>
      <SumbitBtn
        onClick={() => {
          handleAddArticle();
        }}
      >
        게시
      </SumbitBtn>
    </SubmitBoxContainer>
  );
};

const SubmitBoxContainer = styled.div`
  padding: 5px;
`;

const SumbitBtn = styled.button`
  width: 100%;
  ${BlueButtonColor}
  ${ButtonDefaultCss}
`;
export default SubmitBox;
