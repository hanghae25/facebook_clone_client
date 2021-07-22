import React from 'react';
import styled from 'styled-components';

const HeartButton = (props) => {
  if (props.articleLikeItChecker) {
    return (
      <React.Fragment>
        <HeartBlue onClick={props._onClick}></HeartBlue>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <HeartGray onClick={props._onClick}></HeartGray>
    </React.Fragment>
  );
};

const HeartBlue = styled.div`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/a_ieQGMLvmF.png);
  background-position: 0px -193px;
  background-size: 25px 817px;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  display: inline-block;
  filter: invert(32%) sepia(77%) saturate(5587%) hue-rotate(203deg)
    brightness(101%) contrast(96%);
  cursor: pointer;
`;

const HeartGray = styled.div`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/a_ieQGMLvmF.png);
  background-position: 0px -212px;
  background-size: 25px 817px;
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  display: inline-block;
  cursor: pointer;
`;

export default HeartButton;
