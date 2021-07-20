import React from 'react';
import styled from 'styled-components';

const PostWrite = () => {
  return (
    <React.Fragment>
      <Grid>
        <HeaderLogo logo="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=r2DZdUdfmL8AX8zjovP&_nc_ht=scontent-gmp1-1.xx&oh=e4f08ca882056ed291e38268194aa795&oe=60F7CE76"></HeaderLogo>
        <HeaderInput placeholder="게시글을 작성하세요"></HeaderInput>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  margin-top: 8px;
  background-color: #fff;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-content: flex-start;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
`;

const HeaderLogo = styled.div`
  margin: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-sizing: border-box;
  background-image: url(${(props) => props.logo});
  background-size: cover;
`;

const HeaderInput = styled.input`
  margin: 8px;
  border: 1px solid #f0f2f5;
  height: 18px;
  padding: 12px 8px;
  color: #757575;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #f0f2f5;
  outline: none;
`;

const HeaderButton = styled.button`
  margin: 8px;
  line-height: 0;
  font-size: 12px;
  width: auto;
  height: 24px;
  color: #757575;
  border-radius: 8px;
  box-sizing: border-box;
  border: none;
  outline: none;
`;

export default PostWrite;
