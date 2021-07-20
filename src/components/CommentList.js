import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import {useDispatch, useSelector} from "react-redux";
import {actionCreators as commentActions} from "../redux/modules/comment";

const CommentList = (props) => {

  const dispatch = useDispatch();
  const comment_list = useSelector(state => state);
  console.log(comment_list);
  
  const {post_id} = props;

  React.useEffect(() => {
    if(!comment_list[post_id]){
      // 코멘트 정보가 없으면 불러오기
      dispatch(commentActions.getCommentFB(post_id));
    }
  }, []);

  // comment가 없거나, post_id가 없으면 넘겨주지 않음.
  if(!comment_list[post_id] || !post_id){
    return null;
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        {comment_list[post_id].map(c => {
          return (<CommentItem key={c.id} {...c}/>);
        })}
      </Grid>
    </React.Fragment>
  );
};

CommentList.defaultProps = {
  post_id: null
};

export default CommentList;

const CommentItem = (props) => {

    const {user_profile, username, post_id, contents, insert_dt} = props;
    return (
        <Grid is_flex>
            <Grid is_flex width="auto">
                <Image shape="circle" src={props.src}/>
                <Text bold>{username}</Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <ReplyView>
                <Text margin="0px">{contents}</Text>
                <Text margin="0px">{insert_dt}</Text>
                </ReplyView>
            </Grid>
        </Grid>
    )
}

CommentItem.defaultProps = {
    user_profile: "",
    user_name: "mean0",
    user_id: "",
    post_id: 1,
    contents: "페이스북 클론코딩",
    insert_dt: '2021-01-01 19:00:00'
}

const ReplyView = styled.div`
    width: 50%;
    height: 50px;
    background-color: #dcdcdc;
    border: none;
    border-radius: 15px;
    margin-left: 10px;
`;


