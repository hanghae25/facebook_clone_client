import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/config';

// action type
const SET_POST = 'SET_POST';
const LIKE_TOGGLE = 'LIKE_TOGGLE';

// action creator
const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const likeToggle = createAction(LIKE_TOGGLE, (post_id, is_like = null) => ({
  post_id,
  is_like,
}));

// initialState
const initialState = {
  list: [],
};

const initialPost = {};

// middleware actions
const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    instance
      .get('/user/article/lee/2/8')
      .then((docs) => {
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

const toggleLikeDB = (post_id, username) => {
  return function (dispatch, getState) {
    const _idx = getState().post.list.findIndex((p) => p.id === post_id);
    let _post = getState().post.list[_idx];
    let like_cnt = _post.like_cnt;
    let is_like = _post.is_like;

    instance
      .post(
        '/user/article/likeIt',
        {
          articleId: post_id,
          username: 'lee',
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
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
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
  setPost,
  getPostDB,
  toggleLikeDB,
};

export { actionCreators };
