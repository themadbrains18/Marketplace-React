import React, { useState,useEffect } from 'react';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
// import { WebPortalApi } from "../Api/WebPortalApi";
const axios = require("axios");
const {apiurl, imageUrl}= require('../config');

const WebPortal = () => {
    const [sliderPopup, setSliderPopup] = useState(false);
    const [WebPortalApi,setWebPortalApi]=useState([]);

    useEffect(async () => {
        getProductBySubcategory();
    }, []);

    
    // get Product List data from API
    async function getProductBySubcategory() {
        try {
            const response = await axios.get(apiurl + "product/getAllBySubcategory/61fcb9a88fa711334c1ad944");
            console.log(response.data);
            if(response.data.length>0){
                setWebPortalApi(response.data);
            }
            
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <>
            <Header display={sliderPopup} />
            <section className="banner-sec bg-color banner-v2">
                <div className="container">
                    <div className="tabs">
                        <div className="tags tabs-txt tmb__sec__content" role="tablist" aria-label="Programming Languages">
                            <h2 className="sec-heading">Website</h2>
                            {/* <div className="item__sort__btn">
                                <select>
                                    <option>Sort By</option>
                                    <option>Price-Low to High</option>
                                    <option>Price - High to LowSaab</option>
                                    <option>Rate/sqft - Low to High</option>
                                    <option>Rate/sqft - High to Low</option>
                                </select>
                            </div> */}
                        </div>
                        <div role="tabpanel" aria-labelledby="js">
                            <div className="card-wrapper">
                                {WebPortalApi.map((val, index) => {
                                    return (
                                        <a href={val.url} key={index}>
                                            <div className="card-body">
                                                <picture>
                                                    <img src={imageUrl + val.image} alt="image-description" loading="lazy" />
                                                </picture>
                                                <div className="card-footer"><img src={require("../assets/svg/thumnails-14.svg").default}  alt="" />
                                                    <div className="card-txt">
                                                        <p className="card-info">Organic Food Order App Design</p>
                                                        <div className="card-sub-heading-wrapper">
                                                            <p className="card-sub-info">Landing Page Design</p>
                                                            <div className="free-btn-wrapper">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17"
                                                                    style={{ marginRight: '10px' }}>
                                                                    <g id="Figma_icon" data-name="Figma icon" transform="translate(17574 852)">
                                                                        <path id="Path_18988" data-name="Path 18988"
                                                                            d="M15.506,0H1.494A1.492,1.492,0,0,0,0,1.494V15.506A1.492,1.492,0,0,0,1.494,17H15.506A1.492,1.492,0,0,0,17,15.506V1.494A1.492,1.492,0,0,0,15.506,0Z"
                                                                            transform="translate(-17574 -852)" fill="#2c2e35"></path>
                                                                        <g id="Icon" transform="translate(2.949 -0.9)">
                                                                            <g id="Group_3309" data-name="Group 3309">
                                                                                <rect id="Rectangle_2564" data-name="Rectangle 2564" width="8.5" height="4.2" rx="2"
                                                                                    transform="translate(-17572.75 -848.8)" fill="#f24e1e"></rect>
                                                                                <path id="Subtraction_1" data-name="Subtraction 1"
                                                                                    d="M7.75,4.6H5.5V.4H7.75a2,2,0,0,1,2,2v.2A2,2,0,0,1,7.75,4.6Z"
                                                                                    transform="translate(-17574 -849.2)" fill="#ff7262"></path>
                                                                            </g>
                                                                        </g>
                                                                        <rect id="Rectangle_2564-2" data-name="Rectangle 2564" width="4.2" height="4.2" rx="2"
                                                                            transform="translate(-17568.5 -844.6)" fill="#1abcfe"></rect>
                                                                        <path id="Subtraction_1-2" data-name="Subtraction 1"
                                                                            d="M2.25,0H0V4.2H2.25a2,2,0,0,0,2-2V2A2,2,0,0,0,2.25,0Z"
                                                                            transform="translate(-17568.5 -840.4) rotate(180)" fill="#a259ff"></path>
                                                                        <path id="Rectangle_2566" data-name="Rectangle 2566"
                                                                            d="M2,0H4A0,0,0,0,1,4,0V2A2,2,0,0,1,2,4H2A2,2,0,0,1,0,2V2A2,2,0,0,1,2,0Z"
                                                                            transform="translate(-17572.5 -840.4)" fill="#0acf83"></path>
                                                                    </g>
                                                                </svg>
                                                                <svg id="Adobe_Xd" data-name="Adobe Xd" xmlns="http://www.w3.org/2000/svg" width="17"
                                                                    height="17" viewBox="0 0 17 17">
                                                                    <path id="Path_18988" data-name="Path 18988"
                                                                        d="M15.506,0H1.494A1.492,1.492,0,0,0,0,1.494V15.506A1.492,1.492,0,0,0,1.494,17H15.506A1.492,1.492,0,0,0,17,15.506V1.494A1.492,1.492,0,0,0,15.506,0Z"
                                                                        fill="#ff26bf"></path>
                                                                    <path id="Path_18990" data-name="Path 18990"
                                                                        d="M44.51,30H30.5a.493.493,0,0,0-.5.5V44.51a.493.493,0,0,0,.5.5H44.51a.493.493,0,0,0,.5-.5V30.5A.493.493,0,0,0,44.51,30Z"
                                                                        transform="translate(-29 -29)" fill="#2e001f"></path>
                                                                    <text id="Xd" transform="translate(2.5 12)" fill="#ffd9f2" fontSize="10"
                                                                        fontFamily="Ubuntu-Bold, Ubuntu" fontWeight="700" letterSpacing="-0.05em">
                                                                        <tspan x="0" y="0">Xd</tspan>
                                                                    </text>
                                                                </svg>
                                                                <div className="card-btn">Free</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default WebPortal;   