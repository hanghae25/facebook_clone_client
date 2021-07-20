import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as searchAction } from "../redux/module/search";
const SearchedBox = ({ currentValue, setUserClick }) => {
  const searchedWord = useSelector((state) => state.search.search_list);
  const dispatch = useDispatch();

  const showDetailList = (friendName) => {
    dispatch(searchAction.getSearchDetailListDB(friendName));
  };
  const keyUpHandler = (currentValue) => {
    const searchedPara = document.querySelectorAll(".text");
    if (searchedPara.length > 0) {
      const words = currentValue;
      const regex = RegExp(words, "gi");
      const replacement = "<strong style=color:#3b5998>" + words + "</strong>";

      for (let i = 0; i < searchedPara.length; i++) {
        const newHTML = searchedPara[i].textContent.replace(regex, replacement);
        searchedPara[i].innerHTML = newHTML;
      }
    }
  };

  useEffect(() => {
    keyUpHandler(currentValue);
  }, [searchedWord]);
  return (
    <>
      {searchedWord.map((value, index) => {
        return (
          <SearchedBoxContainer
            key={index}
            onClick={() => {
              setUserClick(true);
              showDetailList(value);
            }}
          >
            <SearchedBoxIcon></SearchedBoxIcon>
            <SearchedBoxText className="text">{value}</SearchedBoxText>
          </SearchedBoxContainer>
        );
      })}
    </>
  );
};

const SearchedBoxContainer = styled.div`
  background-color: #fff;
  padding: 0 6px;
  height: 42px;
  width: 100%;
  position: relative;
`;

const SearchedBoxIcon = styled.div`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png");
  background-repeat: no-repeat;
  background-size: 31px 1096px;
  background-position: 0 -977px;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5vw;
`;

const SearchedBoxText = styled.div`
  align-items: center;
  display: flex;
  margin: 0 6px;
  min-height: 42px;
  min-width: 0;
  padding-left: 10vw;
  font-size: 15px;
`;

export default SearchedBox;
