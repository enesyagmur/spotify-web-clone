import React from "react";

const Login = () => {
  return (
    <div className="auth-screen">
      <div className="auth-screen-main">
        <div className="lg:w-6/12 lg:h-32 flex flex-col items-center justify-around text-white">
          <i className="fa-brands fa-spotify text-6xl"></i>
          <p className="text-xl font-medium">Log in to Spotify</p>
        </div>

        <form className="w-full h-3/6 flex flex-col items-center justify-evenly">
          <input type="text" placeholder="Email" className="form-input-box" />
          <input
            type="password"
            placeholder="Password"
            className="form-input-box"
          />
          <p className="text-neutral-300 underline text-[10px] cursor-pointer">
            Forgot your password?
          </p>
          <button type="submit" className="form-button">
            Log in
          </button>

          <i className="form-google-button fa-brands fa-google"></i>
          <p className="text-neutral-400 text-[10px] cursor-pointer">
            Don't have an acount? Sign up.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
