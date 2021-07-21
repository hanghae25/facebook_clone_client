import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/config";
import { actionCreators as actionLoading } from "./loading";
const GET_PROFILE_IMAGE = "GET_PROFILE_IMAGE";
const GET_COVER_IMAGE = "getProfileImage";
const getProfileImage = createAction(GET_PROFILE_IMAGE, (profile) => ({
  profile,
}));

const getCoverImage = createAction(GET_COVER_IMAGE, (cover) => ({ cover }));
const initialState = {
  profileImg: "",
  coverImg: "",
};

const getProfileImageDB = () => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.user.username;
    instance.get(`user/userprofile/picture/${username}`).then((result) => {
      console.log("프로필이미지 결과 : ", result.data);
      dispatch(getProfileImage(result.data));
    });
  };
};

const getCoverImageDB = () => {
  return function (dispatch, getState, { history }) {
    const username = getState().user.user.username;
    instance.get(`user/userprofile/cover/${username}`).then((result) => {
      dispatch(getCoverImage(result.data));
    });
  };
};

export default handleActions(
  {
    [GET_PROFILE_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.profileImg = action.payload.profile;
      }),
    [GET_COVER_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.coverImg = action.payload.cover;
      }),
  },
  initialState
);

const actionCreators = {
  getProfileImageDB,
  getProfileImage,
  getCoverImage,
  getCoverImageDB,
};

export { actionCreators };
