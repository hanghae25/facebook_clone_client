import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as commentAction } from '../redux/modules/commentLike';

import CommentHeart from './CommentHeart';

const CommentList = (props) => {
  const dispatch = useDispatch();

  const {
    commentLikeItCount,
    commentLikeItChecker,
    content,
    id,
    modifiedAt,
    recommentCount,
    username,
  } = props;

  return (
    <PostContainer>
      <PostHeader>
        <PostHeaderInfo>
          <PostUserName>{username.replace(/[0-9]/g, '')}</PostUserName>
          <PostDate>{modifiedAt}</PostDate>
        </PostHeaderInfo>
        {/* {loginedUser === username && (
          <PostControll>
            <PostUpdate
              onClick={() => {
                dispatch(articleAction.getOneArticleDB(id));
              }}
            >
              수정
            </PostUpdate>{' '}
            / <PostDelete onClick={() => handleDeletePost(id)}>삭제</PostDelete>
          </PostControll>
        )} */}
      </PostHeader>
      <PostContent>{content}</PostContent>

      <FeedbackBox>
        <FeedbackBoxTop>
          <FeedbackLikeIconBox>
            <FeedbackLikeIcon></FeedbackLikeIcon>
            <FeedbackLikeIcon2></FeedbackLikeIcon2>
            <FeedbackCount>{commentLikeItCount}명</FeedbackCount>
          </FeedbackLikeIconBox>
          <CommentCount>대댓글 {recommentCount}개 </CommentCount>
        </FeedbackBoxTop>
        <FeedbackBoxBottom>
          <LikeBtnBox>
            <CommentHeart
              _onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(commentAction.commentLikeDB(id));
              }}
              commentLikeItChecker={commentLikeItChecker}
            ></CommentHeart>
            <BottomBoxTxt>좋아요</BottomBoxTxt>
          </LikeBtnBox>
          <CommentBtnBox>
            <CommentIcon></CommentIcon>
            <BottomBoxTxt>댓글 달기</BottomBoxTxt>
          </CommentBtnBox>
        </FeedbackBoxBottom>
      </FeedbackBox>
    </PostContainer>
  );
};

const PostContainer = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
`;

const PostHeaderImage = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const PostHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

const PostUserName = styled.div`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
`;

const PostDate = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: grey;
`;

const PostControll = styled.div`
  font-size: 14px;
  position: absolute;
  right: 10px;
`;
const PostUpdate = styled.span``;
const PostDelete = styled.span``;

const PostContent = styled.div`
  padding: 10px;
  margin: 10px 0;
`;

const PostImage = styled.img`
  display: block;
  width: 100%;
  height: 414px;
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

export default CommentList;
