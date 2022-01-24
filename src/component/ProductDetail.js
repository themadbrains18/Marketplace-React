import React, { useState, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Swiper } from 'swiper/react/swiper.js';
import { SwiperSlide } from 'swiper/react/swiper-slide.js';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import { ProductDetailApi } from '../Api/ProductDetailApi';
import { ProductPreviewApi } from '../Api/ProductPreviewApi';
import { ProductCardApI } from "../Api/ProductCardApi";

import emailjs from '@emailjs/browser';
import validator from 'validator'

// import Swiper core and required modules
import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

// var quickemailverification = require('quickemailverification').client('d366d148a398546c5cb9cb0622238c69fbb75d4a6446e7ce4794a6e765c5').quickemailverification();

const ProductDetail = (props) => {

    const [SharePopup, setSharePopup] = useState(false);
    const [sliderPopup, setSliderPopup] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [previewPopup, setPreviewPopup] = useState(false);
    const [downloadPopup, setDownloadPopup] = useState(false);
    const [validateMsg, setValidateMsg] = useState('');
    
    /* {Get url variable} */
    const { slug } = useParams();

    const height = window.innerHeight - 20;

    /* {Preview section start} */
    let Product = ProductCardApI.filter(item => item.url == slug);

    /* {Filter product slider from APi } */
    let productList = ProductDetailApi[slug];

    /* {Filter product preview from API} */
    let ProductPreviewList = ProductPreviewApi[slug];

    /* Handle swipper popup */
    let openPopup = (event) => {

        if (event.target.classList.length === 0 || event.target.classList.value === 'swiper-slide swiper-slide-active') {
            if (sliderPopup == true) {
                if (event.target.tagName == 'svg') {
                    setSliderPopup(false);
                }
            }
            else {
                setSliderPopup(true);
            }
        }

    }

    const form = useRef();

    /* Send Email function start */
    const sendEmail = (e) => {
        e.preventDefault();

        /* Get Email from form field */
        var email = form.current.user_email.value;

        /* Validate email using validator */
        if (validator.isEmail(email)) {
            setValidateMsg('');
            console.log(email);
        }
        else {
            setValidateMsg('Please Enter Valid Email');
            return;
        }

        /* Add hidden field custom data  */
        form.current.subject.value = 'Market Place Template';
        form.current.message.value = 'https://theuxuidesigner.com/market-place';
        form.current.fromname.value = 'The Mad Brains';

        /* Send Email Using emailJs */
        emailjs.sendForm('gmail', 'template_qoux7yb', form.current, 'user_HBHLwXqJnN08QuMgqKEJo')
            .then((result) => {
                console.log(result.text);
                setValidateMsg('Email has been sent!');
            }, (error) => {
                console.log(error.text);
                setValidateMsg('Some error in email sent');
            });
        /* Send Email End */
    };
    /* Send Email End */

    return (
        <>
            <Header display={sliderPopup || previewPopup || downloadPopup == true ? true : false} />
            <section className="banner-sec bg-color banner-v2">
                <div className="container">
                    <div className="banner-links-upper">
                        <a href="/">Home page / </a><span>Product details page</span>
                    </div>

                    <div className="sec-content">
                        <div className="slider-wrapper">
                            <div className="popup-slider-tmb" style={{ display: sliderPopup == true ? 'block' : 'none' }} onClick={() => { setSliderPopup(false) }}></div>
                            <div className={'slider-wrapper-inner ' + (sliderPopup == true ? 'active' : '')} onClick={(event) => { openPopup(event) }}>
                                <button className='close-popup-slider-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-0.242)">
                                            <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,1,0,1.42,1.42L12,13.41l4.29,4.3a1,1,0,1,0,1.42-1.42Z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                                <Swiper slidesPerView={1} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="swiper mySwiper2">
                                    {productList.map((val, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide">
                                                <picture>
                                                    <source srcSet={require("../assets/webp/" + val.WebpSrc).default} type="image/webp" />
                                                    <img src={require("../assets/img/" + val.ImgSrc).default} alt="img-description" loading="lazy" />
                                                </picture>
                                            </SwiperSlide>
                                        );
                                    })}

                                </Swiper>
                                <Swiper className="swiper subSlider" onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}>
                                    {productList.map((val, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide">
                                                <picture>
                                                    <source srcSet={require("../assets/webp/" + val.WebpSrc).default} type="image/webp" />
                                                    <img src={require("../assets/img/" + val.ImgSrc).default} alt="img-description" className='subSliderimage' loading="lazy" />
                                                </picture>
                                            </SwiperSlide>
                                        );
                                    })}

                                </Swiper>
                            </div>
                        </div>
                        <aside className="sec-txt aside-card" style={{ zIndex: sliderPopup == true ? '0' : '1' }}>
                            <h2 className="aside-heading">{Product[0].description}</h2>
                            <p className="aside-info">By <span>Themadbrains</span></p>
                            <div className="aside-wrapper-btn">
                                <div className="xd-wrapper">
                                    <svg id="Adobe_Xd" data-name="Adobe Xd" xmlns="http://www.w3.org/2000/svg" width={17} height={17} viewBox="0 0 17 17">
                                        <path id="Path_18988" data-name="Path 18988" d="M15.506,0H1.494A1.492,1.492,0,0,0,0,1.494V15.506A1.492,1.492,0,0,0,1.494,17H15.506A1.492,1.492,0,0,0,17,15.506V1.494A1.492,1.492,0,0,0,15.506,0Z" fill="#ff26bf" />
                                        <path id="Path_18990" data-name="Path 18990" d="M44.51,30H30.5a.493.493,0,0,0-.5.5V44.51a.493.493,0,0,0,.5.5H44.51a.493.493,0,0,0,.5-.5V30.5A.493.493,0,0,0,44.51,30Z" transform="translate(-29 -29)" fill="#2e001f" />
                                        <text id="Xd" transform="translate(2.5 12)" fill="#ffd9f2" fontSize={10} fontFamily="Ubuntu-Bold, Ubuntu" fontWeight={700} letterSpacing="-0.05em">
                                            <tspan x={0} y={0}>Xd</tspan>
                                        </text>
                                    </svg>
                                    <p>Adobe XD</p>
                                </div>
                                <div className="share-btn shareinow">
                                    <img src={require("../assets/svg/share-icon.svg").default} alt="" />
                                    <button onClick={() => { setSharePopup(true) }}>share-now</button>
                                </div>
                            </div>
                            <div className="aside-sub-info">
                                <h4>Fonts</h4>
                                <ul>
                                    <li className="card-font-style">Proxima Nova</li>
                                </ul>
                            </div>
                            <div className="aside-sub-info">
                                <h4>Screens</h4>
                                <p>21 Screens + 4 Home page design</p>
                            </div>
                            <button className="downlod-btn" onClick={() => { setDownloadPopup(true) }}>Download</button>
                            <button className="preview-btn" onClick={() => { setPreviewPopup(true) }}>Preview</button>
                        </aside>
                    </div>

                    <div className="card-detail overview-card-detail">
                        <div className="product-info-content">
                            <div className="product-info-content-inner">
                                <h2 className="product-info-heading">Overview</h2>
                                <ul>
                                    <li className="overview-info">Today Everyone around us is determined to start their own business, startup, and freelancing to escape the traditional 9 to 5 life. But the one thing that is common in most of them is the limited finance and need for a good working place to bring the best out of them, That’s the point when they realize they need a good coworking space at a budget that suits them the best. </li>
                                    <li className="overview-info">Space Work is the best UI template that can help you to solve this problem, with a clean design that helps you to build your own application to help them find the best modern office space, coworking space, meeting space, workspace place etc. </li>
                                    <li className="overview-info">Space Work is a unique UI template designed keeping in mind the latest trends and with an aim to simplify it for freelancers, startups, and many others to find the best working space for them. </li>
                                    <li className="overview-info">This is designed based on extensive UX Research in order to provide the best experience to its users with advanced filtering that helps you to boosts the conversions and increase the properties rented. </li>
                                    <li className="overview-info">This App is the best fit for anyone that is in the real estate industry or is planning to launch the application based on the idea.</li>
                                    <li className="overview-info">This Coworking space for freelancer site dashboard design features a unique design. This is designed in the adobe Xd software and is prototype ready so you can feel the website even before getting it developed and provide you with all you will need in order to build you website.</li>
                                </ul>
                                <h2 className="product-info-heading highlights-heading">Highlights</h2>
                                <div className="highlight-upper"> <div className="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="20.829" height="14.79" viewBox="0 0 20.829 14.79">
                                    <path className="a" d="M24,9,11.625,21.376,6,15.75" transform="translate(-4.586 -7.586)"></path>
                                </svg><p className="highlights-txt">All the Fonts that are used during the design process</p></div><div className="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="20.829" height="14.79" viewBox="0 0 20.829 14.79">

                                    <path className="a" d="M24,9,11.625,21.376,6,15.75" transform="translate(-4.586 -7.586)"></path>
                                </svg><p className="highlights-txt">All the Icons used in Musify are Free available under a creative</p></div><div className="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="20.829" height="14.79" viewBox="0 0 20.829 14.79">

                                    <path className="a" d="M24,9,11.625,21.376,6,15.75" transform="translate(-4.586 -7.586)"></path>
                                </svg><p className="highlights-txt">The grid used is the bootstrap grid.</p></div><div className="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="20.829" height="14.79" viewBox="0 0 20.829 14.79">

                                    <path className="a" d="M24,9,11.625,21.376,6,15.75" transform="translate(-4.586 -7.586)"></path>
                                </svg><p className="highlights-txt">Unique and Professional Presentations</p></div><div className="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="20.829" height="14.79" viewBox="0 0 20.829 14.79">

                                    <path className="a" d="M24,9,11.625,21.376,6,15.75" transform="translate(-4.586 -7.586)"></path>
                                </svg><p className="highlights-txt">Light &amp; Dark Styles</p></div><div className="highlight"><svg xmlns="http://www.w3.org/2000/svg" width="20.829" height="14.79" viewBox="0 0 20.829 14.79">

                                    <path className="a" d="M24,9,11.625,21.376,6,15.75" transform="translate(-4.586 -7.586)"></path>
                                </svg><p className="highlights-txt">Customizable Layers, Fonts &amp; Colors</p></div></div>

                            </div>
                        </div>
                    </div>

                    {/* {Preview section start} */}

                    <div className="sec__popupslider" style={{ display: previewPopup == true ? 'block' : 'none' }}>
                        <div className="slider-wrapper">
                            <div className="sec__popupslider__tmb" style={{ display: previewPopup == true ? 'block' : 'none' }} onClick={() => { setPreviewPopup(false) }}></div>
                            <div className={'slider-wrapper-inner ' + (previewPopup == true ? 'active' : '')} >
                                <button className='close-popup-slider-btn' onClick={() => { setPreviewPopup(false) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-0.242)">
                                            <path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,1,0,1.42,1.42L12,13.41l4.29,4.3a1,1,0,1,0,1.42-1.42Z">
                                            </path>
                                        </g>
                                    </svg>
                                </button>
                                <Swiper slidesPerView={1} navigation={true} thumbs={{ swiper: thumbsSwiper }} style={{ height: height + "px" }} className="swiper mySwiperPreview">
                                    {ProductPreviewList.map((val, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide">
                                                <picture>
                                                    <source srcSet={require("../assets/webp/" + val.WebpSrc).default} type="image/webp" />
                                                    <img src={require("../assets/img/" + val.ImgSrc).default} alt="image-description" loading="lazy" />
                                                </picture>
                                            </SwiperSlide>
                                        );
                                    })}

                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* {Preview Section end} */}


                    {/* Share popup */}
                    {SharePopup ?
                        <div className="popup" style={{ display: 'block' }}>
                            <div className="popup__wrapper" onClick={() => { setSharePopup(false) }}></div>
                            <div className="social__share__popup" style={{ display: 'block' }}>
                                <div className="social__share__popup__inner"> <img src={require("../assets/img/" + Product[0].ImgSrc).default} alt="img-description" /></div>
                                <div className="sec__content">
                                    <div className="sec__heading">Share this with your social Community</div>
                                    <div className="sec__icon">
                                        <div className="social-link-icon">
                                            <a className="social-link" href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                                                <img src={require("../assets/svg/pinterest-1.svg").default} alt="" />
                                            </a>
                                            <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                                <img src={require("../assets/img/instagram.png").default} alt="" /></a>
                                            <a className="social-link facebook" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                <img src={require("../assets/svg/facebook-1.svg").default} alt="" />
                                            </a></div>
                                    </div>
                                    <div className="shot-share-modal-copy-action">
                                        <label htmlFor="copy-url">or copy link</label>
                                        <div className="shot-share-modal-copy-wrapper">
                                            <input className="shot-share-modal-copy-input" id="copy-url" type="text" value="https://theuxuidesigner.com/market-place/coworking-space.html" readOnly="readonly" />
                                            <a className="shot-share-modal-copy-link js-share-clipboard" href="/">Copy</a>
                                        </div>
                                    </div>
                                    <div className="copy-txt"></div>
                                    <div className="site-notifications" id="site-notifications">
                                        <ul>
                                            <li className="fade-in-up-leave-active fade-in-up-leave-to"></li>
                                            <div className="site-notification site-notification-success">
                                                <h4 className="site-notification-tittle">Link Copied</h4>
                                                <div className="site-notification-message">A link to this page has been copied to your clipboard!</div><a className="site-notification-close" href="/">
                                                    <svg className="fill-current" width="12" height="11" viewBox="0 0 12 11" fill="#fff" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex="-1">
                                                        <path d="M11.568.284a1.184 1.184 0 00-1.69.157l-5.31 6.501-2.703-1.838a1.185 1.185 0 00-1.664.34A1.24 1.24 0 00.534 7.14l4.497 3.06 6.691-8.193a1.242 1.242 0 00-.154-1.724z"></path>
                                                    </svg></a>
                                                <svg className="alert__close" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation" focusable="false" tabIndex="-1">
                                                    <path d="M6.768 5l2.866-2.866A1.25 1.25 0 107.866.366L5 3.232 2.134.366A1.25 1.25 0 10.366 2.134L3.232 5 .366 7.866a1.25 1.25 0 101.768 1.768L5 6.767l2.866 2.867c.244.244.564.366.884.366a1.25 1.25 0 00.884-2.134L6.768 5z" fill="#fff"></path>
                                                </svg>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div> : null}

                    {/* Download popup */}
                    {downloadPopup ?
                        <div className="popup" style={{ display: 'block' }}>
                            <div className="popup__wrapper" onClick={() => { setDownloadPopup(false) }}></div>
                            <div className="social__share__popup" style={{ display: 'block' }}>
                                <div className="social__share__popup__inner"> <img src={require("../assets/img/" + Product[0].ImgSrc).default} alt="img-description" /></div>
                                <div className="sec__content">
                                    <div style={{ marginBottom: "25px" }}>
                                        <p style={{ color: 'red' }} className="msg__label" id="validate_msg">{validateMsg}</p>
                                    </div>
                                    <form ref={form} onSubmit={sendEmail}>

                                        <div className="email">
                                            <input id="name" type="text" name="to_name" required />
                                            <label className="name__label" htmlFor="name">Full name</label>
                                        </div>
                                        <div className="email">
                                            <input id="Username" type="email" name="user_email" required />
                                            <label className="email__label" htmlFor="Username">E-Mail</label>
                                        </div>
                                        <div className="email">
                                            <input id="subject" type="hidden" name="subject" />
                                        </div>
                                        <div className="email">
                                            <input id="message" type="hidden" name="message" />
                                        </div>
                                        <div className="email">
                                            <input id="fromname" type="hidden" name="from_name" />
                                        </div>
                                        <input className="form__btn" type="submit" value="Download"></input>
                                    </form>
                                </div>
                            </div>
                        </div> : null}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default ProductDetail;   