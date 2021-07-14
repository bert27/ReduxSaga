import React, { useCallback, useState, useEffect } from "react";

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
        <input
          style={{
            border: "2px solid #ced4da",
            background: "#25282A",
            color: "white",
            padding: "10px",
            marginTop: "5px",
            fontSize: "18px",
          }}
          type={type}
          value={value}
          onChange={(e) => onChanges(e)}
        />
      </div>

      {error !== "" && (
        <div
          style={{
            color: "red",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {error}
        </div>
      )}
    </>
  );
};

export default Input;
