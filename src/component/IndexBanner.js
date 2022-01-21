import React from "react";
import  {Swiper} from 'swiper/react/swiper.js';
import  {SwiperSlide} from 'swiper/react/swiper-slide.js';
import 'swiper/swiper-bundle.css';


let IndexBanner = () => {
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
                                
                                    <SwiperSlide className="swiper-slide">
                                        <picture>
                                            <source srcSet={require('../assets/webp/banner-img.webp').default} type="image/webp" />
                                            <img src={require("../assets/img/banner-img.png").default} alt="image_description" loading="lazy" />
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <picture>
                                            <source srcSet={require("../assets/webp/banner-img2.webp").default} type="image/webp" />
                                            <img src={require("../assets/img/banner-img2.png").default} alt="image_description" loading="lazy" />
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <picture>
                                            <source srcSet={require("../assets/webp/banner-img3.webp").default} type="image/webp" />
                                            <img src={require("../assets/img/banner-img3.png").default} alt="image_description" loading="lazy" />
                                        </picture>
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <picture>
                                            <source srcSet={require("../assets/webp/banner-img4.webp").default} type="image/webp" />
                                            <img src={require("../assets/img/banner-img4.png").default} alt="image_description" loading="lazy" />
                                        </picture>
                                    </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default IndexBanner;