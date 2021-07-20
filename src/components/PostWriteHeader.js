import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const PostWriteHeader = () => {
  const history = useHistory();

  return (
    <Header>
      <HeaderInner>
        <HeaderLeft>
          <HeaderLeftBack>
            <HeaderLeftBackImg
              onClick={() => {
                history.push("/");
              }}
            ></HeaderLeftBackImg>
          </HeaderLeftBack>
          <HeaderLeftText>게시물 만들기</HeaderLeftText>
        </HeaderLeft>
        <HeaderMiddleBox></HeaderMiddleBox>
        <HeaderRight>
          <HeaderRightBtn>게시</HeaderRightBtn>
        </HeaderRight>
      </HeaderInner>
    </Header>
  );
};

const Header = styled.div`
  background-color: #fff;
  color: #3e4042;
  height: 48px;
  line-height: 48px;
  overflow: hidden;
  padding: 0 15px;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
`;

const HeaderInner = styled.div`
  display: flex;
`;

const HeaderLeft = styled.div``;

const HeaderLeftBack = styled.div`
  display: inline;
  margin: 0 4px 0 -8px;
  padding: 8px;
`;

const HeaderLeftBackImg = styled.i`
  vertical-align: middle;
  background: url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/RQFOvVOtfu1.png")
    no-repeat;
  width: 24px;
  height: 24px;
  display: inline-block;
  background-size: 109px 169px;
  background-position: -48px -91px;
`;

const HeaderLeftText = styled.div`
  display: inline;
  font-size: 16px;
  font-weight: bold;
  line-height: inherit;
  vertical-align: middle;
`;

const HeaderMiddleBox = styled.div`
  flex: 1;
  min-width: 0;
  width: 0;
`;

const HeaderRight = styled.div`
  display: inline-block;
  line-height: 48px;
  padding-left: 12px;
`;

const HeaderRightBtn = styled.div`
  background: none;
  border: none;
  color: #2d88ff;
  font-size: 16px;
  font-weight: bold;
  line-height: inherit;
  padding: 0;
`;

export default PostWriteHeader;
