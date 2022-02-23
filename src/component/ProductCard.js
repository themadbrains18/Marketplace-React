import React from "react";
const { imageUrl } = require('../config');
let ProductCard = (props) => {
    let click = ()=>{
        return(
            props.ClickEvent(props)
        );
    }
    console.log(props);
    return (
        // onClick={click} key={props._id}
        <div className="card-body" style={{ cursor: 'pointer' }} onClick={click} key={props._id} >
            <picture>
                <img src={imageUrl + props.image} loading="lazy" />
            </picture>
            <div className="card-footer">
                <img src={ props.thumbNail!=''?imageUrl + props.thumbNail: require(`../assets/svg/thumnails.svg`).default} alt="product logo" />
                <div className="card-txt">
                    <p className="card-info">{props.title}</p>
                    <div className="card-sub-heading-wrapper">
                        <p className="card-sub-info">{props.subcategory.name}</p>
                        <div className="free-btn-wrapper">
                            <svg id="Adobe_Xd" data-name="Adobe Xd" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                                <path id="Path_18988" data-name="Path 18988" d="M15.506,0H1.494A1.492,1.492,0,0,0,0,1.494V15.506A1.492,1.492,0,0,0,1.494,17H15.506A1.492,1.492,0,0,0,17,15.506V1.494A1.492,1.492,0,0,0,15.506,0Z" fill="#ff26bf"></path>
                                <path id="Path_18990" data-name="Path 18990" d="M44.51,30H30.5a.493.493,0,0,0-.5.5V44.51a.493.493,0,0,0,.5.5H44.51a.493.493,0,0,0,.5-.5V30.5A.493.493,0,0,0,44.51,30Z" transform="translate(-29 -29)" fill="#2e001f"></path>
                                <text id="Xd" transform="translate(2.5 12)" fill="#ffd9f2" fontSize="10" fontFamily="Ubuntu-Bold, Ubuntu" fontWeight="700" letterSpacing="-0.05em">
                                    <tspan x="0" y="0">Xd</tspan>
                                </text>
                            </svg>
                            <div className="card-btn">Free</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;