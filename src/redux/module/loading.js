import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_LOADING = "SET_LOADING";

const setLoading = createAction(SET_LOADING, (loading) => ({ loading }));

const initialState = {
  loading: false,
};

export default handleActions(
  {
    [SET_LOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.loading = action.payload.loading;
      }),
  },
  initialState
);

const actionCreators = {
  setLoading,
};

export { actionCreators };
