import React from "react";
import styled from "styled-components";
import { ButtonDefaultCss, BlueButtonColor } from "../common_css/style";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as uploadAction } from "../redux/module/upload";

const SubmitBox = (props) => {
  const dispatch = useDispatch();

  const handleAddArticle = (type) => {
    dispatch(uploadAction.uploadImageFB(type));
  };

  const handleUpdateArticle = (type) => {
    dispatch(uploadAction.uploadImageFB(type));
  };
  return (
    <SubmitBoxContainer>
      {props.type === "add" ? (
        <SumbitBtn
          onClick={() => {
            handleAddArticle("add");
          }}
        >
          게시
        </SumbitBtn>
      ) : (
        <SumbitBtn
          onClick={() => {
            handleUpdateArticle("update");
          }}
        >
          수정
        </SumbitBtn>
      )}
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

SubmitBox.defaultProps = {
  type: "add",
};
export default SubmitBox;
