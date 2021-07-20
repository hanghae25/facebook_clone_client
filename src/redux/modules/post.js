import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/config';

// action type
const SET_POST = 'SET_POST';
const LIKE_TOGGLE = 'LIKE_TOGGLE';
const DELETE_POST = 'DELETE_POST';

// action creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const likeToggle = createAction(LIKE_TOGGLE, (post, post_id) => ({
  post,
  post_id,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

// initialState
const initialState = {
  list: [],
  articleLikeItCount: 0,
  articleLikeItChecker: false,
};

const initialPost = {};

// middleware actions
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;

    instance
      .get(`/user/all-article/${username}/1/4`)
      .then((docs) => {
        console.log(docs);
        let post_list = [];
        docs.data.content.forEach((doc) => {
          // console.log(doc.id, doc);
          post_list.push(doc);
        });

        console.log(post_list);
        dispatch(setPost(post_list));
      })
      .catch((err) => {
        console.log('에러: ', err);
      });
  };
};

const getPostMyDB = () => {
  return function (dispatch, getState, { history }) {
    let username = getState().user.user.username;

    instance
      .get(`/user/my-article/${username}/1/3`)
      .then((docs) => {
        console.log(docs);
        let post_list = [];
        docs.data.content.forEach((doc) => {
          // console.log(doc.id, doc);
          post_list.push(doc);
        });

        console.log(post_list);
        dispatch(setPost(post_list));
      })
      .catch((err) => {
        console.log('에러: ', err);
      });
  };
};

const toggleLikeDB = (post_id) => {
  return function (dispatch, getState) {
    const _idx = getState().post.list.findIndex((p) => p.id === post_id);
    let _post = getState().post.list[_idx];
    let username1 = getState().user.user.username;
    let articleLikeItCount = _post.articleLikeItCount;
    let articleLikeItChecker = _post.articleLikeItChecker;
    console.log(_idx, _post, articleLikeItCount, articleLikeItChecker);
    instance
      .post('/user/article/likeIt', {
        articleId: post_id,
        username: username1,
      })
      .then((response) => {
        console.log(response);
        // if (!response.data.articleLikeIt) {
        //   window.alert(response.data.msg);
        //   return;
        // }
        console.log(_idx, _post, articleLikeItCount, articleLikeItChecker);
        articleLikeItChecker = articleLikeItChecker === false ? true : false;
        articleLikeItCount =
          articleLikeItChecker === true
            ? articleLikeItCount + 1
            : articleLikeItCount - 1;
        console.log(_idx, _post, articleLikeItCount, articleLikeItChecker);
        const like_post = {
          articleLikeItCount: articleLikeItCount,
          articleLikeItChecker: articleLikeItChecker,
        };
        console.log(like_post, post_id);
        dispatch(likeToggle(like_post, post_id));
      });
  };
};

const deletePostDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    // id가 없으면 return!
    if (!articleId) {
      window.alert('삭제할 수 없는 게시글이에요!');
      return;
    }

    instance.delete(`/user/article/${articleId}`);

    // const postDB = firestore.collection('post');

    // 게시글 id로 선택해서 삭제하기!
    // postDB
    //   .doc(id)
    //   .delete()
    //   .then((res) => {
    //     dispatch(deletePost(id));
    //     history.replace('/');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
};

// reducer
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(draft.list);
      }),
    [LIKE_TOGGLE]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        console.log(idx);
        console.log(draft.list);
        draft.list[idx].articleLikeItChecker =
          action.payload.post.articleLikeItChecker;
        draft.list[idx].articleLikeItCount =
          action.payload.post.articleLikeItCount;
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
  setPost,
  getPostDB,
  getPostMyDB,
  toggleLikeDB,
  deletePostDB,
};

export { actionCreators };
