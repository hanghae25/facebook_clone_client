import React, { useRef } from "react";
import styled from "styled-components";
import { actionCreators as searchAction } from "../redux/module/search";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const SearchBox = (props) => {
  const { setCurrentValue, setUserClick } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const inputRef = useRef();
  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    if (inputValue === "") {
      dispatch(searchAction.deleteSearchListAll());
    } else {
      dispatch(searchAction.getSearchListDB(inputValue));
    }
    setCurrentValue(inputValue);
  };
  const handleChange = (e) => {
    setUserClick(false);
    handleSearch();
  };
  const handleDeleteInputValue = () => {
    inputRef.current.value = "";
    handleSearch();
  };

  const cancleSearch = () => {
    history.push("/");
  };
  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchIcon></SearchIcon>
        <SearchInput onChange={handleChange} ref={inputRef}></SearchInput>
        <DeleteSearchText
          onClick={() => {
            handleDeleteInputValue();
          }}
        ></DeleteSearchText>
      </SearchWrapper>
      <CancleSearch onClick={() => cancleSearch()}>취소</CancleSearch>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  width: 100%;
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #fff;
  position: relative;
  border-bottom: 1.5px solid #e3e6e9;
`;

const SearchWrapper = styled.div`
  width: 87vw;
  height: 32px;
  background-color: #e3e6e9;
  border-radius: 16px;
  position: relative;
`;

const SearchInput = styled.input`
  padding-left: 7vw;
  border: none;
  height: 32px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #e3e6e9;
  position: absolute;
  outline: none;
  left: 10px;
  width: 85%;
`;

const SearchIcon = styled.div`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png");
  background-repeat: no-repeat;
  background-size: 31px 1096px;
  background-position: 0 -994px;
  height: 16px;
  width: 16px;
  position: absolute;
  z-index: 1;
  left: 4%;
  top: 50%;
  transform: translateY(-50%);
`;
const DeleteSearchText = styled.div`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 31px 1096px;
  height: 4vh;
  width: 9vw;
  position: absolute;
  right: 0;
`;

const CancleSearch = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3vw;
  color: #444950;
  font-size: 14px;
`;

export default SearchBox;
