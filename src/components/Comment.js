import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";

import {actionCreators as commentActions} from "../redux/modules/comment"   


const Comment = (props) => {

  const dispatch = useDispatch();

// const is_me = useSelector((state) => state.comment.writer);
// console.log(is_me)
// writer 배포 받으면, props로 받아서 조건걸어서 아이콘 쏘기


  return (
    <CommentContainer>
      <Grid flex>
      <Grid is_flex width="auto" padding="0px 25px">
      <Grid is_flex width="auto" margin="20px 20px 0px 0px">
              <Image shape="circle" src={props.image_url}/>
              <Text bold>{props.writer}</Text>
          </Grid>

          <Grid width="auto" >
                <TextComment >
                <Text margin="auto auto auto 20px" color="black" size="12px" bold>
                {props.username}
                </Text>
                <Text margin="5px auto auto 14px">
                {props.content}
                </Text>
                </TextComment>
                
              {/* {is_me? <MdDelete onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/> : "" } */}
              
              {/* <button onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/> */}     
          </Grid>
      </Grid>
      </Grid>
      </CommentContainer>
  )
}

// 프롭스.히스토리.로케아션.path name.split

const CommentContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
`;

const Card = styled.div`
  width: 90vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const DeleteButton = styled.button`
  
width: 30px;
height: 20px;
boder: none;

`;

const TextComment = styled.text`
width : auto;
min-width : 100px;
height: auto;
min-height: 55px;
background-color: #f0f2f5;
border-radius: 30px;
// vertical-align: center;
margin: 15px 20px auto auto;
font-size: 13px;
text-align: left;
border: none;
display: inline-block;
`;

const TxtButton = styled.button`
border: none;
font-size: 8px;
width: 20px;

`;

export default Comment;