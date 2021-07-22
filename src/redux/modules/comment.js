import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

import { actionCreators as postActions } from "./post";

// import instance from "../../shared/config";
// import { setCookie, deleteCookie } from "../../shared/Cookie";
import moment from "moment";
import instance from "../../shared/config";
import { setCookie } from "../../shared/Cookie";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

// action craetors
const setComment = createAction(SET_COMMENT,(comment_list)=>({comment_list}));
const addComment = createAction(ADD_COMMENT, (post_id, comment)=>({post_id, comment}));
const deleteComment = createAction(DELETE_COMMENT, (comment_id)=>({comment_id}))

// initialState
const initialState = {
    list: [],
};


const setCommentAPI = (post_id) => {
  return function (dispatch, getState, {history}) {
    let username = getState().user.user.username;
    instance
      .get(`user/comment/${username}/${post_id}`)
      .then((response) => {
        console.log(response.data)
        let comment_list = response.data;
 
      console.log("comment_list : ",comment_list)
        dispatch(setComment(comment_list));
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          window.alert(error.response.data.errorMessage);
        }
      });
  };
};

const addCommentAPI = (articleId, content) => {
  return function (dispatch,getState,{history}) {
      const username = getState().user.user.username
      const param = {
          articleId,
          content,
          username
    }
    console.log("param : ",param)
    instance.post("user/comment",param).then((result)=>{
        console.log("success",result)
        dispatch(setCommentAPI(articleId))
      })
    };
 };

  const deleteCommentAPI = (username, articleId) => {
    return function (dispatch) {
      instance
        .delete(`user/comment/${username}/${articleId}`,{})
        .then((response) => {
          // console.log(response)
          // 방금 삭제한 코멘트 정보를 리덕스 상태에 업데이트
          dispatch(deleteComment());
          // 코멘트의 숫자를 셀때는 post정보에 포함된 comments 배열의 길이로 숫자를 세서 화면에 표현하므로 post 리덕스의 상태도 수정해주어야 한다.
          dispatch(postActions.oldComment(parseInt()));
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            window.alert(error.response.data.errorMessage);
          }
        });
    };
  };


    // reducer
    export default handleActions(
        {
            [SET_COMMENT]: (state, action) => 
                produce(state, (draft) => {
                draft.list = action.payload.comment_list;
            }),
    
            [ADD_COMMENT]: (state, action) => 
                produce(state, (draft) => {
                draft.list.unshift(action.payload.content);
            }),

            [DELETE_COMMENT]: (state, action) =>
                produce(state,(draft) => {
                  let new_comment_list = draft.list.filter((e) => {
                    if (e.comment_id !== action.payload.comment_id) {
                      return e;
                    } 
                  });
                  draft.list = new_comment_list;
                }),

        },
        initialState
    );

  // action creator export
    const actionCreators = {
        setComment,
        addComment,
        addCommentAPI,
        setCommentAPI,
        deleteCommentAPI,
    };
    
export { actionCreators };
        
