import React , {useState}from 'react';
import {BrowserRouter,Switch,Route,Redirect,HashRouter} from "react-router-dom";



import Home from './component/index-page';
import ProductDetail from './component/ProductDetail';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import WebPortal from './component/WebPortal';
import MobilePortal from './component/MobilePortal';
import './assets/font/helvetica-neue/stylesheet.css';
import './assets/font/proxima-nova/stylesheet.css';
import './assets/scss/style.scss';
function App() {
  const  [slug,setSlug] = useState(null)

  let ClickedEvent = (SeltedCard)=>{
    console.log(SeltedCard);
    window.location.href='/ProductDetail/'+SeltedCard;
    setSlug(SeltedCard);
  }
  
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route exact  path="/" component={()=><Home Clicked={ClickedEvent}></Home>}></Route>
          <Route path="/create-account" component={CreateAccount}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/webportal" component={WebPortal}></Route>
          <Route path="/mobileportal" component={MobilePortal}></Route>
          <Route path= {"/ProductDetail/:slug"}  component={ProductDetail}></Route>
          
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
