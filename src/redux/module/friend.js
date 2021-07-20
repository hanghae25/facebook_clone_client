import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/config";
import { actionCreators as searchAction } from "./search";
const REQUESTED_FRIEND_LIST = "REQUESTED_FRIEND_LIST";
const initailState = {
  requested_friend_list: [],
};

const getRequestedFriendList = createAction(
  REQUESTED_FRIEND_LIST,
  (friend) => ({ friend })
);
const requestFriendDB = (friend) => {
  return function (dispatch, getState, { history }) {
    instance.post("user/request-friend", friend).then((result) => {
      console.log("친구요청완료");
      const { friendName } = friend;
      dispatch(
        searchAction.getSearchDetailListDB(friendName.replace(/[0-9]/g, ""))
      );
    });
  };
};

const requestCancleFriendDB = (friend) => {
  return function (dispatch, getState, { history }) {
    const { username, friendName } = friend;
    instance
      .delete(`user/decline-friend/${username}/${friendName}`)
      .then((result) => {
        dispatch(
          searchAction.getSearchDetailListDB(friendName.replace(/[0-9]/g, ""))
        );
      });
  };
};

const requestedFriendListDB = () => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance.get(`/user/request-friend-list/${username}`).then((result) => {
      console.log("requestedFriendListDB : ", result.data);
      dispatch(getRequestedFriendList(result.data));
    });
  };
};

const acceptRequestedFriend = (friendName) => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    const param = {
      username,
      friendName,
    };
    instance.post("/user/accept-friend", param).then(() => {
      console.log("수락완료");
      dispatch(requestedFriendListDB());
    });
  };
};

const declineRequestedFriend = (friendName) => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance
      .delete(`/user/decline-friend/${username}/${friendName}`)
      .then(() => {
        console.log("거절완료");
        dispatch(requestedFriendListDB());
      });
  };
};

export default handleActions(
  {
    [REQUESTED_FRIEND_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.requested_friend_list = action.payload.friend;
      }),
  },
  initailState
);

const actionCreators = {
  requestFriendDB,
  requestCancleFriendDB,
  requestedFriendListDB,
  acceptRequestedFriend,
  declineRequestedFriend,
};

export { actionCreators };