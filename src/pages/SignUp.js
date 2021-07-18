import React from "react";
import {HeadearColor} from "../common_css/Style";

import styled from "styled-components"

const SignUp= (props) => {

    return(
        <React.Fragment>
            <Header>
                <Title style={{fontWeight:"bold"}}>Facebook</Title>
            </Header>
            <Center>
                <Text style ={{fontWeight : "bold" , fontSize: "20px", margin:"15px"}}>가입하기</Text>
                <Text size="14px">빠르고 쉽습니다.</Text>
                <JoinInput placeholder= "이름"></JoinInput>
                <JoinInput placeholder= "이메일"></JoinInput>
                <JoinInput placeholder= "비밀번호"></JoinInput>
                <JoinInput placeholder= "비밀번호 확인"></JoinInput>
            </Center>    
                <Text style={{fontSize: "3px", width:"90%",margin:"20px auto"}}>
                    가입하기 버튼을 클릭하면 Facebook의 약관,데이터 정책 및 쿠키 정책에 동의하게 됩니다.
                    Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트아웃 할 수 있습니다.
                </Text>
                <JoinButton>가입하기</JoinButton>
            

        </React.Fragment>
    );
};

const Header = styled.div`
    width: 100%;
    height: 45px;
    ${HeadearColor}
    margin-top: -17px;

`; 


const Center = styled.div`
    text-align: center;
`;

const Title = styled.p`
    color: white;
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
`;

const JoinInput = styled.input`
    width: 86%;
    height: 50px;
    margin: 7px;
    background-color: #F5F6F7;
    border: none;
    boder-color: 1px gray;
    border-radius: 5px;
    display: block;
    margin: 6px auto;
`;

const JoinButton = styled.button`
    width: 50%;
    height: 40px;
    background-color: #1877f2;    
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