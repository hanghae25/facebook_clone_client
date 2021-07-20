import React from "react";
import {  HeadearColor } from "../common_css/style";
import { Image, Grid, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

// import ThumbsUp from "../components/ThumbsUp";
import thumb_before from "../shared/thumb_before.png";
import text_ballloon from "../shared/text_ballloon.png";
import arrow_icon from "../shared/arrow_icon.png";
import Post from "../components/Post";

import styled from "styled-components"
import CommentWrite from "../components/CommmentWrite";
import CommentList from "../components/CommentList";
const Reply=(props)=> {
    
    const dispatch = useDispatch();
    const id = props.match.params.id;

    const user_info = useSelector((state)=> state.user.user);

    // 리덕스에서 게시글 목록 가져오기
    const post_list = useSelector((store) => store.post.list);
    const post_idx = post_list.findIndex((p)=>p.id === id);
    const post = post_list[post_idx];
    
    React.useEffect(()=>{
      if (post) {
        return;
      }
      // dispatch(postActions.getOnePostDB(id));
    },[]);

    return(

        <React.Fragment>
        
            <Header style={{display:"flex",}}>
                <arrowButton><img src={arrow_icon} alt="arrow" width="10%"></img></arrowButton>
                <Title>글 제목</Title>
            </Header>

            <Grid flex>   
                <Image shape="circle" src={props.src} />
                <Text margin="15px" size= "17px" bold>user_name</Text>
            </Grid>  

            <PostView/>
                
            <Line style={{width:"95%", size : "4px", margin: "22px auto 3px auto" }}/>

            <Grid center is_flex>
                <LikeButton ><img src={thumb_before} alt="likeit" width="18%"/>좋아요</LikeButton> 
                <ReplyButton><img src={text_ballloon} alt="reply" width="18%"/>댓글달기</ReplyButton>
            </Grid>

            <Line style={{ margin: "6px auto" }}/>

            <Grid flex>
                <LikePoint />
                <Text margin="7px" bold>XXX님 외, 10명</Text>
            </Grid>

            <Line/>


            {/* <Grid flex>  
                <Image shape="circle" src={props.src} />
                <ReplyView/> 
            </Grid> */}
            <p style={{fontSize:"12px", margin: "auto 50px"}}> 좋아요       답글 달기      더 보기</p>
            {/* <Grid flex>  
                <Image shape="circle" src={props.src} />
                <ReplyView/> 
            </Grid> */}

            <CommentList/>
            <Line/>
            <CommentWrite/>

        </React.Fragment>
    );
};

const Header = styled.div`
  width: 100%;
  height: 45px;
  ${HeadearColor}
  margin-top: -17px;
`;

const arrowButton = styled.button`
  margin: 10px auto;
  width: 15px;
  height: 15px;
  // background-img: ${arrow_icon}
`;

const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
`;

const PostView = styled.div`
  width: 100%;
  height: 360px;
  background-color: black;
`;

const Line = styled.hr`
  width: 100%;
  boder: 1px solid #d2d2d2;
`;

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

const ReplyView = styled.div`
  width: 50%;
  height: 50px;
  background-color: #dcdcdc;
  border: none;
  border-radius: 15px;
  margin-left: 10px;
`;

const LikePoint = styled.div`
  width: 18px;
  height: 18px;
  border-radius: var(--size);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e");
`;

const LikeButton = styled.button`
  width: 110px;
  height: 35px;
  background-color: white;
  border: none;
  margin-left: 80px;
`;

const ReplyButton = styled.button`
  width: 110px;
  height: 35px;
  background-color: white;
  border: none;
  margin-right: 80px;
`;

export default Reply;
