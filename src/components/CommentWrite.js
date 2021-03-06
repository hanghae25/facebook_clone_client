
import React from "react";
import {Image, Grid} from "../elements";
import styled from "styled-components";

import { actionCreators as commentActions} from "../redux/modules/comment";
import {useDispatch, useSelector} from "react-redux";

const CommentWrite = (props) => {
 
    const post_id = props.id;

    console.log(props.id)
    const dispatch = useDispatch();
    const [content, setContent] = React.useState();

        const onChange = (e) => {
            setContent(e.target.value);
        }
        console.log(content)

        const write = () => {
            console.log("post_id : ",post_id);
            dispatch(commentActions.addCommentAPI(post_id, content))
            setContent("");
        }
        console.log(content)

    return(
        <React.Fragment>
            <Grid flex >
                <Image shape="circle" src={props.src} />
                <ReplyInput 
                    placeholder= "  댓글을 입력하세요."
                    onChange={onChange}
                    value={content}
                    is_Submit/>
                <PlusReplyButton 
                    onClick={()=> {write()}}
                >게시</PlusReplyButton>  
            </Grid>
        </React.Fragment>
    );
}

export default CommentWrite;


const ReplyInput = styled.input`
width: 69%;
height: 40px;
border-radius: 30px;
border: 1px solid grey;
margin-left: 10px;
`;

const PlusReplyButton = styled.button`
margin: auto 10px auto 10px;
width: 45px;
height: 38px;
background-color: white;
border: 1px solid grey;
border-radius: 3px;
color: grey;
cursor: pointer;
`;