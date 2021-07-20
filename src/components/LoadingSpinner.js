import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import styled from "styled-components";
const LoadingSpinner = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <>
          {" "}
          <Container></Container>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </>
      )}
    </>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: black;
  opacity: 0.7;
`;

export default LoadingSpinner;
