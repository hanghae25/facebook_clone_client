import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { storage } from "../../shared/firebase";
import instance from "../../shared/firebase";
import { create } from "lodash";
import { actionCreators as actionLoading } from "./loading";

const SET_IMAGE_PREVIEW = "SET_IMAGE_PREVIEW";
const SET_VIDEO_PREVIEW = "SET_VIDEO_PREVIEW";
const DELETE_ONE_IMAGE_PREVIEW = "DELETE_ONE_IMAGE_PREVIEW";
const DELETE_ONE_VIDEO_PREVIEW = "DELETE_ONE_VIDEO_PREVIEW";
const DELETE_ALL_IMAGE_PREVIEW = "DELETE_ALL_IMAGE_PREVIEW";
const initialState = {
  images: [],
  videos: [],
};

const setImagePreview = createAction(SET_IMAGE_PREVIEW, (image) => ({ image }));
const setVideoPreview = createAction(SET_VIDEO_PREVIEW, (video) => ({ video }));
const deleteOneImagePreview = createAction(
  DELETE_ONE_IMAGE_PREVIEW,
  (image) => ({ image })
);
const deleteOneVideoPreview = createAction(
  DELETE_ONE_VIDEO_PREVIEW,
  (video) => ({ video })
);

const deleteAllImagePreview = createAction(DELETE_ALL_IMAGE_PREVIEW);
export default handleActions(
  {
    [SET_IMAGE_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.images.push(action.payload.image);
      }),
    [SET_VIDEO_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.videos.push(action.payload.video);
      }),
    [DELETE_ONE_IMAGE_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.images.splice(state.images.indexOf(action.payload.image), 1);
      }),
    [DELETE_ONE_VIDEO_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.videos.splice(state.videos.indexOf(action.payload.video), 1);
      }),
    [DELETE_ALL_IMAGE_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.images = [];
      }),
  },
  initialState
);

const actionCreators = {
  setImagePreview,
  setVideoPreview,
  deleteOneImagePreview,
  deleteOneVideoPreview,
  deleteAllImagePreview,
};

export { actionCreators };
