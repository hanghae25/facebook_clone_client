import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/config';

// action type
const SET_MY_POST = 'SET_MY_POST';
const SET_ALL_POST = 'SET_ALL_POST';
const LIKE_TOGGLE = 'LIKE_TOGGLE';
const DELETE_POST = 'DELETE_POST';

// action creator
const setMyPost = createAction(SET_MY_POST, (post_list) => ({ post_list }));
const setAllPost = createAction(SET_ALL_POST, (post_list) => ({ post_list }));

const likeToggle = createAction(LIKE_TOGGLE, (post, post_id) => ({
  post,
  post_id,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

// initialState
const initialState = {
  my_post_list: [],
  all_post_list: [],
  list: [],
  articleLikeItCount: 0,
  articleLikeItChecker: false,
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
        console.log('에러: ', err);
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
        console.log('에러: ', err);
      });
  };
};

const deletePostDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    instance.delete(`user/article/${articleId}`).then(() => {
      dispatch(getMyPostDB());
      dispatch(getAllPostDB());
      console.log('삭제완료');
    });
  };
};

const toggleLikeDB = (post_id) => {
  return function (dispatch, getState) {
<<<<<<< HEAD
    const _idx = getState().post.all_post_list.findIndex(
      (p) => p.id === post_id
    );
    let _post = getState().post.all_post_list[_idx];
    let username1 = getState().user.user.username;
    let articleLikeItCount = _post.articleLikeItCount;
    let articleLikeItChecker = _post.articleLikeItChecker;
    instance
      .post("/user/article/likeIt", {
        articleId: post_id,
        username: username1,
      })
      .then((response) => {
        articleLikeItChecker = articleLikeItChecker === false ? true : false;
        articleLikeItCount =
          articleLikeItChecker === true
            ? articleLikeItCount + 1
            : articleLikeItCount - 1;
        const like_post = {
          articleLikeItCount: articleLikeItCount,
          articleLikeItChecker: articleLikeItChecker,
        };
        dispatch(likeToggle(like_post, post_id));
      });
=======
    if (getState().post.all_post_list.length !== 0) {
      const _idx = getState().post.all_post_list.findIndex(
        (p) => p.id === post_id
      );
      let _post = getState().post.all_post_list[_idx];
      let username1 = getState().user.user.username;
      let articleLikeItCount = _post.articleLikeItCount;
      let articleLikeItChecker = _post.articleLikeItChecker;
      instance
        .post('/user/article/likeIt', {
          articleId: post_id,
          username: username1,
        })
        .then((response) => {
          articleLikeItChecker = articleLikeItChecker === false ? true : false;
          articleLikeItCount =
            articleLikeItChecker === true
              ? articleLikeItCount + 1
              : articleLikeItCount - 1;
          const like_post = {
            articleLikeItCount: articleLikeItCount,
            articleLikeItChecker: articleLikeItChecker,
          };
          dispatch(likeToggle(like_post, post_id));
        });
    } else if (getState().post.my_post_list.length !== 0) {
      const _idx = getState().post.my_post_list.findIndex(
        (p) => p.id === post_id
      );
      let _post = getState().post.my_post_list[_idx];
      let username1 = getState().user.user.username;
      let articleLikeItCount = _post.articleLikeItCount;
      let articleLikeItChecker = _post.articleLikeItChecker;
      instance
        .post('/user/article/likeIt', {
          articleId: post_id,
          username: username1,
        })
        .then((response) => {
          articleLikeItChecker = articleLikeItChecker === false ? true : false;
          articleLikeItCount =
            articleLikeItChecker === true
              ? articleLikeItCount + 1
              : articleLikeItCount - 1;
          const like_post = {
            articleLikeItCount: articleLikeItCount,
            articleLikeItChecker: articleLikeItChecker,
          };
          dispatch(likeToggle(like_post, post_id));
        });
    }
>>>>>>> aef01b6bc90d56be743b7f4bda9fff641fb4e84f
  };
};

// reducer
export default handleActions(
  {
    [SET_MY_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.all_post_list = [];
        draft.my_post_list = action.payload.post_list;
      }),
    [SET_ALL_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.my_post_list = [];
        draft.all_post_list = action.payload.post_list;
      }),
    [LIKE_TOGGLE]: (state, action) =>
      produce(state, (draft) => {
        if (draft.all_post_list.length !== 0) {
          let idx = draft.all_post_list.findIndex(
            (p) => p.id === action.payload.post_id
          );
          draft.all_post_list[idx].articleLikeItChecker =
            action.payload.post.articleLikeItChecker;
          draft.all_post_list[idx].articleLikeItCount =
            action.payload.post.articleLikeItCount;
        } else if (draft.my_post_list.length !== 0) {
          let idx = draft.my_post_list.findIndex(
            (p) => p.id === action.payload.post_id
          );
          draft.my_post_list[idx].articleLikeItChecker =
            action.payload.post.articleLikeItChecker;
          draft.my_post_list[idx].articleLikeItCount =
            action.payload.post.articleLikeItCount;
        }
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        if (idx !== -1) {
          draft.list.splice(idx, 1);
        }
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
