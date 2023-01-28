import React from "react";

const Login = () => {
  return (
    <div className="form">
      <form>
        <h2 className="login-header">Login</h2>
        <div className="input-container">  
          <input type="text" name="uname" required />
          <label>Email </label>
        </div>
        <div className="input-container"> 
          <input type="password" name="pass" required />
          <label>Password </label>
        </div>
        <div className="remember-forget">
          <div className="remember">
            <input type="checkbox"/>
            <label>Remember Me</label>
          </div>
          <div className="forget">
            <a href="/">Forget Password?</a>
          </div>
        </div>
        <div className="button-container">
          <button className="sui" type="submit">Login</button>
        </div>
        <div className="register-link">
            <p>Don't have an account? <a href="http://localhost:3000/signup">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
