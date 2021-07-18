import React from "react";
import {ButtonDefaultCss} from "../common_css/Style";

import styled from "styled-components"

const Login =(props) => {

    return(
        <React.Fragment>
            <Center>
                <Image src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
                <InputBox placeholder="  이메일 주소"></InputBox>
                <InputBox placeholder="  패스워드"></InputBox> 
                <Button>로그인</Button>        
                <p style={{fontSize:"15px"}}>비밀번호를 잊으셨나요?</p>
                <Line/>
                <SignButton>새 계정 만들기</SignButton>
            </Center>
        </React.Fragment>
    );
};

const Center = styled.div`
    width: 100%;
    text-align: center;
`;

const InputBox = styled.input`
    width: 86%;
    height: 50px;
    background-color: #F5F6F7;
    border: none;
    boder-color: 1px gray;
    border-radius: 5px;
    display: block;
    margin: 8px auto;
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
    width: 160px;
    height: 45px;
    background-color: #00A400;    
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