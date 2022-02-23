import React, { useState } from 'react';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import Register from '../Register-Login/register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateAccount = () => {

    return (
        <>
            <ToastContainer position="bottom-right" />
            <Header />
            <section className="welcome__banner">
                <div className="container">
                    <div className="welcome__banner__content">
                        <div className="welcome__img"><img src={require("../assets/img/sign-in.png").default} alt="" /></div>
                        <Register />
                        {/* <div className="sign__up__txt">
                            <p>If you have an account then <a href="#/login">Sign in now</a></p>
                        </div> */}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CreateAccount;   