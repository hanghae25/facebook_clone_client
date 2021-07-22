import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as commentAction } from '../redux/modules/commentLike';

import CommentList from '../components/CommentList';

const CommentPage = () => {
  const dispatch = useDispatch();

  const comment_list = useSelector((state) => state.commentLike.comment_list);

  React.useEffect(() => {
    dispatch(commentAction.setAllCommentDB());
  }, []);

  return (
    <React.Fragment>
      {comment_list.map((p, idx) => {
        return <CommentList key={p.id} {...p} />;
      })}
    </React.Fragment>
  );
};

export default CommentPage;
