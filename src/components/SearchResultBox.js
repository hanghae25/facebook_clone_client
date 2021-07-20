import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import instance from "../shared/config";
import RequestFriendIcon from "./RequestFriendIcon";
const SearchResultBox = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  const search_detail_list = useSelector(
    (state) => state.search.search_detail_list
  );

  console.log("search_detail_list : ", search_detail_list);

  return (
    <SearchResultBoxContainer>
      {search_detail_list.map(
        ({ username, changeRequestFriendChecker }, index) => {
          return (
            <SearchResultInner key={index}>
              <SearchResultInnerImg></SearchResultInnerImg>
              <SearchResultInnerContent>
                {username.replace(/[0-9]/g, "")}
              </SearchResultInnerContent>
              <RequestFriendIcon
                friendName={username}
                requestChecker={changeRequestFriendChecker}
              ></RequestFriendIcon>
            </SearchResultInner>
          );
        }
      )}
    </SearchResultBoxContainer>
  );
};

const SearchResultBoxContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  margin: 5px 9px 5px 9px;
  border-radius: 0px;
  overflow: hidden;
  border-style: solid;
  border-width: 1px;
  border-left-color: #c9ccd1;
  border-right-color: #c9ccd1;
  border-top-color: #c9ccd1;
  border-bottom-color: #c9ccd1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: #ffffff;
`;

const SearchResultInner = styled.div`
  padding: 12px 12px 12px 12px;
  display: flex;
  position: relative;
`;

const SearchResultInnerImg = styled.img`
  background: url("https://mblogthumb-phinf.pstatic.net/20140606_111/sjinwon2_1402052862659ofnU1_PNG/130917_224626.png?type=w2")
    no-repeat center;
  background-size: 100% 100%;
  -webkit-background-size: 100% 100%;
  width: 48px;
  height: 48px;
  display: inline-block;
  border-radius: 50%;
`;

const SearchResultInnerContent = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  margin-left: 10px;
`;

export default SearchResultBox;
