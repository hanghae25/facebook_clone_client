import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

// import instance from "../../shared/config";
// import { setCookie, deleteCookie } from "../../shared/Cookie";
import moment from "moment";

import axios from "axios"; // import 해오것으로 나중에 변경하기

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// action craetors
const setComment = createAction(SET_COMMENT, (post_id, comment_list)=>({post_id, comment_list}));
const addComment = createAction(ADD_COMMENT, (post_id, comment)=>({post_id, comment}));

// initialState
const initialState = {
    list: [{
        content: "페이스북 클론코딩",
        image: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/p160x160/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=r2DZdUdfmL8AX9UnLJE&tn=tQAeeEesgp3mQZ73&_nc_ht=scontent-gmp1-1.xx&oh=a57372edf02002d81ec77f6b09103dbd&oe=60F79ED8",
        insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
    }],
    content: null,
};


const setCommentAPI = () => {
    return function(dispatch, getState, {history}){
        axios({
            url: 'http://13.124.141.66/user/comment/kim/1',
            method: 'get',
            // data: {},
            headers: { 
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
          console.log(response.data);
          dispatch(setComment(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };


const addCommentAPI = (content) =>{
    return function (dispatch, ) {

        const formData = new FormData(); 
        FormData.append("content", content);

        const options = {
            url:  "http://13.124.141.66/user/comment",
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
            data: formData,
        }

        axios(options)
        .then((response,{history}) => {
          console.log(response.data);
          // 방금 업데이트 된 포스트 정보를 받아 정리한다.
          let content_data = {
            content: response.data.content_list.content
          };

          console.log(content_data, content);
          // 리덕스 상태 업데이트
          dispatch(addComment(content_data));
          history.push("/comment");
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
            [SET_COMMENT]: (state, action) => produce(state, (draft) => {
                draft.list = action.payload.content_list;
            }),
    
            [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
                draft.list.unshift(action.payload.content);
            })
        },
        initialState
    );

  // action creator export
    const actionCreators = {
        setComment,
        addComment,
        addCommentAPI,
        setCommentAPI,

    };
    
export { actionCreators };
        
