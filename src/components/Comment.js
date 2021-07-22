import React from 'react';
import { Grid, Image, Text } from '../elements';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as commentActions } from '../redux/modules/comment';

import CommentHeart from './CommentHeart';

const Comment = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  // const is_me = useSelector((state) => state.comment.writer);
  // console.log(is_me)
  // writer 배포 받으면, props로 받아서 조건걸어서 아이콘 쏘기

  return (
    <CommentContainer>
      <Grid flex>
        <Grid is_flex width="auto" padding="0px 25px">
          <Grid is_flex width="auto" margin="20px 20px 0px 0px">
            <Image shape="circle" src={props.image_url} />
            <Text bold>{props.writer}</Text>
          </Grid>

          <Grid width="auto">
            <TextComment>
              <Text margin="auto auto auto 20px" color="black" size="12px" bold>
                {props.username}
              </Text>
              <Text margin="5px auto auto 14px">{props.content}</Text>
            </TextComment>

            {/* {is_me? <MdDelete onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/> : "" } */}

            {/* <button onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/> */}
          </Grid>
        </Grid>
      </Grid>

      {/* gw 추가 */}
      <FeedbackBox style={{ backgroundColor: '#FFFFFF' }}>
        <FeedbackBoxTop>
          <FeedbackLikeIconBox>
            <FeedbackLikeIcon></FeedbackLikeIcon>
            <FeedbackLikeIcon2></FeedbackLikeIcon2>
            <FeedbackCount>{props.commentLikeItCount}명</FeedbackCount>
          </FeedbackLikeIconBox>
          <LikeBtnBox>
            <CommentHeart
              _onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(commentActions.commentLikeDB(props.id));
              }}
              commentLikeItChecker={props.commentLikeItChecker}
            ></CommentHeart>
            <BottomBoxTxt>좋아요</BottomBoxTxt>
          </LikeBtnBox>
        </FeedbackBoxTop>
        {/* <FeedbackBoxBottom>
          <LikeBtnBox>
            <CommentHeart
              _onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(commentActions.commentLikeDB(props.id));
              }}
              commentLikeItChecker={props.commentLikeItChecker}
            ></CommentHeart>
            <BottomBoxTxt>좋아요</BottomBoxTxt>
          </LikeBtnBox>
          <CommentBtnBox>
            <CommentIcon></CommentIcon>
            <BottomBoxTxt>댓글 달기</BottomBoxTxt>
          </CommentBtnBox>
        </FeedbackBoxBottom> */}
      </FeedbackBox>
    </CommentContainer>
  );
};

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
  width: auto;
  min-width: 100px;
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

const FeedbackBox = styled.div`
  position: relative;
  padding: 10px;
  box-sizing: border-box;
`;

const FeedbackBoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const FeedbackBoxBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-top: 8px;
`;

const FeedbackLikeIconBox = styled.div`
  display: flex;
`;

const FeedbackLikeIcon = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/LMx56u68mFY.png');
  background-size: 104px 315px;
  background-repeat: no-repeat;
  background-position: -68px -243px;
  display: inline-block;
  height: 16px;
  width: 16px;
`;

const FeedbackLikeIcon2 = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/LMx56u68mFY.png');
  background-size: 104px 315px;
  background-repeat: no-repeat;
  background-position: -51px -243px;
  display: inline-block;
  height: 16px;
  width: 16px;
`;

const FeedbackCount = styled.span`
  display: inline;
  margin-left: 4px;
  vertical-align: middle;
  color: #616770;
  font-size: 14px;
`;

const CommentCount = styled.span`
  vertical-align: middle;
  color: #616770;
  font-size: 14px;
`;

const LikeBtnBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LikeIcon = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/LMx56u68mFY.png');
  background-repeat: no-repeat;
  background-size: 104px 315px;
  background-position: 0 -205px;
  height: 20px;
  width: 20px;
  display: inline-block;
`;

const CommentIcon = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/LMx56u68mFY.png');
  background-repeat: no-repeat;
  background-size: 104px 315px;
  background-position: -63px -184px;
  height: 20px;
  width: 20px;
  display: inline-block;
`;

const BottomBoxTxt = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: #616770;
  font-weight: bold;
`;

const CommentBtnBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Comment;
