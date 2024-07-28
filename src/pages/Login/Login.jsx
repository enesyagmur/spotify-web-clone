import { useFormik } from "formik";
import React, { useState } from "react";
import { loginSchemas } from "../../formSchemas/LoginSchemas";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginFunc = () => {};

  const [showErrors, setShowErrors] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchemas,
    onSubmit: loginFunc,
  });

  const navigate = useNavigate();

  return (
    <div className="auth-screen">
      <div className="auth-screen-main">
        <div className="lg:w-6/12 lg:h-32 flex flex-col items-center justify-around text-white">
          <i className="fa-brands fa-spotify text-6xl"></i>
          <p className="text-xl font-medium">Log in to Spotify</p>
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
          <p className="text-neutral-300 underline text-[10px] cursor-pointer">
            Forgot your password?
          </p>
          <button
            type="submit"
            className="form-button"
            onClick={() => setShowErrors(true)}
          >
            Log in
          </button>

          <i className="form-google-button fa-brands fa-google"></i>
          <p
            className="text-neutral-400 text-[10px] cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Don't have an acount? Sign up.
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

export default Login;
