import React, { useState } from "react";
import FormInput from "../components/form/FormInput";
import "./form.scss";

const Form = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  const Inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Please enter a valid user without special character (atleast 3, with numbers and letters only)",
      required: true,
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please Enter a Valid Email",
      required: true,
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      errorMessage: "",
      label: "Birthday",
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",

      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      pattern: user.password,
      required: true,
      label: "Confirm Password",
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onChanged = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  console.log("user=>", user);
  return (
    <div className="formPage">
      <form onSubmit={submitHandler}>
        <h1>Register</h1>
        {Inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={user[input.name]}
              onChange={onChanged}
            />
          );
        })}

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
