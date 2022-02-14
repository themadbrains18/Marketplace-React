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
      <HashRouter>
        <Switch>
          <Route exact strict path="/Marketplace-React/" component={()=><Home Clicked={ClickedEvent}></Home>}></Route>
          <Route exact strict path="/create-account" component={CreateAccount}></Route>
          <Route exact strict path="/login" component={Login}></Route>
          <Route exact strict path="/Marketplace-React/#/webportal" component={WebPortal}></Route>
          <Route exact strict path="/Marketplace-React/#/mobileportal" component={MobilePortal}></Route>
          <Route path= {"/ProductDetail/:slug"}  component={ProductDetail}></Route>
          
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
