import React from "react";
import Signin from "./Component/Signin"; // Adjust the import path based on your project structure

import { createBrowserRouter } from "react-router-dom";
import Signup from "./Component/Signup";

const Page = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default Page;
