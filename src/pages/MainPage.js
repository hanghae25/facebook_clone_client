import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Post from "../components/Post";
import PostWrite from "../components/PostWrite";

import { actionCreators as postAction } from "../redux/modules/post";

const MainPage = () => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.all_post_list);

  console.log("post_list : ", post_list);
  React.useEffect(() => {
    dispatch(postAction.getAllPostDB());
  }, []);

  return (
    <React.Fragment>
      <GridBox>
        <Header></Header>
        <PostWrite></PostWrite>
        {/* <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post> */}
        <GridWhite>
          {post_list.map((p, idx) => {
            return <Post key={p.id} {...p} />;
          })}
        </GridWhite>
      </GridBox>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

const GridWhite = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  /* background-color: #ffffff; */
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
`;

export default MainPage;
