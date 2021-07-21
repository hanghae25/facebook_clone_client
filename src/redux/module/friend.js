import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/config";
import { actionCreators as searchAction } from "./search";
const REQUESTED_FRIEND_LIST = "REQUESTED_FRIEND_LIST";
const GET_MY_FRIENDS = "GET_MY_FRIENDS";
const initailState = {
  requested_friend_list: [],
  my_friend_list: [],
};

const getRequestedFriendList = createAction(
  REQUESTED_FRIEND_LIST,
  (friend) => ({ friend })
);

const getMyFriendList = createAction(GET_MY_FRIENDS, (friend) => ({ friend }));

const requestFriendDB = (friend) => {
  return function (dispatch, getState, { history }) {
    instance.post("user/request-friend", friend).then((result) => {
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
      .delete(`user/decline-friend/given/${username}/${friendName}`)
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
    instance
      .get(`/user/request-friend-list/received/${username}`)
      .then((result) => {
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
      dispatch(requestedFriendListDB());
    });
  };
};

const declineRequestedFriend = (friendName) => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance
      .delete(`/user/decline-friend/received/${username}/${friendName}`)
      .then(() => {
        dispatch(requestedFriendListDB());
      });
  };
};

const getMyFriendListDB = () => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance.get(`user/friends/${username}`).then((result) => {
      dispatch(getMyFriendList(result.data.friends));
    });
  };
};

export default handleActions(
  {
    [REQUESTED_FRIEND_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.requested_friend_list = action.payload.friend;
      }),
    [GET_MY_FRIENDS]: (state, action) =>
      produce(state, (draft) => {
        draft.my_friend_list = action.payload.friend;
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
  getMyFriendListDB,
};

export { actionCreators };
