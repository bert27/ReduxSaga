import React from "react";
import styled, { keyframes } from "styled-components";
import { useRipple } from "react-use-ripple";
import { useRef } from "react";
const ButtonS = styled.div`
  background: rgb(16, 185, 223);
  color: white;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  width: 5vw;
  height: auto;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    padding: 6px 6px;
    width: 80px;
  }
`;

const ButtonDisable = styled.div`
  background: #9e9e9e;
  color: white;
  text-align: center;
  font-weight: bold;
  width: 5vw;
  padding: 12px 24px;

  @media (max-width: 480px) {
    padding: 6px 6px;
    width: 25vw;
  }
`;

const Button = (props) => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useRipple(inputRef);
  const { onClick, text, disable } = props;

  return (
    <>
      {disable ? (
        <>
          <ButtonDisable>{text}</ButtonDisable>
        </>
      ) : (
        <>
          <ButtonS ref={inputRef} onClick={onClick}>
            {text}
          </ButtonS>
        </>
      )}
    </>
  );
};

export default Button;
