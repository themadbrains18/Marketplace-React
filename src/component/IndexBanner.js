import React,{ useState,useEffect } from "react";
import  {Swiper} from 'swiper/react/swiper.js';
import  {SwiperSlide} from 'swiper/react/swiper-slide.js';
import 'swiper/swiper-bundle.css';

const axios = require("axios");
const {apiurl}= require('../config');
const { imageUrl } = require('../config');

let IndexBanner = () => {
    const[banner,setBanner]=useState([]);

    useEffect(async () => {
        getBannerData();
    }, []);

    async function getBannerData(){
        try{
            const response = await axios.get(apiurl + "getbanner");
            console.log(response.data);
            setBanner(response.data);
        }catch(e){
            console.error(e);
        }
    }

    return (
        <section className="banner-sec banner-v1">
            <div className="container">
                <div className="banner-wrapper">
                    <div className="banner-txt">
                        <h2 className="banner-heading">Join forces with <span> talented designers</span> around the world.</h2>
                        <p className="banner-sub-heading">Carefully thought-out Sketch, Figma, Bootstrap 5 & Adobe XD UI kit sthat will speed up your workflow.</p>
                        <span className="traning-now-txt">TRENDING NOW</span>
                        <div className="tags">
                            <div className="tag">UI Kits Bundle</div>
                            <div className="tag">Social App UI Kits</div>
                            <div className="tag">LMS Kits</div>
                        </div>
                    </div>
                    <div className="banner-img">
                        <div className="swiper">
                            <Swiper
                                slidesPerView={1}
                                className="mySwiper"
                            >
                                {banner.map((val, index) => {
                                        return (
                                            <SwiperSlide className="swiper-slide">
                                                <picture>
                                                    <img src={imageUrl + val.image} alt="img-description" loading="lazy" />
                                                </picture>
                                            </SwiperSlide>
                                        );
                                    })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default IndexBanner;