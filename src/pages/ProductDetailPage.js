import NavBar from '../features/navbar/NavBar';
import ProductDetails from '../features/product-list/components/ProductDetails';


function Home() {
  return (
    <div>
      <NavBar>
        <ProductDetails></ProductDetails>
      </NavBar>
    </div>
  );
}

export default Home;
