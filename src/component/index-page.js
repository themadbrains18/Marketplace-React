
import IndexBanner from './IndexBanner';
import CartListSec from './CartList-Sec';
import Header from '../Header-Footer/Header';
import Footer from '../Header-Footer/Footer';

function Home(props) {
  return (
    <>
      <Header />
      <IndexBanner />
      <CartListSec cardClick={props.Clicked}/>
      <Footer />
    </>
  );
}

export default Home;