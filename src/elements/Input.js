import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

// 인풋 컴포넌트
/**
 * 
 * @param {*} props 
 * - label 인풋 박스 위에 넣어줄 텍스트 
 * - placeholder 인풋 박스에 미리 넣어줄 텍스트
 * - _onChange 인풋에 들어갈 값(text, file 등)이 변경되면 실행할 함수
 * - type 인풋 박스의 타입 (file, text 등)
 * - multiline 여러 줄(엔터 포함)을 보여줄 지 말지 여부 (input과 textarea로 분기할거예요.)
 * - value 인풋 박스의 값
 * - is_submit 엔터키 이벤트를 줄지 말지 여부 boolean
 * - onSubmit 엔터키 이벤트에서 실행할 함수(onKeyPress 이벤트를 사용해요!)
 * @returns 
 */
const Input = (props) => {
  const {
    label,
    placeholder,
    onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={onChange} />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  is_submit: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  width: 86%;
  height: 50px;
  background-color: #F5F6F7;
  border: none;
  // boder-color: 1px solid gray;
  border-radius: 5px;
  display: block;
  margin: 8px auto;
`;

const ElInput = styled.input`
  width: 86%;
  height: 50px;
  background-color: #F5F6F7;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 8px auto;
`;

export default Input;