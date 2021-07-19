import { createAction, handleActions } from "redux-actions";
import produce, { product } from "immer";
import instance from "../../shared/config";
const GET_SEARCH_LIST = "GET_SEARCH_LIST";
const GET_SEARCH_DETAIL_LIST = "GET_SEARCH_DETAIL_LIST";
const DELETE_SEARCH_LIST_ALL = "DELETE_SEARCH_LIST_ALL";
const DELETE_SEARCH_DETAIL_LIST_ALL = "DELETE_SEARCH_DETAIL_LIST_ALL";

const initialState = {
  search_list: [],
  search_detail_list: [],
};

const getSearchList = createAction(GET_SEARCH_LIST, (search) => ({ search }));
const getSearchDetailList = createAction(GET_SEARCH_DETAIL_LIST, (search) => ({
  search,
}));
const deleteSearchListAll = createAction(DELETE_SEARCH_LIST_ALL);
const deleteSearchDetailListAll = createAction(DELETE_SEARCH_DETAIL_LIST_ALL);
const getSearchListDB = (word) => {
  return function (dispatch, getState, { history }) {
    instance.get(`/user/search/contain-list/${word}`).then((result) => {
      dispatch(getSearchList(result.data));
    });
  };
};

const getSearchDetailListDB = (friendName) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/user/search/exact-list/lee0/${friendName}`)
      .then((result) => {
        const resultData = result.data;
        dispatch(getSearchDetailList(resultData));
      });
  };
};

export default handleActions(
  {
    [GET_SEARCH_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.search_list = action.payload.search;
      }),
    [GET_SEARCH_DETAIL_LIST]: (state, action) =>
      produce(state, (draft) => {
        draft.search_detail_list = action.payload.search;
      }),
    [DELETE_SEARCH_LIST_ALL]: (state, action) =>
      produce(state, (draft) => {
        draft.search_list = [];
      }),
    [DELETE_SEARCH_DETAIL_LIST_ALL]: (state, action) =>
      produce(state, (draft) => {
        draft.search_detail_list = [];
      }),
  },
  initialState
);

const actionCreators = {
  getSearchListDB,
  deleteSearchListAll,
  getSearchDetailListDB,
  deleteSearchDetailListAll,
};

export { actionCreators };
