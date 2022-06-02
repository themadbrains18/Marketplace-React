import React, { useState } from 'react';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import Loginpopup from '../Register-Login/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {

    return (
        <>
            <ToastContainer position="top-right" />
            <Header />
            <section class="welcome__banner">
                <div class="container">
                    <div class="welcome__banner__content">
                        <div class="welcome__img"><img src={require("../assets/img/welcome-banner.png").default} alt="" /></div>
                        <Loginpopup />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Login;   