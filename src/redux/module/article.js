import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/config";
import { useSelector, useDispatch } from "react-redux";

import { storage } from "../../shared/firebase";
import axios from "axios";
import { actionCreators as actionLoading } from "./loading";
import { actionCreators as uploadAction } from "./upload";

const SET_ARTICLE = "SET_ARTICLE";
const ADD_ARTICLE = "ADD_ARTICLE";
const GET_ONE_ARTICLE = "GET_ONE_ARTICLE";
const initialState = {
  article: {
    username: "김건우1",
    content: "",
  },
  article_list: [],
  one_article: {},
};

const setArticle = createAction(SET_ARTICLE, (acticle) => ({ acticle }));
const getOneArticle = createAction(GET_ONE_ARTICLE, (article) => ({ article }));
const getOneArticleDB = (articleId) => {
  return function (dispatch, getState, { history }) {
    instance.get(`user/article/${articleId}`).then((result) => {
      dispatch(getOneArticle(result.data));
      history.push("/post_update");
    });
  };
};
const addArticleDB = (article) => {
  return function (dispatch, getState, { history }) {
    const picture = getState().upload.upload_img_url;
    const video = getState().upload.upload_video_url;

    const pictureParam = picture.join(",");
    const videoParam = video.join(",");

    console.log("picture: ", picture);
    console.log("addArticle 실행 ");

    const param = {
      ...article,
      picture: pictureParam,
      video: videoParam,
    };

    console.log("param : ", param);
    instance
      .post(`/user/article`, param)
      .then((result) => {
        dispatch(actionLoading.setLoading(false));
        history.replace("/");
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };
};

const updateArticleDB = (article) => {
  return function (dispatch, getState, { history }) {
    const picture = getState().upload.upload_img_url;
    const video = getState().upload.upload_video_url;
    const articleId = getState().article.one_article.id;
    const pictureParam = picture.join(",");
    const videoParam = video.join(",");

    const param = {
      ...article,
      picture: pictureParam,
      video: videoParam,
    };
    instance
      .put(`/user/article/${articleId}`, param)
      .then((result) => {
        dispatch(actionLoading.setLoading(false));
        history.replace("/detail");
      })
      .catch((error) => {
        console.log("error : ", error);
      });
  };
};

export default handleActions(
  {
    [GET_ONE_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.one_article = action.payload.article;
      }),
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
  getOneArticleDB,
  updateArticleDB,
};

export { actionCreators };
