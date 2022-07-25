import React, { useState } from "react";
import "./formInput.scss";
const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  console.log("id=", id);
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="form-Input">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        autoComplete="new-password"
        onBlur={handleFocus}
        focused={focused.toString()}
        onfocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
