import Header from "./Header";
import { useState } from "react";
const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="text-white bg-black w-3/12 absolute mx-auto my-36 right-0 left-0 p-12 rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-2"> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {!isSignInForm && 
            <input
            className="w-full p-4 my-3 bg-gray-700"
            type="text"
            placeholder="First Name"
          />
        }
        {!isSignInForm && 
            <input
            className="w-full p-4 my-3 bg-gray-700"
            type="text"
            placeholder="Last Name"
          />
        }
        <input
          className="w-full p-4 my-3 bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="w-full p-4 my-3 bg-gray-700"
          type="password"
          placeholder="password"
        />
        <button className="bg-red-700 w-full p-4 my-5 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}> {!isSignInForm ? "Already a user? Sign In" : "New to Netflix? Sign Up now"}</p>
      </form>
    </div>
  );
};

export default Login;
