import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import { storage } from '../../shared/firebase';
import { actionCreators as actionLoading } from './loading';
import { actionCreators as articleAction } from './article';
import { actionCreators as profileAction } from './profile';
import { actionCreators as postAction } from '../modules/post';

import instance from '../../shared/config';

const GET_UPLOAD_IMAGE_URL_LIST = 'GET_UPLOAD_IMAGE_URL_LIST';
const SET_UPLOAD_IMAGE_URL_LIST = 'SET_UPLOAD_IMAGE_URL_LIST';
const SET_UPLOAD_VIDEO_URL_LIST = 'SET_UPLOAD_VIDEO_URL_LIST';

const DELETE_ONE_UPLOAD_IMAGE_URL_LIST = 'DELETE_ONE_UPLOAD_IMAGE_URL_LIST';
const DELETE_UPLOAD_IMAGE_URL_LIST = 'DELETE_UPLOAD_IMAGE_URL_LIST';
const initialState = {
  upload_img_url: [],
  upload_video_url: [],
};

const getUploadImageUrlList = createAction(GET_UPLOAD_IMAGE_URL_LIST);
const setUploadImageUrlList = createAction(
  SET_UPLOAD_IMAGE_URL_LIST,
  (url) => ({
    url,
  })
);
const setUploadVideoUrlList = createAction(
  SET_UPLOAD_VIDEO_URL_LIST,
  (url) => ({
    url,
  })
);
const deleteOneUploadImageUrlList = createAction(
  DELETE_ONE_UPLOAD_IMAGE_URL_LIST,
  (image) => ({ image })
);
const deleteUploadImageUrlList = createAction(DELETE_UPLOAD_IMAGE_URL_LIST);

const uploadImageFB = (type) => {
  return function (dispatch, getState, { history }) {
    const preview = getState().preview;
    let article = getState().article.article;
    const imageLength = preview.images.length;
    const videoLength = preview.videos.length;
    dispatch(actionLoading.setLoading(true));

    if (imageLength > 0 || videoLength > 0) {
      for (let key in preview) {
        preview[key].map(({ file }) => {
          let _upload;
          if (key === 'images') {
            _upload = storage.ref(`images/${file.name}`).put(file);
          } else if (key === 'videos') {
            _upload = storage.ref(`videos/${file.name}`).put(file);
          }
          _upload.then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
              if (key === 'images') {
                dispatch(setUploadImageUrlList(url));
              } else if (key === 'videos') {
                dispatch(setUploadVideoUrlList(url));
              }
              if (type === 'add') {
                dispatch(articleAction.addArticleDB(article));
              } else {
                dispatch(articleAction.updateArticleDB(article));
              }
            });
          });
        });
      }
    } else {
      if (type === 'add') {
        dispatch(articleAction.addArticleDB(article));
      } else {
        dispatch(articleAction.updateArticleDB(article));
      }
    }
  };
};

const uploadProfileImg = (file) => {
  return function (dispatch, getState, { history }) {
    dispatch(actionLoading.setLoading(true));

    let _upload = storage.ref(`images/${file.name}`).put(file);
    let username = getState().user.user.username;

    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        const param = { picture: url, username };
        instance.put('user/userprofile/picture', param).then((result) => {
          dispatch(profileAction.getProfileImage(url));
          dispatch(actionLoading.setLoading(false));
          dispatch(postAction.getMyPostDB());
        });
      });
    });
  };
};

const uploadCoverImg = (file) => {
  return function (dispatch, getState, { history }) {
    dispatch(actionLoading.setLoading(true));

    let _upload = storage.ref(`images/${file.name}`).put(file);
    let username = getState().user.user.username;
    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        const param = { cover: url, username };
        instance.put('user/userprofile/cover', param).then((result) => {
          dispatch(profileAction.getCoverImage(url));
          dispatch(actionLoading.setLoading(false));
        });
      });
    });
  };
};

export default handleActions(
  {
    [GET_UPLOAD_IMAGE_URL_LIST]: (state, action) =>
      produce(state, (draft) => {}),
    [SET_UPLOAD_IMAGE_URL_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.upload_img_url.push(action.payload.url);
      }),
    [SET_UPLOAD_VIDEO_URL_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.upload_video_url.push(action.payload.url);
      }),
    [DELETE_ONE_UPLOAD_IMAGE_URL_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.upload_img_url.splice(
          state.upload_img_url.indexOf(action.payload.image),
          1
        );
      }),
    [DELETE_UPLOAD_IMAGE_URL_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.upload_img_url = [];
      }),
  },
  initialState
);

const actionCreators = {
  uploadImageFB,
  getUploadImageUrlList,
  setUploadImageUrlList,
  deleteUploadImageUrlList,
  deleteOneUploadImageUrlList,
  uploadProfileImg,
  uploadCoverImg,
};

export { actionCreators };
