import React, { useState, useEffect } from 'react';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';
import { MobilePortalApi } from "../Api/MobilePortalApi";
const axios = require("axios");
const {apiurl, imageUrl}= require('../config');

const MobilePortal = () => {
    const [sliderPopup, setSliderPopup] = useState(false);
    const [MobilePortalApi,setMobilePortalApi]=useState([]);

    useEffect(async () => {
        getProductBySubcategory();
    }, []);

    
    // get Product List data from API
    async function getProductBySubcategory() {
        try {
            const response = await axios.get(apiurl + "product/getAllBySubcategory/61fcbb7edd5a7721d0c741ff");
            console.log(response.data);
            if(response.data.length>0){
                setMobilePortalApi(response.data);
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
                            <h2 className="sec-heading">Mobile</h2>
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

                                {MobilePortalApi.map((val, index) => {
                                    return (
                                        <a href={val.url}>
                                            <div class="card-body">
                                                <picture>
                                                    <img src={imageUrl + val.image} alt="image-description" loading="lazy" />
                                                </picture>
                                                <div class="card-footer"><img src={require("../assets/svg/thumnails-5.svg").default} alt="" />
                                                    <div class="card-txt">
                                                        <p class="card-info">Find Barber Shop KIT Template</p>
                                                        <div class="card-sub-heading-wrapper">
                                                            <p class="card-sub-info">Mobile App Design</p>
                                                            <div class="free-btn-wrapper">
                                                                <svg id="Adobe_Xd" data-name="Adobe Xd" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                                                    <path id="Path_18988" data-name="Path 18988" d="M15.506,0H1.494A1.492,1.492,0,0,0,0,1.494V15.506A1.492,1.492,0,0,0,1.494,17H15.506A1.492,1.492,0,0,0,17,15.506V1.494A1.492,1.492,0,0,0,15.506,0Z" fill="#ff26bf"></path>
                                                                    <path id="Path_18990" data-name="Path 18990" d="M44.51,30H30.5a.493.493,0,0,0-.5.5V44.51a.493.493,0,0,0,.5.5H44.51a.493.493,0,0,0,.5-.5V30.5A.493.493,0,0,0,44.51,30Z" transform="translate(-29 -29)" fill="#2e001f"></path>
                                                                    <text id="Xd" transform="translate(2.5 12)" fill="#ffd9f2" fontSize="10" fontFamily="Ubuntu-Bold, Ubuntu" fontWeight="700" letterSpacing="-0.05em">
                                                                        <tspan x="0" y="0">Xd</tspan>
                                                                    </text>
                                                                </svg>
                                                                <div class="card-btn">Free</div>
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

export default MobilePortal;   