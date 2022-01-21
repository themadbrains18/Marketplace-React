import React from "react";
import facebook from "../assets/svg/facebook.svg";
import dribble from "../assets/svg/dribble.svg";
import pinterst from "../assets/svg/pinterst.svg";
import twitter from "../assets/svg/twitter.svg";
import behance from "../assets/svg/behance.svg";



let Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-wrapper">
                    <h2 className="footer-heading">Join Our Newsletter</h2>
                    <p className="footer-sub-heading">Sign Up Our Newsletter And Get Exclusive Discount, New Product Release Emailed To You!</p>
                </div>
                <form className="footer-farm">
                    <input className="email-input" type="email" placeholder="Enter Your Email..." required="required" />
                    <input className="submit-input" type="submit" />
                </form>
                <div className="footer-link">
                    <a href="/" target="blank">
                        <img src={facebook} alt="" />
                    </a>
                    <a href="/" target="blank">
                        <img src={dribble} alt="" />
                    </a>
                    <a href="/" target="blank">
                        <img src={pinterst} alt="" />
                    </a>
                    <a href="/" target="blank">
                        <img src={twitter} alt="" />
                    </a>
                    <a href="/" target="blank">
                        <img src={behance} alt="" />
                    </a>
                </div>
                <div className="copyright-wrapper">
                    <p className="copyright-info">© 2021 Madbrains. All Rights Reserved. - Privacy Policy</p>
                    <p className="copyright-info">Design by Themadbrains</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;