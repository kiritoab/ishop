import React from "react";

const Signup = () => {
  return (
    <div className="form-sign">
      <form>

      <h2 className="login-header">SignUp</h2> 
      <div className="input-container">      
          <input type="text" name="uname" required />
          <label>Username </label>
      </div>
      <div className="input-container">
          <input type="text" name="email" required />
          <label>Email </label>
        </div>
      <div className="input-container">  
          <input type="password" name="pass" required />
          <label>Password </label>
      </div>

      <div className="button-container">
         <button className="sui" type="submit">SignUp</button>
      </div>
      <div className="register-link">
        <p>Already have an account? <a href="http://localhost:3000/login">Login</a></p>
      </div>

      </form>
    </div>
  );
};

export default Signup;
