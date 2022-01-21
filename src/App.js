import React , {useState}from 'react';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";



import Home from './component/index-page';
import IndexBanner from './component/IndexBanner';
import ProductDetail from './component/ProductDetail';
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
      <BrowserRouter>
        <Switch>
          <Route exact strict path="/" component={()=><Home Clicked={ClickedEvent}></Home>}></Route>
          <Route exact strict path="/website" component={IndexBanner}></Route>
          <Route path="/:slug" component={ProductDetail}></Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
