import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as articleAction } from "../redux/module/article";
const Mention = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.user.username);

  const handleActicleData = (e) => {
    const article = {
      username: username,
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
