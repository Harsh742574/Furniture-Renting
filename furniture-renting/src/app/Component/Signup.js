import React from "react";

const signup = () => {
  return (
    <div>
      <div>
        Login
        <div>
          <input type="email" />
          <label htmlFor="">Your Email</label>
        </div>
        <div>
          <input type="email" />
          <label htmlFor="">Your Email</label>
        </div>
        <div>
          <div>
            <input type="checkbox" name="" id="" />
            <label htmlFor="Remember Me"></label>
          </div>
          <span>Forget Password</span>
        </div>
        <button type="Submit">Login</button>
        <div>
          <span>
            New Here?<Link to="Register">Create an Account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default signup;
