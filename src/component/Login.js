import React, { useState } from 'react';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require("axios");
const { apiurl } = require('../config');

const Login = (props) => {

    const [state, setState] = useState({ username: '', password: '' });

    const changeCred = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const userlogin = async (event)=>{
        event.preventDefault();
        if(validator.isEmpty(state.username)===true){
            toast('Please enter an email address');
            return;
        }
        if(validator.isEmail(state.username)===false){
            toast('Please enter valid email address');
            return;
        }
        if(validator.isEmpty(state.password)===true){
            toast('Please enter the Password');
            return;
        }else if(state.password.length<7){
            toast('Password length must be 7 characters');
            return;
        }

        let response = await axios.post(apiurl+'login', state);
        if(response.data.status == 401){
            toast(response.data.message);
        }
        if(response.data.status == 200){
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('name', response.data.name);
            toast('You have login successfully');
            setState({ username: '', password: '' });
            window.location.href="/";
        }

    }

    return (
        <>
        <ToastContainer position="bottom-right" />
            <Header />
            <section class="welcome__banner">
                <div class="container">
                    <div class="welcome__banner__content">
                        <div class="welcome__img"><img src={require("../assets/img/welcome-banner.png").default} alt="" /></div>
                        <div class="welcome__txt">
                            <h2 class="welcome__heading">Welcome to TheMadbrains</h2>
                            <p class="welcome__info">You can log in to your Themadbrains account here.</p>
                            <div class="sign__in__btn">
                                <button class="google__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 16">

                                        <g transform="translate(5)">
                                            <path class="a" d="M8,102.4v3.2h4.526A4.8,4.8,0,1,1,8,99.2a4.729,4.729,0,0,1,3.109,1.158l2.1-2.413A7.928,7.928,0,0,0,8,96a8,8,0,1,0,8,8v-1.6Z" transform="translate(-5 -96)"></path>
                                        </g>
                                    </svg>                Sign In With Google
                                </button>
                                <button class="facebook__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10.272" height="19" viewBox="0 0 10.272 19">

                                        <g transform="translate(4)">
                                            <path class="b" d="M31.963,0,29.5,0a4.327,4.327,0,0,0-4.557,4.676V6.832H22.464a.387.387,0,0,0-.387.388v3.124a.387.387,0,0,0,.387.387h2.477v7.882a.387.387,0,0,0,.387.387h3.232a.387.387,0,0,0,.387-.387V10.731h2.9a.387.387,0,0,0,.387-.387V7.219a.388.388,0,0,0-.388-.388h-2.9V5c0-.878.209-1.324,1.354-1.324h1.66a.387.387,0,0,0,.387-.387V.391A.388.388,0,0,0,31.963,0Z" transform="translate(-26.077)"></path>
                                        </g>
                                    </svg>                Sign In With Facebook
                                </button>
                            </div>
                            <div class="opation">
                                <div class="custom__line"></div>
                                <div class="opation__txt">
                                    <p>Or</p>
                                </div>
                                <div class="custom__line"></div>
                            </div>
                            <form class="form">
                                <div class="email">
                                    <input id="Username" type="text" value={state.username} name="username" required="" onChange={(event) => changeCred(event)}/>
                                    <label class="email__label" htmlFor="Username">Username</label>
                                </div>
                                <div class="password">
                                    <input id="password" type="Password" value={state.password} name="password" required="" onChange={(event) => changeCred(event)}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div class="form__checkbtn">
                                    <div class="form__rember__btn">
                                        <input id="remember" type="checkbox" name="check" />
                                        <label class="remember__txt" for="remember"> Remember me</label>
                                    </div>
                                    <button class="forget__password" type="button" >Forgot Password</button>
                                </div>
                            </form>
                            <input class="form__btn" type="submit" value="Sign In" onClick={(event)=>userlogin(event)}/>
                            <div class="sign__up__txt">
                                <p>If you don&rsquo;t have any account then <a href="/create-account" >Sign up now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Login;   