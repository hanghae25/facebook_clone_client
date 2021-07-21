import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../shared/config';
import { useSelector, useDispatch } from 'react-redux';

import { storage } from '../../shared/firebase';
import axios from 'axios';
import { actionCreators as actionLoading } from './loading';
import { actionCreators as imageAction } from './upload';

const SET_ARTICLE = 'SET_ARTICLE';
const ADD_ARTICLE = 'ADD_ARTICLE';

const initialState = {
  article: {
    username: '김건우1',
    content: '',
  },
  article_list: [],
};

const setArticle = createAction(SET_ARTICLE, (acticle) => ({ acticle }));

const addArticleDB = (article) => {
  return function (dispatch, getState, { history }) {
    const picture = getState().upload.upload_img_url;
    const video = getState().upload.upload_video_url;

    const pictureParam = picture.join(',');
    const videoParam = video.join(',');

    const param = {
      ...article,
      picture: pictureParam,
      video: videoParam,
    };
    instance
      .post(`/user/article`, param)
      .then((result) => {
        console.log('upload성공');
        dispatch(actionLoading.setLoading(false));
        history.replace('/');
      })
      .catch((error) => {
        console.log('error : ', error);
      });
  };
};

export default handleActions(
  {
    [SET_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.article = action.payload.acticle;
      }),
  },
  initialState
);
const actionCreators = {
  setArticle,
  addArticleDB,
};

export { actionCreators };
