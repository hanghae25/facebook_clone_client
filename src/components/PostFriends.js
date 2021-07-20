import React from "react";
import styled from "styled-components";

import {
  BlueButtonColor,
  GreyButtonColor,
  ButtonDefaultCss,
} from "../common_css/style";

const PostFriends = () => {
  return (
    <React.Fragment>
      <GridBox is_flex margin="16px 0px">
        <Image
          img="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=r2DZdUdfmL8AX8zjovP&_nc_ht=scontent-gmp1-1.xx&oh=e4f08ca882056ed291e38268194aa795&oe=60F7CE76"
          size="75"
        ></Image>
        <GridBox margin="0px 0px 0px 8px">
          <Span>친구이름</Span>
          <GridBox is_flex>
            <Button blue>친구 추가</Button>
            <GridBox margin="0px 0px 0px 4px">
              <Button> 삭제 </Button>
            </GridBox>
          </GridBox>
        </GridBox>
      </GridBox>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : "")};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: flex-startt;`
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) => (props.flexstart ? `justify-content: flex-start;` : "")}
  ${(props) => (props.spacebetween ? `justify-content: space-between;` : "")}
`;

const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")}
`;

const Input = styled.input`
  margin: 8px;
  border: 1px solid #fff;
  width: 100%;
  height: 18px;
  padding: 12px 8px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #f0f2f5;
  outline: none;
`;

const Image = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url(${(props) => props.img});
  background-size: cover;
  filter: opacity(0.5) drop-shadow(0 0 0 #fff);
`;

const Button = styled.button`
  ${ButtonDefaultCss}
  ${(props) => (props.blue ? `${BlueButtonColor}` : `${GreyButtonColor}`)};
`;

export default PostFriends;
