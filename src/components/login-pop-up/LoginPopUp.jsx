import React, { useState } from "react";
import "./loginPop.css";
import { assets } from "../../assets/assets";
const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Username" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required minLength={6} maxLength={14}  />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By Continuing , i agree the terms of use & privacy policy</p>
        </div>
        {currentState === "Sign Up" ? (
          <p>
            Already has account? <span onClick={()=>setCurrentState("Login")}  className="sign">Login here</span>
          </p>
        ) : (
          <p>
            Create Account ? <span onClick={()=>setCurrentState("Sign Up")} className="sign">Click here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
