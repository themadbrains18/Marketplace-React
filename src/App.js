import React , {useState}from 'react';
import {BrowserRouter,Switch,Route,Redirect,HashRouter} from "react-router-dom";



import Home from './component/index-page';
import ProductDetail from './component/ProductDetail';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import WebPortal from './component/WebPortal';
import MobilePortal from './component/MobilePortal';
import VerifyEmail from './component/verifyemail';
import ForgetPassword from './component/forgetpassword';
import './assets/font/helvetica-neue/stylesheet.css';
import './assets/font/proxima-nova/stylesheet.css';
import './assets/scss/style.scss';
function App() {

  let ClickedEvent = (data)=>{
    console.log(data._id);
    window.location.href='#/Product/'+data._id+'/'+data.title.split(' ').join('-');
  }
  
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact  path="/" component={()=><Home Clicked={ClickedEvent}></Home>}></Route>
          <Route path="/create-account" component={CreateAccount}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/webportal" component={WebPortal}></Route>
          <Route path="/mobileportal" component={MobilePortal}></Route>
          <Route path="/users/verifysuccess/:email" component={VerifyEmail}></Route>
          <Route path="/users/forgetpassword/:email" component={ForgetPassword}></Route>
          <Route path= {"/Product/:slug/:name"}  component={ProductDetail}></Route>
          
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
