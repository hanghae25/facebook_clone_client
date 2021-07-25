import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/config';

// action type
const SET_ALL_COMMENT = 'SET_ALL_COMMENT';
const COMMENT_LIKE = 'COMMENT_LIKE';

// action creator
const setAllComment = createAction(SET_ALL_COMMENT, (comment_list) => ({
  comment_list,
}));
const commentLIKE = createAction(COMMENT_LIKE, (comment, comment_id) => ({
  comment,
  comment_id,
}));

// initialState
const initialState = {
  comment_list: [],
  commentLikeItCount: 0,
  commentLikeItChecker: false,
};

// middleware
const setAllCommentDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/user/comment/김첨지0/60`)
      .then((result) => {
        dispatch(setAllComment(result.data));
      })
      .catch((err) => {
        console.log('에러: ', err);
      });
  };
};

const commentLikeDB = (comment_id) => {
  return function (dispatch, getState) {
    let _idx = getState().commentLike.comment_list.findIndex(
      (p) => p.id === comment_id
    );
    let _comment = getState().commentLike.comment_list[_idx];
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
    [SET_ALL_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list = action.payload.comment_list;
      }),

    [COMMENT_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.comment_list.findIndex(
          (p) => p.id === action.payload.comment_id
        );
        console.log(idx, state);
        draft.comment_list[idx].commentLikeItChecker =
          action.payload.comment.commentLikeItChecker;
        draft.comment_list[idx].commentLikeItCount =
          action.payload.comment.commentLikeItCount;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setAllComment,
  commentLIKE,
  setAllCommentDB,
  commentLikeDB,
};

export { actionCreators };
