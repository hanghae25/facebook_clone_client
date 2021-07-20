import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/config";

// action type
const SET_MY_POST = "SET_MY_POST";
const SET_ALL_POST = "SET_ALL_POST";
const LIKE_TOGGLE = "LIKE_TOGGLE";
const DELETE_POST = "DELETE_POST";

// action creator
const setMyPost = createAction(SET_MY_POST, (post_list) => ({ post_list }));
const setAllPost = createAction(SET_ALL_POST, (post_list) => ({ post_list }));

const likeToggle = createAction(LIKE_TOGGLE, (post_id, is_like = null) => ({
  post_id,
  is_like,
}));

// initialState
const initialState = {
  my_post_list: [],
  all_post_list: [],
  list: [],
};

const initialPost = {};

// middleware actions
const getMyPostDB = () => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance
      .get(`/user/my-article/${username}/1/20`)
      .then((result) => {
        dispatch(setMyPost(result.data.content));
      })
      .catch((err) => {
        console.log("에러: ", err);
      });
  };
};

const getAllPostDB = () => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance
      .get(`/user/all-article/${username}/1/20`)
      .then((result) => {
        dispatch(setAllPost(result.data.content));
      })
      .catch((err) => {
        console.log("에러: ", err);
      });
  };
};

const deletePostDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    instance.delete(`user/article/${articleId}`).then(() => {
      dispatch(getMyPostDB());
      console.log("삭제완료");
    });
  };
};
const toggleLikeDB = (post_id, username) => {
  return function (dispatch, getState) {
    const _idx = getState().post.list.findIndex((p) => p.id === post_id);
    let _post = getState().post.list[_idx];
    let like_cnt = _post.like_cnt;
    let is_like = _post.is_like;

    instance
      .post(
        "/user/article/likeIt",
        {
          articleId: post_id,
          username: "lee",
        }
        // { withCredentials: true }
      )
      .then((response) => {
        if (!response.data.res) {
          window.alert(response.data.msg);
          return;
        }
        is_like = is_like === false ? true : false;
        like_cnt = is_like === true ? like_cnt + 1 : like_cnt - 1;

        const like_post = {
          like_cnt: like_cnt,
          is_like: is_like,
        };
        dispatch(likeToggle(like_post, post_id));
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_MY_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.my_post_list = action.payload.post_list;
      }),
    [SET_ALL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.all_post_list = action.payload.post_list;
      }),
    [LIKE_TOGGLE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        draft.list[idx].is_like = action.payload.post.is_like;
        draft.list[idx].like_cnt = action.payload.post.like_cnt;
      }),
  },
  initialState
);

//action creator export
const actionCreators = {
  setMyPost,
  getMyPostDB,
  getAllPostDB,
  toggleLikeDB,
  deletePostDB,
};

export { actionCreators };
