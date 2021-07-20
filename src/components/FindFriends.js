import React from 'react';
import styled from 'styled-components';

const FindFriends = () => {
  return (
    <React.Fragment>
      <GridBox is_flex>
        <Span bold>친구</Span>
        <Input placeholder="친구 찾기"></Input>
      </GridBox>
      <GreyLine></GreyLine>
    </React.Fragment>
  );
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: flex-startt;`
      : ''}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.flexstart ? `justify-content: flex-start;` : '')}
  ${(props) => (props.spacebetween ? `justify-content: space-between;` : '')}
`;

const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
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

const GreyLine = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  margin: 8px 0px;
  background-color: #ced0d4;
`;

export default FindFriends;
