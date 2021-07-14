import React from "react";
import styled, { keyframes } from "styled-components";
import { useRipple } from "react-use-ripple";
import { useRef } from "react";

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

const ButtonLarge = styled.div`
  background: rgb(16, 185, 223);
  color: white;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  width: 200px;
  height: auto;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    padding: 12px;
    width: 91%;
  }
`;

const Button = (props) => {
  const { onClick, text, disable, big } = props;
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  useRipple(inputRef);

  return (
    <>
      {disable && <ButtonDisable>{text}</ButtonDisable>}

      {!disable && !big && (
        <ButtonS ref={inputRef} onClick={onClick}>
          {text}
        </ButtonS>
      )}
      {!disable && big && (
        <ButtonLarge ref={inputRef} onClick={onClick}>
          {text}
        </ButtonLarge>
      )}
    </>
  );
};

export default Button;
