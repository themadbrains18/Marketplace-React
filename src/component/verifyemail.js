import React, { useState,useEffect } from 'react';
const axios = require("axios");
const {apiurl}= require('../config');

const VerifyEmail = (props) => {

    const[verifiedMessage, setVerifiedMessage]=useState('');

    useEffect(async () => {
        verifyEmailSuccess();
    }, []);

    // get Product List data from API
    async function verifyEmailSuccess() {
        try {
            let email = props.match.params.email;
            const response = await axios.post(apiurl + 'verifyemail/', {"email" : email}  );
            console.log(response.data);
            if(response.data.status == 200){
                setVerifiedMessage(response.data.message);
            }
            
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <section className="banner-sec bg-color banner-v2">
                <div className="container">
                    <div className="tabs">
                        <div className="tags tabs-txt tmb__sec__content" role="tablist" aria-label="Programming Languages">
                        </div>
                        <div role="tabpanel" aria-labelledby="js">
                            <div className="email_card-wrapper">
                                <h2>{verifiedMessage } <a href='#/login'>login</a></h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default VerifyEmail;   