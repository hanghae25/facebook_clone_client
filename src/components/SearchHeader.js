import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

const SearchHeader = () => {
  const history = useHistory();
  return (
    <SearchHeaderBox>
      <BackBtn onClick={() => history.goBack()}></BackBtn>
      <Link to="/">
        <GoHome>Facebook</GoHome>
      </Link>
    </SearchHeaderBox>
  );
};
const SearchHeaderBox = styled.div`
  background: #3b5998;
  height: 100%;
  width: 100%;
  height: 43px;
  z-index: 1;
`;

const BackBtn = styled.div`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png");
  background-size: 31px 1096px;
  background-repeat: no-repeat;
  height: 20px;
  width: 20px;
  background-position: 0 -170px;
  position: absolute;
  left: 10px;
  top: 12px;
`;
const GoHome = styled.div`
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  line-height: 44px;
  min-height: 44px;
  overflow: hidden;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
`;

export default SearchHeader;
