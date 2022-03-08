import React from 'react';
import '../Css/app.css'
import {useState} from 'react';
import {  useNavigate } from "react-router-dom";
import firebase from 'firebase/compat/app'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { initializeApp } from "firebase/app" ;   
import { getFirestore} from 'firebase/firestore/lite';
import axios from 'axios';
// import {db, auth} from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = { 
    apiKey : "AIzaSyA8Z2QpHFfxqWcLqmgOCi7LXQE4-hGdm9E" , 
    authDomain : "challenge-ab023.firebaseapp.com" , 
    databaseURL : "https://challenge-ab023-default-rtdb.asia-southeast1.firebaseddatabase.app" , 
    projectId : "challenge-ab023" , 
    storageBucket : "challenge-ab023.appspot.com" , 
    messagingSenderId : "407175348461" , 
    appId : "1:407175348461:web:df2a3dc9773771e0cc4ce4" , 
    measurementId : "G-TXRQEQV56Y" 
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('');
    const [show, setShow] = useState(true);
    const [passwordShow, setPasswordShow] = useState('password')
    const handleRegister = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password
        }
        console.log(data);

        axios({
            method: 'put',
            url: 'http://172.16.0.139:8000/account/authentication',
            data: data
          })
          .then(function (response) {
            alert(response.data.msg)
          });


        // const auth = getAuth();
        // const user = auth.currentUser
        
        //   createUserWithEmailAndPassword(auth, email, password)
        //   .then((auth) => {
        //     if (auth) { 
        //         navigate("/");
        //         console.log(auth)
        //       }
        //     updateProfile(auth.currentUser, {displayName: name})    

            
        //   })
        //   .catch((err) => {
        //     alert(err.message);
        //   });

        //   if(user!== null){
        //     const displayName = name;
        //   }
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
           <a href="/">
               
            <img 
            className='login__logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Logo" />
               </a>
            

            <div className="login__container">
                <h2>Create account</h2>
                <form>
                    <h5>Your name</h5>
                    <input 
                    value={name}
                    type="text"
                    onChange = {e => {setName(e.target.value)}}
                    />
                    <h5>Email</h5> 
                    <input 
                    value={email}
                    type="email"
                    onChange={e =>{
                        setEmail(e.target.value);
                    }}
                    />
                    <h5>Password</h5> 
                    <input
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value)
                    }} 
                    placeholder='At least 6 characters'
                    type={passwordShow} 
                    className='signUp__input'
                    />
                    {show ? <span
                        onClick={revealPassword}
                        className='signUp__icon-visibility'
                    ><VisibilityIcon className='signUp_viIcon'/></span> :
                     <span
                     onClick={hidePassword}
                    className='signUp__icon-offvisibility'
                ><VisibilityOffIcon className='signUp_notViIcon'/></span>}
                    {/* <span
                        className='signUp__icon-visibility'
                    ><VisibilityIcon className='signUp_viIcon'/></span>
                     <span
                        className='signUp__icon-offvisibility'
                    ><VisibilityOffIcon className='signUp_notViIcon'/></span> */}
                     <h5>Re-enter password</h5> 
                    <input 
                     className='signUp__input'
                    placeholder='At least 6 characters'
                    type="password" />
                    <button 
                    onClick={handleRegister}
                    className='login__signInButton'>Continue</button>
                </form>

                <p>By continuing, you agree to Amazon's <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.</p>
               
            </div>
     
              
               
        </div>
    )
}

export default SignUp;
