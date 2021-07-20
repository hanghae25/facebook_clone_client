import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import jwt_decode from "jwt-decode";

import instance from "../../shared/config";
import { setCookie, deleteCookie, getCookie } from "../../shared/Cookie";
//actions
const LOG_IN = "LOG_IN"; // 로그인
const LOG_OUT = "LOG_OUT"; // 로그아웃
const LOGIN_CHECK = "LOGIN_CHECK";
const GET_USER = "GET_USER"; // 유저정보 가져오기

//actionCreators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user_list: [],
  user: null,
  is_login: false,
};

// 로그인 API
const loginAPI = (emailAddress, password) => {
  return function (dispatch, getState, { history }) {
    const user_login = { emailAddress, password };
    console.log(user_login);

    instance
      .post("user/login", user_login)
      .then((result) => {
        console.log(result);
        const accessToken = result.data; // API 요청하는 콜마다 해더에 accessTocken 담아 보내도록 설정
        instance.defaults.headers.common["Authorization"] = `${accessToken}`;
        setCookie("token", accessToken, 1, "/");
        dispatch(
          logIn({
            username: "uaername",
          })
        );
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        window.alert("로그인 실패");
      });
  };
};

// 로그아웃 API
const logOutAPI = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token");
    instance.defaults.headers.common["Authorization"] = null;
    delete instance.defaults.headers.common["Authorization"];
    dispatch(logOut());
    history.replace("/");
  };
};

// 회원가입 API
const signupAPI = (username, password, passwordChecker, emailAddress) => {
  return function (dispatch, getState, { history }) {
    const user = { username, password, passwordChecker, emailAddress };
    console.log(user);

    instance.post("user/signup", user).then((result) => {
      console.log("가입완료");
      history.push("/login");
      window.alert("회원가입 완료. 환영합니다!");
    });
  };
};

const loginCheck = () => {
  return function (dispatch, getState, { history }) {
    if (getCookie("token")) {
      const token = getCookie("token");
      var decoded = jwt_decode(token);
      instance.defaults.headers.common["Authorization"] = `${token}`;
      dispatch(
        logIn({
          username: decoded.sub,
        })
      );
    }
  };
};

//Reducer
export default handleActions(
  {
    [LOGIN_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = action.payload.session;
      }),
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  logIn,
  logOut,
  getUser,
  loginAPI,
  logOutAPI,
  signupAPI,
  loginCheck,
};

export { actionCreators };
