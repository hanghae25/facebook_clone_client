import React, { useCallback } from "react";

import { HeadearColor, BlueButtonColor } from "../common_css/style";
import { Grid, Input } from "../elements";
import styled from "styled-components";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import Login from "./Login";

// 이메일 형식 체크
import { emailCheck } from "../shared/common";

const SignUp = (props) => {
  const dispatch = useDispatch();

  const [username, setUserName] = React.useState("");
  const [emailAddress, setEmail] = React.useState("");
  const [password, setPwd] = React.useState("");
  const [passwordChecker, setPwdCheck] = React.useState("");

  const signup = () => {
    if (
      username === "" ||
      emailAddress === "" ||
      password === "" ||
      passwordChecker === ""
    ) {
      window.alert("이름, 이메일 주소, 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 이메일 형식 확인
    if (!emailCheck(emailAddress)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }

    // 비밀번호와 비밀번호 일치하나 확인
    if (password !== passwordChecker) {
      window.alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    // 회원가입 함수를 디스패치함
    dispatch(
      userActions.signupAPI(username, password, passwordChecker, emailAddress)
    );
  };

  return (
    <Container>
      <Header>
        <Title style={{ fontWeight: "bold" }}>Facebook</Title>
      </Header>

      <Grid center>
        <Text style={{ fontWeight: "bold", fontSize: "20px", margin: "15px" }}>
          가입하기
        </Text>
        <Text size="14px">빠르고 쉽습니다.</Text>
      </Grid>

      <Grid center>
        <Input
          placeholder="이름"
          type="text"
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <Input
          placeholder="이메일"
          type="text"
          value={emailAddress}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />
        <Input
          placeholder="비밀번호 확인"
          type="password"
          value={passwordChecker}
          onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        />
      </Grid>

      <Text style={{ fontSize: "3px", width: "90%", margin: "20px auto" }}>
        가입하기 버튼을 클릭하면 Facebook의 약관,데이터 정책 및 쿠키 정책에
        동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며 알림은
        언제든지 옵트아웃 할 수 있습니다.
      </Text>
      <JoinButton onClick={() => signup()}>가입하기</JoinButton>
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

const Header = styled.div`
  width: 100%;
  height: 45px;
  ${HeadearColor}
  margin-top: -17px;
`;

const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 18px;
  padding: 10px 0;
`;

const JoinButton = styled.button`
  width: 60%;
  height: 40px;
  ${BlueButtonColor}
  display: block;
  margin: 8px auto;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
`;

const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  margin: 10px;
`;

export default SignUp;
