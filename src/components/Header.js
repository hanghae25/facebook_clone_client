import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { HeadearColor, ButtonDefaultCss } from '../common_css/style';

const Header = (props) => {
  const history = useHistory();

  return (
    <React.Fragment>
      <Grid>
        <HeaderLogo
          logo="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/lu21Uv7wduK.png"
          size="30"
          onClick={() => {
            history.push('/');
          }}
        ></HeaderLogo>
        <Input></Input>
        <Button>검색</Button>
      </Grid>
      <GridTwo bg="#fff">
        <HomeImg>
          <svg
            viewBox="0 0 28 28"
            height="28"
            width="28"
            onClick={() => {
              history.push('/detail');
            }}
          >
            <path d="M17.5 23.979 21.25 23.979C21.386 23.979 21.5 23.864 21.5 23.729L21.5 13.979C21.5 13.427 21.949 12.979 22.5 12.979L24.33 12.979 14.017 4.046 3.672 12.979 5.5 12.979C6.052 12.979 6.5 13.427 6.5 13.979L6.5 23.729C6.5 23.864 6.615 23.979 6.75 23.979L10.5 23.979 10.5 17.729C10.5 17.04 11.061 16.479 11.75 16.479L16.25 16.479C16.939 16.479 17.5 17.04 17.5 17.729L17.5 23.979ZM21.25 25.479 17 25.479C16.448 25.479 16 25.031 16 24.479L16 18.327C16 18.135 15.844 17.979 15.652 17.979L12.348 17.979C12.156 17.979 12 18.135 12 18.327L12 24.479C12 25.031 11.552 25.479 11 25.479L6.75 25.479C5.784 25.479 5 24.695 5 23.729L5 14.479 3.069 14.479C2.567 14.479 2.079 14.215 1.868 13.759 1.63 13.245 1.757 12.658 2.175 12.29L13.001 2.912C13.248 2.675 13.608 2.527 13.989 2.521 14.392 2.527 14.753 2.675 15.027 2.937L25.821 12.286C25.823 12.288 25.824 12.289 25.825 12.29 26.244 12.658 26.371 13.245 26.133 13.759 25.921 14.215 25.434 14.479 24.931 14.479L23 14.479 23 23.729C23 24.695 22.217 25.479 21.25 25.479Z"></path>
          </svg>
        </HomeImg>
        <FriendsImg>
          <svg
            viewBox="0 0 28 28"
            className="a8c37x1j ms05siws hwsy1cff b7h9ocf4 em6zcovv"
            height="28"
            width="28"
            onClick={() => {
              history.push('/request_friend');
            }}
          >
            <path d="M10.5 4.5c-2.272 0-2.75 1.768-2.75 3.25C7.75 9.542 8.983 11 10.5 11s2.75-1.458 2.75-3.25c0-1.482-.478-3.25-2.75-3.25zm0 8c-2.344 0-4.25-2.131-4.25-4.75C6.25 4.776 7.839 3 10.5 3s4.25 1.776 4.25 4.75c0 2.619-1.906 4.75-4.25 4.75zm9.5-6c-1.41 0-2.125.841-2.125 2.5 0 1.378.953 2.5 2.125 2.5 1.172 0 2.125-1.122 2.125-2.5 0-1.659-.715-2.5-2.125-2.5zm0 6.5c-1.999 0-3.625-1.794-3.625-4 0-2.467 1.389-4 3.625-4 2.236 0 3.625 1.533 3.625 4 0 2.206-1.626 4-3.625 4zm4.622 8a.887.887 0 00.878-.894c0-2.54-2.043-4.606-4.555-4.606h-1.86c-.643 0-1.265.148-1.844.413a6.226 6.226 0 011.76 4.336V21h5.621zm-7.122.562v-1.313a4.755 4.755 0 00-4.749-4.749H8.25A4.755 4.755 0 003.5 20.249v1.313c0 .518.421.938.937.938h12.125c.517 0 .938-.42.938-.938zM20.945 14C24.285 14 27 16.739 27 20.106a2.388 2.388 0 01-2.378 2.394h-5.81a2.44 2.44 0 01-2.25 1.5H4.437A2.44 2.44 0 012 21.562v-1.313A6.256 6.256 0 018.25 14h4.501a6.2 6.2 0 013.218.902A5.932 5.932 0 0119.084 14h1.861z"></path>
          </svg>
        </FriendsImg>
      </GridTwo>
    </React.Fragment>
  );
};

const Grid = styled.div`
  ${HeadearColor}
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-content: flex-start;
  justify-content: space-between;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
`;

const GridTwo = styled.div`
  ${HeadearColor}
  height: 36px;
  box-sizing: border-box;
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: stretch;
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')};
`;

const HeaderLogo = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  margin: 8px;
  background-image: url(${(props) => props.logo});
  border-radius: 50%;
  background-size: cover;
  /* filter: opacity(0.5) drop-shadow(0 0 0 #fff); */
`;

const Input = styled.input`
  margin: 8px 0px;
  border: 1px solid #fff;
  width: 60%;
  height: 18px;
  padding: 12px 8px;
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
`;

const Button = styled.button`
  ${ButtonDefaultCss}
  margin: 8px;
  line-height: 0;
  font-size: 12px;
  width: 36px;
  height: 24px;
  display: inline-block;
`;

const HomeImg = styled.div``;
const FriendsImg = styled.div``;

export default Header;
