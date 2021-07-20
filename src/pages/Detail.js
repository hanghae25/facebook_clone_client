import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import Post from '../components/Post';
import PostWrite from '../components/PostWrite';
import Profile from '../components/Profile';

import { actionCreators as postActioncs } from '../redux/modules/post';

const Detail = () => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(postActioncs.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <GridBox>
        <Header></Header>
        <Profile></Profile>
        <PostWrite></PostWrite>
        {post_list.map((p, idx) => {
          return <Post key={p.id} {...p} />;
        })}
      </GridBox>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  background-color: #f0f2f5;
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ''}
  ${(props) => (props.center ? `text-align: center;` : '')}
`;

export default Detail;
