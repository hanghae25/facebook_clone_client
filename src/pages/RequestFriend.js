import React from "react";
import SearchHeader from "../components/SearchHeader";
import RequestFriendBox from "../components/RequestFriendBox";

import styled from "styled-components";

const RequestFriend = () => {
  return (
    <Container>
      <SearchHeader></SearchHeader>
      <RequestFriendBox></RequestFriendBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
`;

export default RequestFriend;
