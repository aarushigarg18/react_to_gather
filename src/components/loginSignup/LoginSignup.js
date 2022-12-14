import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import "./login.css"

const LoginSignUp = () => {

    if(localStorage.getItem('name')==="")
    {
        localStorage.setItem('name',"avatar")
        window.location.reload(false);
    }
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("");
    const changeDetail =(event)=>
    {
        const nametype=event.target.name;
        const value=event.target.value;
        if(nametype === "email")
        {
            setEmail(value);
        }
        else if(nametype === "password"){
            setPassword(value);
        }
       
    }
    function login2()
    {
      fetch(`https://climex-5bd2f-default-rtdb.firebaseio.com/users.json`)
        .then(results => results.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if(data[i].email===email&&data[i].password===password)
                {
                localStorage.setItem('name',data[i].name);
                localStorage.setItem('email',data[i].email);
                localStorage.setItem('password',data[i].password);
                alert("Welcome back");
                navigate('/');
                return;
                }
            }
            alert("Wrong Credentials");
        })
    }


    window.onload = function() {
        const container = document.getElementById('container-1');
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
    };


    return (
        <div className="outerlogin-container d-flex align-item-center justify-content-center">
            <div className="container-1" id="container-1">
                <div className="form-container-1 sign-up-container-1">
                    <form className="signIn-form-tag" action="#">
                        <h1 className="signIn-h1-tag">Create Account</h1>
                        <div className="social-container-1">
                            <ul className="social-icons login-icon-container">
                                <li><a className="facebook" href="/login-signup"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="google-plus" href="/login-signup"><i className="fa fa-google-plus"></i></a></li>
                                <li><a className="linkedin" href="/login-signup"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <span className="signIn-span-tag">or use your email for registration</span>
                        <input className="signIn-input-tag" type="text" placeholder="Name" />
                        <input className="signIn-input-tag" type="email" placeholder="Email" />
                        <input className="signIn-input-tag" type="password" placeholder="Password" />
                        <button className="signIn-button-tag" type="button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container-1 sign-in-container-1">
                    <form className="signIn-form-tag" action="#">
                        <h1 className="signIn-h1-tag">Sign in</h1>
                        <div className="social-container-1">
                            <ul className="social-icons login-icon-container">
                                <li><a className="facebook" href="/login-signup"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="google-plus" href="/login-signup"><i className="fa fa-google-plus"></i></a></li>
                                <li><a className="linkedin" href="/login-signup"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <span className="signIn-span-tag">or use your account</span>
                        <input className="signIn-input-tag" type="email" placeholder="Email" value={email} name={"email"}  onChange={changeDetail}/>
                        <input className="signIn-input-tag" type="password" placeholder="Password" name={"password"} value={password} onChange={changeDetail} />
                        <a className="signIn-a-tag" href="/login-signup">Forgot your password?</a>
                        <button className="signIn-button-tag" type="button" onClick={login2}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container-1">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className="signIn-h1-tag">Welcome Back!</h1>
                            <p className="signIn-p-tag">To keep connected with us please login with your personal info</p>
                            <button className="ghost signIn-button-tag" id="signIn" >Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className="signIn-h1-tag">Hello, Friend!</h1>
                            <p className="signIn-p-tag">Enter your personal details and start journey with us</p>
                            <button className="ghost signIn-button-tag" id="signUp" >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;