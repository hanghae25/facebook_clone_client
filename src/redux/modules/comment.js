import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

import instance from "../../shared/config";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import moment from "moment";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

const DELETE_COMMENT = "DELETE_COMMENT" 

const LOADING = "LOADING";

// action craetors
const setComment = createAction(SET_COMMENT, (post_id, comment_list)=>({post_id, comment_list}));
const addComment = createAction(ADD_COMMENT, (post_id, comment)=>({post_id, comment}));

const deleteComment = createAction(DELETE_COMMENT, (post_id, comment_)=>({}))

// initialState
const initialState = {
    comments: [],
    is_loading: false,
};

// const getCommentDB = (post_id = null) => {
//     return function(dispatch, getState, {history}){
//         // post_id  없으면 바로 리턴
//         if(!post_id){
//             return;
//         } 
//         instance
//         .where("post_id", "==", post_id)
//         .orderBy("insert_dt","desc")
//         .get("/user/comment/{username}/{articleId}")
//         .then((docs)=>{
//             let list = [];
//             docs.forEach((doc)=>{
//                 list.push({ ...doc.data(), id: doc.id });
//             });
//             dispatch(setComment(post_id,list));
//         }).catch(err =>{
//             console.log("댓글 가져오기 실패", post_id, err);
//         });
    
//     }
// }

const addCommentAPI = (post_id, contents) =>{
    return function (dispatch, getState, {history}) {

        const user_info = getState().user.user;
        
        let comment = {
            post_id: post_id,
            emailAddress: user_info.emailAddress,
            user_name: user_info.username,
            user_profile: user_info.user_profile,
            contents: contents,
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
        }

        instance
        .post("/user/comment")
        
    }
}



export default handleActions(
  {
      [SET_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.list[action.payload.post_id] = action.payload.comment_list;
      }),
      [ADD_COMMENT]: (state, action) => produce(state, (draft)=>{
            
      }),
      [LOADING]: (state, action) => produce(state, (draft)=>{
          draft.is_loading = action.payload.is_loading;
      })
  },
  initialState  
);

const actionCreators ={
    // getCommentDB,
    setComment,
    addComment,
}

export  {actionCreators};