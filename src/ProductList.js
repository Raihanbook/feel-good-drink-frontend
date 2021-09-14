import { Link } from 'react-router-dom';

const ProductList = ({ product, setNewCart }) => {
    // Show the rollover effect every time the mouse is hovering over the specified area
    const showRolloverEffect = (e, id) => {
        if (e.target.previousElementSibling && e.target.children[0] && document.getElementById(id).getElementsByClassName("splash-image")[0]) {
            e.target.previousElementSibling.style.transform = 'scale(1.3)';
            e.target.children[0].style.opacity = '1';
            document.getElementById(id).getElementsByClassName("splash-image")[0].style.opacity = '1';
        }
    }
    // Hide the rollover effect every time the mouse is leaving the specified area
    const hideRolloverEffect = (e, id) => {
        if (e.target.previousElementSibling && e.target.children[0] && document.getElementById(id).getElementsByClassName("splash-image")[0]) {
            e.target.previousElementSibling.style.transform = 'scale(1)';
            e.target.children[0].style.opacity = '0';
            document.getElementById(id).getElementsByClassName("splash-image")[0].style.opacity = '0';
        }
    }

    const addCart = (id) => {
        // console.log(cartState);
        document.getElementById("cart-badge").className += "cart-badge";
        setTimeout(() => { document.getElementById("cart-badge").className = ""; }, 1000);

        fetch(`/api/cart/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {

                fetch(`/api/cart/items`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        setNewCart(data);
                    })
            })
    }

    return (
        // Section for the single product card
        <div className="card mt-3" style={{
            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
        }}>
            {/* Card's content, storing image, product's name, size and price */}
            <div className="card-body">
                <div className="row">
                    <div className="col-12 text-center">
                        <div style={{
                            overflow: 'hidden',
                            position: 'relative',
                        }}>
                            <img src={`../${product.images[0]}`} alt="" className="shop-product-image w-100" />
                            <div className="row overlay w-100 h-100" onMouseEnter={(e) => showRolloverEffect(e, product._id)} onMouseLeave={(e) => hideRolloverEffect(e, product._id)}>
                                <div className="overlay-content text-center">
                                    <div>
                                        <a type="button" className="custom-btn btn-3 m-3"><span onClick={() => addCart(product.items[0])}>Add to Cart</span></a>
                                    </div>
                                    <div>
                                        <Link to={`/product/${product._id}`} className="custom-btn btn-3 m-3"><span>View Details</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/product/${product._id}`}>
                        <div className="col-12 mt-3 card-details">
                            <h5 className="card-text"><strong>{product.flavour}</strong></h5>
                            <p className="card-text mb-1">{product.size + 'ml'}</p>
                            <h5 className="card-text"><strong>{'From £ ' + product.price[0]}</strong></h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
// Exporting the component
export default ProductList;