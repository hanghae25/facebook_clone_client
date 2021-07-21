import React from 'react';
import styled from 'styled-components';

import { HeadearColor, ButtonDefaultCss } from '../common_css/style';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
  // const mainLogo = facebook;
  // const pro = userCircle;
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid>
        <HeaderLogoBox>
          <HeaderLogo
            onClick={() => {
              history.push('/detail');
            }}
          ></HeaderLogo>
        </HeaderLogoBox>
        <SearchBox>
          <Search onClick={() => history.push('/search')}>
            <SearchInner></SearchInner>
            <SearchInnerTxt>검색</SearchInnerTxt>
          </Search>
        </SearchBox>
        <CameraIconBox onClick={() => history.push('/post_write')}>
          <CameraIcon></CameraIcon>
        </CameraIconBox>
      </Grid>
      <GridTwo bg="#fff">
        <HomeImg>
          <HomeImgIcon onClick={() => history.push('/')}></HomeImgIcon>
        </HomeImg>
        <FriendImg>
          <FriendImgIcon
            onClick={() => history.push('/request_friend')}
          ></FriendImgIcon>
        </FriendImg>
      </GridTwo>
    </React.Fragment>
  );
};

const Grid = styled.div`
  ${HeadearColor}
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
`;

const SearchBox = styled.div`
  height: 32px;
  width: 65vw;
`;

const Search = styled.a`
  border-bottom: 1px solid #c4d2e7;
  height: 24px;
  position: relative;
  width: 100%;
  display: inline-block;
`;

const SearchInner = styled.span`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png');
  background-size: 31px 1096px;
  background-repeat: no-repeat;
  background-position: 0 -960px;
  display: inline-block;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 40%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SearchInnerTxt = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 0.9rem;
  transform: translate(-50%, -50%);
  color: #fff;
`;

const CameraIconBox = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
`;

const CameraIcon = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png');
  background-repeat: no-repeat;
  background-size: 31px 1096px;
  background-position: 0 -338px;
  display: inline-block;
  height: 20px;
  width: 20px;
`;

const GridTwo = styled.div`
  ${HeadearColor}
  height: 40px;
  box-sizing: border-box;
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: stretch;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
`;

const HeaderLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

const HeaderLogo = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png');
  background-repeat: no-repeat;
  background-size: 31px 1096px;
  background-position: 0 -821px;
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const HomeImg = styled.div`
  width: 69px;
  height: 40px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    border: 1px solid #2a5fde;
    width: 100%;
  }
`;

const HomeImgIcon = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png');
  background-repeat: no-repeat;
  background-size: 31px 1096px;
  background-position: 0 -695px;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const FriendImg = styled.div`
  width: 69px;
  height: 40px;
  position: relative;
`;

const FriendImgIcon = styled.div`
  background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/vrr3rrLnK-r.png');
  background-repeat: no-repeat;
  background-size: 31px 1096px;
  background-position: 0 -422px;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Header;
