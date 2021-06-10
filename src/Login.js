import React, { useState } from "react";
import "./Login.css";
import FB from "./images/project.png";
import Fb from "./images/Facebook-Logo.svg";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import axios from "axios";

function Login() {
  const [state, dispatch] = useStateValue();
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser("");
  };
  const signUp2 = (e) => {
    // alert('A name was submitted: ' + this.state.email + this.state.password);
    e.preventDefault();
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        for (const arr in response.data) {
          console.log(response.data[arr].username);
          if (user == response.data[arr].username) {
            dispatch({
              type: actionTypes.SET_USER,
              user: response.data[arr],
            });
          }
        }
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_logo">
        <img src={FB} alt="Fb_logo" />
        <h1>Go-Findme</h1>
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
      <input
        type="text"
        placeholder="UserName"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      <Button type="submit" onClick={signUp2}>
        Sign In 2
      </Button>
    </div>
  );
}

export default Login;
