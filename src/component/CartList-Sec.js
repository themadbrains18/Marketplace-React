import React from "react";
import ProductCard from "./ProductCard";
import {ProductCardApI} from "../Api/ProductCardApi";


let CartListSec = (props) => {
  
    return (
        <section className="latest-resources">
            <div className="container">
                <div className="tabs">
                    <div className="tags tabs-txt" role="tablist" aria-label="Programming Languages">
                        <h2 className="sec-heading">Latest Adobe XD Resources</h2>
                    </div>
                </div>
                <ul className="card-wrapper">
                    {ProductCardApI.map((val)=>{
                        return (
                            <li key={val.id}>
                                <ProductCard  {...val} ClickEvent={props.cardClick} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default CartListSec;