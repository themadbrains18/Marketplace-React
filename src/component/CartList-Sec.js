import React,{ useState } from "react";
import ProductCard from "./ProductCard";
import { ProductCardApI } from "../Api/ProductCardApi";


let CartListSec = (props) => {

    const [kitType, setKitType] = useState('UIKitBundle');
    const [listCount, setlistCount] = useState(6);

    let ProductArray = ProductCardApI.filter(item => item.type == kitType);

    let updateState = (type,event)=>{
        event.preventDefault();
        setKitType(type);
        setlistCount(6);
    }

    return (
        <section className="latest-resources">
            <div className="container">
                <div className="tabs">
                    <div className="tags tabs-txt" role="tablist" aria-label="Programming Languages">
                        <h2 className="sec-heading">Latest Adobe XD Resources</h2>
                        <div className="tabs-wrapper">
                            <button className="tag" id="js" role="tab" aria-selected={kitType=='UIKitBundle' ? true : false} onClick={(event) => updateState('UIKitBundle', event)}>UI Kits Bundle</button>
                            <button className="tag" id="ruby" role="tab" aria-selected={kitType=='socialuikit' ? true : false} onClick={(event) => updateState('socialuikit', event)}>Social App UI Kits</button>
                            <button className="tag" id="php" role="tab" aria-selected={kitType=='lmskit' ? true : false} onClick={(event) => updateState('lmskit', event)}>LMS Kits</button>
                        </div>
                    </div>
                </div>
                <ul className="card-wrapper">
                    {ProductArray.map((val,index) => {
                        if(index < listCount){
                            return (
                                <li key={val.id}>
                                    <ProductCard  {...val} ClickEvent={props.cardClick} />
                                </li>
                            );
                        }
                    })}
                </ul>
                <button style={{display : listCount == ProductArray.length || listCount > ProductArray.length? 'none' : 'block'}} className="load__more" onClick={()=>{setlistCount(listCount + 6)}}>Load More..</button>
            </div>
        </section>
    );
}

export default CartListSec;