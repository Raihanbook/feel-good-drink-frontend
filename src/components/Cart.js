import { Link } from 'react-router-dom';
import SlButton from '@shoelace-style/react/dist/button';
import { useState, useEffect } from "react";

const Cart = ({ newCart, setNewCart }) => {

    const [totalPrice, setTotalPrice] = useState(0);

    const closeCart = (e) => {
        e.preventDefault();
        document.getElementById("myCart").style.width = "0";
        document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }

    const removeItem = (e, id) => {
        e.preventDefault();

        fetch(`/api/cart/remove/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            
            fetch(`/api/cart/items`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                if (data.message) {
                    setNewCart(null);
                } else {
                    if (data.length == 0) {
                        setNewCart(null);
                    } else {
                        setNewCart(data);
                    }
                }
            })
        })
    }

    useEffect(() => {

        fetch(`/api/cart`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setTotalPrice(data.totalPrice);
            })

    }, [newCart]);

    return (
        <div id="myCart" className="cart">
            <a href="" className="closebtn" onClick={(e) => closeCart(e)}>&times;</a>
            <div className="row">
                <div className="col-12 text-center" style={{
                    padding: '2em',
                }}>
                    {!newCart && <Link to="/" style={{
                        padding: '0px',
                        marginTop: '1em',
                    }}>
                        <SlButton style={{
                            width: '100%',
                            textAlign: 'left !important',
                        }} disabled>
                            <i className="fa fa-shopping-cart" style={{
                                fontSize: '20px',
                                marginRight: '0.5em',
                            }}></i>
                            Cart is empty...
                        </SlButton>
                    </Link>}

                    {newCart && newCart.map((c, index) => (
                        <div className="card mt-3" id={c.item._id + "-" + index} key={c.item._id + "-" + index} style={{
                            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                        }}>
                            {/* Card's content, storing image, product's name, size and price */}
                            <div className="card-body" style={{
                                position: 'relative',
                            }}>
                                {newCart.length == 1 && (
                                    <span id="" style={{
                                        backgroundColor: '#e4690c',
                                        position: 'absolute',
                                        top: '-14px',
                                        left: '245px',
                                        padding: '0px 11px',
                                        borderRadius: '50px',
                                        fontSize: '22px',
                                        color: 'white',
                                    }}>{c.qty}</span>
                                )}
                                {newCart.length > 1 && (
                                    <span id="" style={{
                                        backgroundColor: '#e4690c',
                                        position: 'absolute',
                                        top: '-14px',
                                        left: '229px',
                                        padding: '0px 11px',
                                        borderRadius: '50px',
                                        fontSize: '22px',
                                        color: 'white',
                                    }}>{c.qty}</span>
                                )}
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <img src={`../${c.item.thumbnail}`} alt="" className="shop-product-image w-100" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <h5 className="card-text"><strong>{c.item.flavour}</strong></h5>
                                        <p className="card-text mb-1">{c.item.pack + ' Pack'}</p>
                                        <h5 className="card-text"><strong>{'£ ' + c.item.price}</strong></h5>
                                        <SlButton onClick={(e) => removeItem(e, c.item._id)} style={{
                                            width: '100%',
                                            textAlign: 'left !important',
                                        }}>
                                            <i className="fa fa-cart-arrow-down" style={{
                                                fontSize: '20px',
                                                marginRight: '0.5em',
                                            }}></i>
                                            Remove Item
                                        </SlButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {newCart && <div className="mt-4">
                        <p>{`Total Price: £${totalPrice}`}</p>
                    </div>
                    }

                    {newCart && <Link to="/checkout" style={{
                        padding: '0px',
                        marginTop: '1em',
                    }}>
                        <SlButton style={{
                            width: '100%',
                            textAlign: 'left !important',
                        }}>
                            <i className="fa fa-shopping-cart" style={{
                                fontSize: '20px',
                                marginRight: '0.5em',
                            }}></i>
                            Checkout
                        </SlButton>
                    </Link>}
                </div>
            </div>
        </div>
    );
}

export default Cart;