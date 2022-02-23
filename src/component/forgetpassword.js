import React, { useState } from 'react';
import validator from 'validator';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require("axios");
const { apiurl } = require('../config');

const ForgetPassword = (props) => {

    const [state, setState] = useState({ password: '', matchPassword: '' });

    const changeCred = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const userlogin = async (event) => {
        event.preventDefault();

        if (validator.isEmpty(state.password) === true) {
            toast('Please enter the Password');
            return;
        } else if (state.password.length < 7) {
            toast('Password length must be 7 characters');
            return;
        }

        if (validator.isEmpty(state.matchPassword) === true) {
            toast('Please enter the Password');
            return;
        } else if (state.matchPassword.length < 7) {
            toast('Password length must be 7 characters');
            return;
        }
        if(state.password != state.matchPassword){
            toast('Password not matched');
            return;
        }
        else{
            let email = props.match.params.email;
            let data={"email": email, "password": state.password};
            let response = await axios.post(apiurl + 'changepassword', data);
            console.log(response);
            if(response.data.status==200){
                setState({password:'', matchPassword:''});
                toast(response.data.message);
                setTimeout(() => {
                    window.location.href="#/login";    
                }, 1000);
            }
        }
        

    }

    return (
        <>
            <ToastContainer position="bottom-right" />
            <Header />
            <section className="welcome__banner">
                <div className="container">
                    <div className="welcome__banner__content">
                        <div className="welcome__txt">

                            <form className="form">
                                <div className="email">
                                    <input id="Password" type="Password" value={state.password} name="password" required="" onChange={(event) => changeCred(event)} />
                                    <label className="email__label" htmlFor="Password">Password</label>
                                </div>
                                <div className="password">
                                    <input id="matchPassword" type="Password" value={state.matchPassword} name="matchPassword" required="" onChange={(event) => changeCred(event)} />
                                    <label htmlFor="matchPassword">Confirm Password</label>
                                </div>

                            </form>
                            <input className="form__btn" type="submit" value="Update" onClick={(event) => userlogin(event)} />

                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
}

export default ForgetPassword;   