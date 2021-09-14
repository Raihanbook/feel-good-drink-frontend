import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { Link } from 'react-router-dom';


const Shop = ({ setNewCart }) => {
    // Constant for storing product list
    const [product, setProduct] = useState(null);

    useEffect(() => {

        // Makes the site jump to the top of new pages when links are clicked
        window.scroll({
            top: 0,
            left: 0,
        });

        fetch('/api/product')
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setProduct(data);
                for (let x in data) {
                    document.getElementsByClassName('splash-image')[x].style.backgroundImage = "url('../" + data[x].splashImage + "')";
                }
            })
    }, []);

    return (
        <div className="container-fluid shop-container">
            {/* Header section for the Shop page */}
            <div className="row mt-4 align-items-center">
                <div className="col-6 text-left">
                    <h1 className="pageTitle">Shop</h1>
                </div>
                <div className="col-6 text-right">
                    <Link to="/stockist" className="custom-btn-wide btn-4 m-3 text-center"><span>Find a Stockist</span></Link>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under the page title */}
                </div>
            </div>

            {/* Product list section */}
            <div className="row align-items-center">
                <div className="col-1 col-lg-2">

                </div>
                <div className="col-10 col-lg-8">
                    <div className="row" style={{
                        textAlign: 'initial',
                    }}>
                        {/* Loop all of the data from the backend and pass it to the Product List component */}
                        {product && product.map((p) => (
                            <div className="product col-md-6 col-lg-6 mt-3 col-sm-12" id={p._id} key={p._id} style={{
                                padding: '2.5em',
                            }}>
                                <div className="splash-image" style={{
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '200%',
                                    backgroundPosition: 'center',
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    bottom: '0',
                                    right: '0',
                                    zIndex: '-5',
                                    opacity: '0',
                                    transform: 'scale(1.1)',
                                }}>

                                </div>
                                <ProductList product={p} setNewCart={setNewCart} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-1 col-lg-2">
                </div>
                {/* Images are pulled from the database. Image References: */}
                {/* Feel Good Drinks (@feelgooddrinks). 2021. "NEWSFLASH." Instagram Photo, March 3, 2021. https://www.instagram.com/p/CL7KBoJlScq/.  */}
                {/* Feel Good Drinks. N.d. "[Cans on pastel background]." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/.  */}
            </div>
        </div >
    );
}
// Exporting the component
export default Shop;