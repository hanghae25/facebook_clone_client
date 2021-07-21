import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const PostWrite = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid onClick={() => history.push("/post_write")}>
        <HeaderLogo logo="https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=r2DZdUdfmL8AX8zjovP&_nc_ht=scontent-gmp1-1.xx&oh=e4f08ca882056ed291e38268194aa795&oe=60F7CE76"></HeaderLogo>
        <HeaderInput>무슨 생각을 하고 계신가요?</HeaderInput>
        <HeaderImageBox>
          <HeaderImageIcon></HeaderImageIcon>
          <HeaderImageTxt>사진</HeaderImageTxt>
        </HeaderImageBox>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  background-color: #fff;
  height: 58px;
  margin-top: 1.5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-content: flex-start;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : "")};
`;

const HeaderLogo = styled.div`
  margin: 8px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-sizing: border-box;
  background-image: url(${(props) => props.logo});
  background-size: cover;
`;

const HeaderInput = styled.div`
  width: 300px;
  height: 34px;
  color: #444950;
  margin: 12px 10px;
  padding: 7px 18px;
  border: 1px solid #ccd0d5;
  border-radius: 20px;
  font-size: 14px;
  box-sizing: border-box;
`;

const HeaderImageBox = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderImageIcon = styled.div`
  background-image: url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/RQFOvVOtfu1.png");
  background-size: 109px 169px;
  background-repeat: no-repeat;
  display: inline-block;
  width: 24px;
  height: 24px;
  background-position: -73px -91px;
`;

const HeaderImageTxt = styled.div`
  color: #444950;
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
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
