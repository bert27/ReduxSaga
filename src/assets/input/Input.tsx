import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import imageIncorrectlyInput from "images/incorrectly.png";

const InputStyle = styled.input`
  border: 2px solid rgb(206, 212, 218);
  background: rgb(37, 40, 42);
  color: white;
  padding: 10px;
  margin-top: 5px;
  font-size: 18px;
`;

const Error = styled.div`
  color: #ec8686;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 18px;
  background: #10b9df29;
  padding: 10px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const IcoError = styled.img`
  width: 15px;
  height: 15px;

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
  }
`;

const Input = (props) => {
  const { name, type, onChange, error } = props;
  const [value, setvalue] = useState("");
  const [marginStyle, setmarginStyle] = useState({ marginBottom: "45px" });
  useEffect(() => {
    if (error) {
      setmarginStyle({ marginBottom: "20px" });
    } else {
      setmarginStyle({ marginBottom: "45px" });
    }
  }, [error]);

  const onChanges = useCallback(
    (e) => {
      setvalue(e.target.value);
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <>
      <div style={marginStyle}>
        <div>{name}:</div>
        <InputStyle type={type} value={value} onChange={(e) => onChanges(e)} />
      </div>

      {error !== "" && (
        <Error>
          <div>{error}</div>
          <div>
            <IcoError
              src={imageIncorrectlyInput}
              alt="check"
              className="PicPlugTD"
            />
          </div>
        </Error>
      )}
    </>
  );
};

export default Input;
