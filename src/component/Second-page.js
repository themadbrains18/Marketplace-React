import Header from '../Header-Footer/Header';
import IndexBanner from './IndexBanner';
import CartListSec from './ProductCard';
import Footer from '../Header-Footer/Footer';

function next(props) {
  return (
    <>
      <Header />
      <ProductDetail />
      <ProductCard cardClick={props.Clicked}/>
      <Footer />
    </>
  );
}

export default next;

