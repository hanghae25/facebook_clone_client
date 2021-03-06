import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { actionCreators as postActions } from './post';

// import instance from "../../shared/config";
// import { setCookie, deleteCookie } from "../../shared/Cookie";
import moment from 'moment';
import instance from '../../shared/config';
import { setCookie } from '../../shared/Cookie';

// actions
const SET_COMMENT = 'SET_COMMENT';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const COMMENT_LIKE = 'COMMENT_LIKE';

// action craetors
const setComment = createAction(SET_COMMENT, (comment_list) => ({
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (post_id, comment) => ({
  post_id,
  comment,
}));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({
  comment_id,
}));
const commentLIKE = createAction(COMMENT_LIKE, (comment, comment_id) => ({
  comment,
  comment_id,
}));

// initialState
const initialState = {
  list: [],
  commentLikeItCount: 0,
  commentLikeItChecker: false,
};

const setCommentAPI = (post_id) => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;
    instance
      .get(`user/comment/${username}/${post_id}`)
      .then((response) => {
        console.log(response.data);
        let comment_list = response.data;

        console.log('comment_list : ', comment_list);
        dispatch(setComment(comment_list));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const addCommentAPI = (articleId, content) => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.user.username;
    const param = {
      articleId,
      content,
      username,
    };
    console.log('param : ', param);
    instance.post('user/comment', param).then((result) => {
      console.log('success', result);
      dispatch(setCommentAPI(articleId));
    });
  };
};

const deleteCommentAPI = (username, articleId) => {
  return function (dispatch) {
    instance
      .delete(`user/comment/${username}/${articleId}`, {})
      .then((response) => {
        // console.log(response)
        // ?????? ????????? ????????? ????????? ????????? ????????? ????????????
        dispatch(deleteComment());
        // ???????????? ????????? ????????? post????????? ????????? comments ????????? ????????? ????????? ?????? ????????? ??????????????? post ???????????? ????????? ?????????????????? ??????.
        dispatch(postActions.oldComment(parseInt()));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const commentLikeDB = (comment_id) => {
  return function (dispatch, getState) {
    let _idx = getState().comment.list.findIndex((p) => p.id === comment_id);
    let _comment = getState().comment.list[_idx];
    let username2 = getState().user.user.username;
    let commentLikeItCount = _comment.commentLikeItCount;
    let commentLikeItChecker = _comment.commentLikeItChecker;

    instance
      .post('/user/comment/likeIt', {
        commentId: comment_id,
        username: username2,
      })
      .then(() => {
        commentLikeItChecker = commentLikeItChecker === false ? true : false;
        commentLikeItCount =
          commentLikeItChecker === true
            ? commentLikeItCount + 1
            : commentLikeItCount - 1;
        const like_comment = {
          commentLikeItCount: commentLikeItCount,
          commentLikeItChecker: commentLikeItChecker,
        };
        dispatch(commentLIKE(like_comment, comment_id));
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.comment_list;
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.content);
      }),

    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let new_comment_list = draft.list.filter((e) => {
          if (e.comment_id !== action.payload.comment_id) {
            return e;
          }
        });
        draft.list = new_comment_list;
      }),
    [COMMENT_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p.id === action.payload.comment_id
        );
        // console.log(idx, state);
        draft.list[idx].commentLikeItChecker =
          action.payload.comment.commentLikeItChecker;
        draft.list[idx].commentLikeItCount =
          action.payload.comment.commentLikeItCount;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setComment,
  addComment,
  addCommentAPI,
  setCommentAPI,
  deleteCommentAPI,
  commentLikeDB,
};

export { actionCreators };
