import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { removeUser, addUser } from "../utils/userSlice";
import { toggleShowGptSearchView } from "../utils/gptSlice";
import { BG_IMG, SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/langSlice";
const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
          }).catch((error) => {
            // An error happened.
            //navigate("/error")
          });
    }
    const handleGptSearchButtonClick = () => {
      // Toggle Gpt Search view
      dispatch(toggleShowGptSearchView());
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              // ...
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid : uid , email : email , displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
            }
          });
          // unsubscribe when component unmounts.
          return () => unsubscribe();
    }, []);
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }
    const showGptSearch = useSelector(store => store.gpt.showGptSearchView)
    const lang = useRef();
    return(
        <div className="w-screen px-8 py-2 bg-gradient-to-b from-black z-10 absolute flex justify-between">
            <img className="w-64"
            src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt = "netflixLogo" />
            {
                user && 
                <div className="flex">
                  {
                    showGptSearch && 
                    <select className="px-3 mx-2 my-6 h-10 bg-gray-800 text-white" onChange = {handleLanguageChange}>
                    {
                      SUPPORTED_LANGUAGES.map(lang => {
                        return <option value={lang.identifier} key = {lang.identifier}> {lang.name} </option>
                      })
                    }
                    </select>
                  }
                <button className="bg-purple-500 text-white px-4 h-10 my-6 rounded-lg" onClick = {handleGptSearchButtonClick}> {showGptSearch ? "Home" : "Gpt Search"} </button>
                <img src= {BG_IMG}
                alt = "icon" 
                className="w-{100px} h-20 p-2"/>
                <button className="text-red-200 font-bold" onClick={handleSignOut}> (Sign out) </button>
            </div>
            }
            
        </div>
    )
}

export default Header;