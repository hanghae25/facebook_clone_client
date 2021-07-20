import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as friendAction } from "../redux/module/friend";
import { actionCreators as searchAction } from "../redux/module/search";
import user from "../redux/modules/user";

const RequestFriendIcon = ({ friendName, requestChecker }) => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.user.username);

  const requestParam = {
    username,
    friendName,
  };

  const handleRequestFriend = () => {
    dispatch(friendAction.requestFriendDB(requestParam));
  };

  const handleCancleRequestFriend = () => {
    dispatch(friendAction.requestCancleFriendDB(requestParam));
  };

  return (
    <>
      {requestChecker ? (
        <RequestedFriendBtn
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/eAbShYGWLyR.png"
          onClick={() => handleCancleRequestFriend()}
        ></RequestedFriendBtn>
      ) : (
        <AddFriendBtn
          src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/RwhSrSibh3E.png"
          onClick={() => handleRequestFriend()}
        ></AddFriendBtn>
      )}
    </>
  );
};

const AddFriendBtn = styled.img`
  object-fit: inherit;
  width: inherit;
  width: 24px;
  height: 24px;
  max-width: 24px;
  max-height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3vw;
`;
//https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/eAbShYGWLyR.png
const RequestedFriendBtn = styled.img`
  object-fit: inherit;
  width: inherit;
  width: 24px;
  height: 24px;
  max-width: 24px;
  max-height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3vw;
`;

export default RequestFriendIcon;
