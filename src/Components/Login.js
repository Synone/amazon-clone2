import React from "react";
import "../Css/app.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [passwordShow, setPasswordShow] = useState('password')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    document.title = "Sign in your Amazon account";
  });

  const handleSignIn = (e) => {
    e.preventDefault();
  //   const data = {
  //     email: email,
  //     password: password
  // }
  //   console.log(data);

  //   axios({
  //     method: 'post',
  //     url: 'http://172.16.0.139:8000/account/authentication',
  //     data: data
  //   })
  //   .then(function (response) {
  //     console.log(response)
  //   });
    navigate('/')

  //   const auth = getAuth();
  //     signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(user.email);
  //   if(user){
  //       navigate('/')
  //   }
     
  // })
 
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  // });
 
  };
  const revealPassword = () =>{
    setShow(false)
    setPasswordShow('text')
  }
  const hidePassword = () =>{
    setShow(true)
    setPasswordShow('password')
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="Logo"
        />
      </Link>

      <div className="login__container">
        <h2>Sign-In</h2>
        <form>
          <h5>E-mail or mobile phone number</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={passwordShow}
          />
          {show ? <span
                        onClick={revealPassword}
                        className='signUp__icon-visibility'
                    ><VisibilityIcon className='signUp_viIcon'/></span> :
                     <span
                     onClick={hidePassword}
                    className='signUp__icon-offvisibility'
                ><VisibilityOffIcon className='signUp_notViIcon'/></span>}
          <button
            type="submit"
            onClick={handleSignIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>
      </div>
      <div className="login__newAccount">
        <h5>New to Amazon?</h5>
      </div>
      <div className="login__createAccountButton">
        <Link to="/signup">
          <button
            // onClick={handleRegister}
            className="login__registerButton"
          >
            Create your Amazon account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
