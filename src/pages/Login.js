import React, { useCallback, useEffect } from "react";

import { Input, Grid } from "../elements";
import { ButtonDefaultCss } from "../common_css/style";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

// 이메일 형식 체크
import { emailCheck } from "../shared/common";

const Login = (props) => {
  const dispatch = useDispatch();

  const [emailAddress, setEmail] = React.useState("");
  const [password, setPwd] = React.useState("");

  const login = () => {
    // 아이디와 패스워드가 있는 지 확인
    if (emailAddress === "" || password === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다. 모두 입력해주세요.");
      return;
    }

    // id가 이메일 형식이 맞나 확인!
    if (!emailCheck(emailAddress)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    // API로그인을 담당하는 함수를 디스패치했어요.
    dispatch(userActions.loginAPI(emailAddress, password));
  };
  console.log(document.cookie.split("=")[1])
  return (
    <Container>
      <Grid center>
        <Image src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
        <Input
          placeholder="이메일 주소"
          type="text"
          value={emailAddress}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="패스워드"
          type="password"
          value={password}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
          is_submit
          onSubmit={login}
        />

        <Button onClick={login}>로그인</Button>
        <p style={{ fontSize: "13.5px" }}>비밀번호를 잊으셨나요?</p>
        <Line />
        <SignButton
          onClick={() => {
            history.push("/signup");
          }}
        >
          새 계정 만들기
        </SignButton>
      </Grid>
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
const Button = styled.button`
  ${ButtonDefaultCss}
  width: 86%;
  height: 50px;
  background-color: #1877f2;
  display: block;
  margin: 13px auto;
  border-radius: 5px;
  color: white;
  font-size: 16px;
`;

const SignButton = styled.button`
  ${ButtonDefaultCss}
  width: 150px;
  height: 42px;
  background-color: #00a400;
  display: block;
  margin: 16px auto;
  border-radius: 5px;
  color: white;
  font-size: 16px;
`;

const Image = styled.img`
  width: 32vw;
  height: 10vh;
`;

const Line = styled.hr`
  width: 85%;
`;

export default Login;
