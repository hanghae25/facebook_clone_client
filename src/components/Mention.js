import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleAction } from "../redux/module/article";
const Mention = () => {
  const dispatch = useDispatch();

  const handleActicleData = (e) => {
    const article = {
      //나중에 usename 에 로그인한 유저 상태값 받아서 그 유저네임 넣어야함. 지금은 로그인 구현안되어있으니 임시방편으로 아무거나
      username: "아무개",
      content: e.target.value,
    };

    dispatch(articleAction.setArticle(article));
  };
  return (
    <MentionBox>
      <MentionTextArea
        placeholder="무슨 생각을 하고 계신가요?"
        onChange={handleActicleData}
      ></MentionTextArea>
    </MentionBox>
  );
};

const MentionBox = styled.div`
  position: relative;
  padding: 15px;
`;

const MentionTextArea = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  height: 100px;
  outline: none;
`;

export default Mention;
