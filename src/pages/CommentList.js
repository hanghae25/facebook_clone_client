import React from "react";
import styled from "styled-components";
import {  HeadearColor } from "../common_css/style";
import { Image, Grid, Text } from "../elements";
import Post from "../components/Post";
import { history } from "../redux/configureStore";


// import HeartButton from './HeartButton';
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as commentActions} from "../redux/modules/comment";
import post, { actionCreators as postActions } from "../redux/modules/post";

import CommentWrite from "../components/CommentWrite";
import Comment from "../components/Comment";
import arrow_icon from "../shared/arrow_icon.png";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";

const CommentList = (props) => {
    const dispatch = useDispatch();
    const comment_list = useSelector((state) => state.comment.list);
    const post_list = useSelector((state) => state.post.all_post_list);
    const {id} = useParams()
    // console.log(id)
    const post_found = post_list.find((post)=> post.id ==id)
    console.log(post_found)

    // 댓글 최신순으로 구현하는 함수
    const content_list = comment_list.slice(0, comment_list.length)
    .sort(function(a, b) {
         const timeA = a.createdAt; const timeB = b.createdAt; 
         if (timeA < timeB) return 1; if (timeA > timeB) return -1; });
    
    console.log(content_list)

    React.useEffect(() => {
      dispatch(commentActions.setCommentAPI(id));  
      dispatch(postActions.getOnePostDB(id));
    //   dispatch(commentActions.deleteCommentAPI(commentId));
    }, []);

    return (
        <React.Fragment>
            <Header>
                <arrowButton
                 onClick={() => {
                  history.goBack();
                }}
                >
                <img src={arrow_icon} alt="arrow" width="30px"/></arrowButton>             
                <Title></Title>
                <Center/>
            </Header>
            
            {post_found &&(
                <Post {...post_found} />
            
            )}
            <CommentContainer>
            <hr style={{ width:"90%"}}/>
            <CommentWrite id={id}/>
            <hr style={{ width:"100%"}}/>
            {content_list.map((p, idx) => {
                return <Comment key={idx} {...p}/>
            })}
            </CommentContainer>
        
        
            
        </React.Fragment>
    )
  }
  export default CommentList;

const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: -10px;
  background-color: white;

`;

const Header = styled.div`
    width: 100%;
    height: 45px;
    ${HeadearColor}
    // margin-top: px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
`;

const Center = styled.div`
  margin: 0px;
  width: 30px;
  height: 30px;
`;