import React, { useEffect } from "react";
import styled from "styled-components";
import {
  ButtonDefaultCss,
  BlueButtonColor,
  GreyButtonColor,
} from "../common_css/style";
import { actionCreators as friendAction } from "../redux/module/friend";
import { useSelector, useDispatch } from "react-redux";
const RequestFriendBox = () => {
  const requestedFriendList = useSelector(
    (state) => state.friend.requested_friend_list
  );

  console.log("requestedFriendList : ", requestedFriendList);

  const myFriendList = useSelector((state) => state.friend.my_friend_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(friendAction.requestedFriendListDB());
    dispatch(friendAction.getMyFriendListDB());
  }, []);

  const acceptFriend = (friendName) => {
    dispatch(friendAction.acceptRequestedFriend(friendName));
  };

  const declineFriend = (friendName) => {
    dispatch(friendAction.declineRequestedFriend(friendName));
  };
  return (
    <RequestFriendContainer>
      <h3>
        친구 요청
        <RequestFriendNum> {requestedFriendList.length}개</RequestFriendNum>
      </h3>

      {requestedFriendList.map(({ username, picture }) => {
        return (
          <RequestFriendWapper>
            <RequestFriendImg picture={picture}></RequestFriendImg>
            <RequestContentBox>
              <RequestContentName>
                {username.replace(/[0-9]/g, "")}
              </RequestContentName>
              <RequestContentBtnBox>
                <RequestBtnConfirm onClick={() => acceptFriend(username)}>
                  확인
                </RequestBtnConfirm>
                <RequestBtnDelete onClick={() => declineFriend(username)}>
                  삭제
                </RequestBtnDelete>
              </RequestContentBtnBox>
            </RequestContentBox>
          </RequestFriendWapper>
        );
      })}
      <h3>
        내 친구 목록
        <RequestFriendNum> {myFriendList.length}명</RequestFriendNum>
      </h3>
      {myFriendList.map(({ username, picture }) => {
        return (
          <RequestFriendWapper>
            <RequestFriendImg picture={picture}></RequestFriendImg>
            <RequestContentBox>
              <RequestContentName>{username}</RequestContentName>
            </RequestContentBox>
          </RequestFriendWapper>
        );
      })}
    </RequestFriendContainer>
  );
};

const RequestFriendContainer = styled.div`
  padding: 0 12px;
`;

const RequestFriendNum = styled.span`
  color: red;
`;

const RequestFriendWapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const RequestFriendImg = styled.div`
  background: url(${(props) =>
      props.picture !== ""
        ? props.picture
        : "https://mblogthumb-phinf.pstatic.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w2"})
    no-repeat center;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  width: 92px;
  height: 92px;
  display: inline-block;
  border-radius: 50%;
`;

const RequestContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-left: 20px;
  width: 80%;
`;

const RequestContentName = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`;

const RequestContentBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const RequestBtnConfirm = styled.button`
  ${ButtonDefaultCss}
  ${BlueButtonColor}
  width:49%;
`;
const RequestBtnDelete = styled.button`
  ${ButtonDefaultCss}
  ${GreyButtonColor}
    width:49%;
`;
export default RequestFriendBox;
