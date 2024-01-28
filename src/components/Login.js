import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up form -- sign up a new user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid : uid , email : email , displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorMessage);
        });
    } else {
      // sign in form --  sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        className="text-white bg-black w-3/12 absolute mx-auto my-36 right-0 left-0 p-12 rounded-lg bg-opacity-75"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-2">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            ref = {name}
            className="w-full p-4 my-3 bg-gray-700"
            type="text"
            placeholder="First Name"
          />
        )}
        {!isSignInForm && (
          <input
            className="w-full p-4 my-3 bg-gray-700"
            type="text"
            placeholder="Last Name"
          />
        )}
        <input
          ref={email}
          className="w-full p-4 my-3 bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="w-full p-4 my-3 bg-gray-700"
          type="password"
          placeholder="password"
        />
        <p className="p-2 m-2 text-red-600"> {errorMessage} </p>

        <button
          className="bg-red-700 w-full p-4 my-5 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {!isSignInForm
            ? "Already a user? Sign In"
            : "New to Netflix? Sign Up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
