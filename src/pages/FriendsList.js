import React from 'react';

import Header from '../components/Header';
import FindFriends from '../components/FindFriends';
import PostFriends from '../components/PostFriends';

const FriendsList = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <FindFriends></FindFriends>
      <PostFriends />
      <PostFriends />
      <PostFriends />
      <PostFriends />
      <PostFriends />
      <PostFriends />
    </React.Fragment>
  );
};

export default FriendsList;
