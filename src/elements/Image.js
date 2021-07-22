import styled from "styled-components";
import React from "react";

// @param {*} props 

// @returns 

const Image = (props) => {
  const {shape, src, size} = props;

  const styles = {
      src: src,
      size: size,
  }

  if(shape === "circle"){
      return (
          <ImageCircle {...styles}></ImageCircle>
      )
  }

  if(shape === "rectangle"){
      return (
          <AspectOutter>
              <AspectInner {...styles}></AspectInner>
          </AspectOutter>
      )
  }

  return (
      <React.Fragment>
          <ImageDefault {...styles}></ImageDefault>
      </React.Fragment>
  )
}
Image.defaultProps = {
  shape: "circle",
  src: "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.30497-1/p160x160/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=r2DZdUdfmL8AX9UnLJE&tn=tQAeeEesgp3mQZ73&_nc_ht=scontent-gmp1-1.xx&oh=a57372edf02002d81ec77f6b09103dbd&oe=60F79ED8",
  size: 36,
};



const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px px ;
`;



export default Image;
