import NavBar from "../features/navbar/NavBar";
import ProductDetail from  '../features/product-list/components/ProductDetails';
import Footer from "../features/common/footer";

function ProductDetailPage() {
    return ( 
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;