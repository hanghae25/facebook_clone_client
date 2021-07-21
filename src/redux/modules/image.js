import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { storage } from "../../shared/firebase";

//action type
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

//action creator
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// initialState
const initailState = {
  image_url: "",
  uploading: false,
  preview: null,
};

// middleware action 파이어스토어에 올려주는거
const uploadImageFB = (image) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));
    const _upload = storage.ref(`images/covers/${image.name}`).put(image);

    _upload.then((snapshot) => {
      console.log(snapshot);

      snapshot.ref.getDownloadURL().then((downloadURL) => {
        dispatch(uploadImage(downloadURL));
      });
    });
  };
};

// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initailState
);

// action creator export
const actionCreators = {
  uploadImage,
  uploadImageFB,
  setPreview,
};

export { actionCreators };
