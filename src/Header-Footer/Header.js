import React,{useState, useEffect} from "react";
import logo from "../assets/svg/logo.svg";


let Header = (props) => {

    const[name,setName]=useState('');

    useEffect(async () => {
       let useerName= localStorage.getItem('name');
       setName(useerName);
    }, []);
     

    const logout=(event)=>{
        event.preventDefault();
        localStorage.setItem('access_token', '');
        localStorage.setItem('name', '');
        setName('');
    }

    return (
        <header style={{ display: props.display == true ? 'none' : 'block' }}>
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-wrapper">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <a className="nav-link" href="/#/webportal">Website</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/mobileportal">Mobile app</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Free Design</a>
                        </li>
                        <li className="nav-item" style={{display: name!='' && name!=undefined ? 'none' : ''}}>
                            <a className="nav-link" href="/login">Log in</a>
                        </li>
                        <li className="nav-item" style={{display: name!='' && name!=undefined ? '' : 'none'}}>
                            <a className="nav-link" style={{cursor:'pointer'}} onClick={(event)=>logout(event)}>Logout</a>
                        </li>
                    </ul>
                    <a className="nav-btn" href="/create-account" style={{display: name!='' && name!=undefined ? 'none' : ''}}>Sign up Free</a>
                    <p className="nav-btn" style={{display: name!='' && name!=undefined ? '' : 'none'}}>{'Welcome ' + name}</p>
                    <div className="toggle">
                        <svg className="toggle-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 5H3V7.63158H27V5Z" fill="#565656"></path>
                            <path className="svg-path" d="M26.9843 10.7896H9.73438V13.4211H26.9843V10.7896Z" fill="#565656"></path>
                            <path d="M27 16.5789H3V19.2104H27V16.5789Z" fill="#565656"></path>
                            <path className="svg-path" d="M26.9843 22.3684H9.73438V25H26.9843V22.3684Z" fill="#565656"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}


export default Header;