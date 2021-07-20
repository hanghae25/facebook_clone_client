
import React from "react";
import {Image, Grid} from "../elements";
import styled from "styled-components";

const CommentWrite = (props) => {

    return(
        <React.Fragment>
            <Grid flex>
                <Image shape="circle" src={props.src} />
                <ReplyInput placeholder= "  댓글을 입력하세요." ></ReplyInput>
                <PlusReplyButton 
                     onClick={() => {
                        history.push("/signup");
                      }>게시</PlusReplyButton>  
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
`;