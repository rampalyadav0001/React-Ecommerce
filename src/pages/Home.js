import { Link } from "react-router-dom";
import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product-list/components/ProductList";
import Footer from "../features/common/footer";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;