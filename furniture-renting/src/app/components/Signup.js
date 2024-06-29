import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Signin.css";

const Signup = () => {
  return (
    <div class="wrapper">
      <form action="../page.js" method="post">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username" required />
          <i class="bx bxs-user"></i>
        </div>
        <div class="input-box">
          <input type="password" placeholder="Password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" class="btn ">
          Login
        </button>
        <div class="register-link">
          <div>
            Dont have an account? <script src="./Signup.js">Register</script>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
