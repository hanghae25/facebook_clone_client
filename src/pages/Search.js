import React from "react";
import styled from "styled-components";
import SearchHeader from "../components/SearchHeader";
import SearchBox from "../components/SearchBox";
import SearchedBox from "../components/SearchedBox";
import SearchResultBox from "../components/SearchResultBox";
const Search = () => {
  const [currentValue, setCurrentValue] = React.useState("");
  const [userClick, setUserClick] = React.useState(false);
  return (
    <Container>
      <SearchHeader></SearchHeader>
      <SearchBox
        setCurrentValue={setCurrentValue}
        setUserClick={setUserClick}
      ></SearchBox>
      {userClick ? (
        <SearchResultBox></SearchResultBox>
      ) : (
        <SearchedBox
          setUserClick={setUserClick}
          currentValue={currentValue}
        ></SearchedBox>
      )}
    </Container>
  );
};

const Container = styled.div``;

export default Search;
