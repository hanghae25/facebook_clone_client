import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import HeartButton from './HeartButton';

// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';

const Post = (props) => {
  const dispatch = useDispatch();

  // console.log(props.picture.split(','));

  // const pictures = () => {
  //   const images = props.picture.split(',').map((img) => ({
  //     src: img,
  //   }));
  //   console.log(images);
  //   return <Carousel images={images} style={{ height: 500, width: 800 }} />;
  // };

  return (
    <React.Fragment>
      <GridBox bg="#FFFFFF" padding="16px" margin="8px 0px">
        <GridBox is_flex flexstart>
          <ImageCircle
            img="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=dbb9e7&efg=eyJpIjoiYiJ9&_nc_ohc=r2DZdUdfmL8AX8zjovP&_nc_ht=scontent-gmp1-1.xx&oh=7c280ce678e39af2493fef764f492917&oe=60F7C4F8"
            size="36"
          ></ImageCircle>
          <Span bold margin="0px 0px 0px 10px">
            {props.username}
          </Span>
        </GridBox>
      </GridBox>
      <GridBox margin="8px 0px" bg="#FFFFFF">
        <Span size="20px">{props.content}</Span>
        <ImageRec img={props.picture.split(',')[0]}></ImageRec>
      </GridBox>
      <GridBox bg="#FFFFFF" padding="16px" margin="8px 0px">
        <GridBox is_flex spacebetween>
          <Span size="12px" color="#65676B">
            좋아요 {props.articleLikeItCount}개
          </Span>
          <Span size="12px" color="#65676B">
            댓글 {props.commentCount}개
          </Span>
        </GridBox>
        <GreyLine></GreyLine>
        <GridBox is_flex spacebetween>
          <GridBox is_flex flexstart>
            <HeartButton
              // _onClick={(e) => {
              //   e.preventDefault();
              //   e.stopPropagation();
              //   dispatch(postActions.toggleLikeDB(props.id));
              // }}
              is_like={props.is_like}
            ></HeartButton>
            <Span size="12px" color="#151515" margin="0px 0px 0px 4px">
              좋아요
            </Span>
          </GridBox>
          <GridBox is_flex flexstart>
            <CommentImg></CommentImg>
            <Span size="12px" color="#151515" margin="0px 0px 0px 4px">
              댓글
            </Span>
          </GridBox>
        </GridBox>
      </GridBox>
    </React.Fragment>
  );
};

Post.defaultProps = {
  createdAt: '2021-07-11 20:49:00',
  modifiedAt: '2021-07-11 20:49:00',
  id: 99,
  username: '디폴드',
  content: '게시물 작성',
  picture:
    'https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=dbb9e7&efg=eyJpIjoiYiJ9&_nc_ohc=r2DZdUdfmL8AX8zjovP&_nc_ht=scontent-gmp1-1.xx&oh=7c280ce678e39af2493fef764f492917&oe=60F7C4F8',
  video: '',
  commentCount: 25,
  articleLikeItCount: 25,
  articleLikeItChecker: false,
  articleLikeItUserList: [],
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
  ${(props) => (props.is_flex ? `display: flex; align-items: center;` : '')}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.flexstart ? `justify-content: flex-start;` : '')}
  ${(props) => (props.spacebetween ? `justify-content: space-between;` : '')}
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url(${(props) => props.img});
  background-size: cover;
  border-radius: 50%;
`;

const ImageRec = styled.div`
  width: 100%;
  height: 327px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

const CommentImg = styled.div`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/ygqyYKTnj3x.png);
  background-position: 0px -174px;
  background-size: auto;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  display: inline-block;
`;

const GreyLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  margin: 8px 0px;
  background-color: #ced0d4;
`;

const Span = styled.span`
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
`;

export default Post;
