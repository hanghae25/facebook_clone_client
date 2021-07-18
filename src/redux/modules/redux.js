import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from 'axios';


//actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOGIN_CHECK = "LOGIN_CHECK"
const GET_USER = "GET_USER"; 


//actionCreators
const logIn = createAction(LOG_IN, (user) => ({user}));
const logOut = createAction(LOG_OUT, (user) => ({user}));
const loginCheck = createAction(LOGIN_CHECK, (session) => ({session}));
const getUser = createAction(GET_USER, (user) => ({user}));


//initialState
const initialState = {
    user_list: [],
    is_login: false,
};






//Reducer
export default handleActions({
    [LOGIN_CHECK]: (state,action) => produce(state,(draft) => {
        draft.is_login = action.payload.session;
    }),
    [LOG_IN]: (state,action) => produce(state,(draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    [LOG_OUT]: (state,action) => produce(state,(draft) => {
        draft.user = null;
        draft.is_login = false;
    }),
    [GET_USER]: (state, action) => produce(state, (draft) => {
        
    }),

}, initialState);


//action creator export
const actionCreators = {
    loginCheck,
    logIn,
    logOut,
    getUser,
    loginAPI,
    logOutApi,
    SignUPApi,
};

export { actionCreators };