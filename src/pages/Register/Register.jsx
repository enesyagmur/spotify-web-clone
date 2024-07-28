import { useFormik } from "formik";
import React, { useState } from "react";
import { RegisterSchemas } from "../../formSchemas/RegisterShemas";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const registerFunc = () => {};

  const [showErrors, setShowErrors] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      term: "",
    },
    validationSchema: RegisterSchemas,
    onSubmit: registerFunc,
  });

  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div className="auth-screen-main">
        <div className="lg:w-6/12 lg:h-32 flex flex-col items-center justify-around text-white">
          <i className="fa-brands fa-spotify text-6xl"></i>
          <p className="text-xl font-medium">Sign in to Spotify</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full h-3/6 flex flex-col items-center justify-evenly"
        >
          <input
            id="email"
            value={values.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            className="form-input-box"
          />
          <input
            id="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="form-input-box"
          />
          <div className="w-64 h-10 flex items-center justify-start text-neutral-500 text-[12px]">
            <input
              type="checkbox"
              value={values.term}
              onChange={handleChange}
              id="term"
            />
            <p className="ml-2">Accept the user agreement</p>
          </div>

          <button
            type="submit"
            className="form-button"
            onClick={() => setShowErrors(true)}
          >
            Sign up
          </button>

          <i className="form-google-button fa-brands fa-google"></i>
          <p
            className="text-neutral-400 text-[10px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Do you have acount? Login up.
          </p>
        </form>

        <div className="form-errors">
          {showErrors ? (
            <>
              <p>{errors.email}</p>
              <p>{errors.password}</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Register;
