import { useParams } from "react-router";
import { useState, useEffect } from "react";
import '@shoelace-style/shoelace/dist/themes/base.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import SlRating from '@shoelace-style/react/dist/rating';
import { Link } from 'react-router-dom';
import ProductList from "./ProductList";

const ProductDetails = ({ setNewCart }) => {
    const { id } = useParams();

    const [price, setPrice] = useState(0);

    // Constant for storing product list
    const [product, setProduct] = useState(null);
    // Constant for storing product list
    const [nutrition, setNutrition] = useState(null);

    const [relatedProduct, setRelatedProduct] = useState(null);

    const [cartState, setCartState] = useState({ id: "", flavour: "", pack: "", price: 0, thumbnail: "", itemID: "" });

    
    useEffect(() => {

        // Makes the site jump to the top of new pages when links are clicked
        window.scroll({
            top: 0,
            left: 0,
        });

        fetch(`/api/product/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setProduct(data);
                setPrice(data.price[0]);

                if (data.nutrition.length !== 1) {
                    fetch(`/api/nutrition`)
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            // console.log(data);
                            setNutrition(data);

                            fetch(`/api/product`)
                                .then(res => {
                                    return res.json();
                                })
                                .then(data => {
                                    // console.log(data.filter((product) => product._id !== id));
                                    setRelatedProduct(data.filter((product) => product._id !== id));

                                    for (let x in data.filter((product) => product._id !== id)) {
                                        document.getElementsByClassName('splash-image')[x].style.backgroundImage = "url('../" + data[x].splashImage + "')";
                                    }

                                    if (document.getElementsByClassName("img-magnifier-glass")[0]) {
                                        document.getElementsByClassName("img-magnifier-glass")[0].remove();
                                    }

                                    function magnify(imgID, zoom) {
                                        var img, glass, w, h, bw;
                                        img = document.getElementById(imgID);
                                        /*create magnifier glass:*/
                                        glass = document.createElement("DIV");
                                        glass.setAttribute("class", "img-magnifier-glass");
                                        /*insert magnifier glass:*/
                                        img.parentElement.insertBefore(glass, img);
                                        /*set background properties for the magnifier glass:*/
                                        glass.style.backgroundImage = "url('" + img.src + "')";
                                        glass.style.backgroundRepeat = "no-repeat";
                                        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
                                        bw = 3;
                                        w = glass.offsetWidth / 2;
                                        h = glass.offsetHeight / 2;
                                        /*execute a function when someone moves the magnifier glass over the image:*/
                                        glass.addEventListener("mousemove", moveMagnifier);
                                        img.addEventListener("mousemove", moveMagnifier);
                                        glass.addEventListener("mouseleave", removeMagnifier);
                                        /*and also for touch screens:*/
                                        glass.addEventListener("touchmove", moveMagnifier);
                                        img.addEventListener("touchmove", moveMagnifier);
                                        function removeMagnifier(e) {
                                            e.target.style.opacity = "0";
                                        }
                                        function moveMagnifier(e) {
                                            var pos, x, y;
                                            /*prevent any other actions that may occur when moving over the image*/
                                            e.preventDefault();
                                            e.target.style.opacity = "1";
                                            /*get the cursor's x and y positions:*/
                                            pos = getCursorPos(e);
                                            x = pos.x;
                                            y = pos.y;
                                            /*prevent the magnifier glass from being positioned outside the image:*/
                                            if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
                                            if (x < w / zoom) { x = w / zoom; }
                                            if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
                                            if (y < h / zoom) { y = h / zoom; }
                                            /*set the position of the magnifier glass:*/
                                            glass.style.left = (x - w) + "px";
                                            glass.style.top = (y - h) + "px";
                                            /*display what the magnifier glass "sees":*/
                                            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
                                        }
                                        function getCursorPos(e) {
                                            var a, x = 0, y = 0;
                                            e = e || window.event;
                                            /*get the x and y positions of the image:*/
                                            a = img.getBoundingClientRect();
                                            /*calculate the cursor's x and y coordinates, relative to the image:*/
                                            x = e.pageX - a.left;
                                            y = e.pageY - a.top;
                                            /*consider any page scrolling:*/
                                            x = x - window.pageXOffset;
                                            y = y - window.pageYOffset;
                                            return { x: x, y: y };
                                        }
                                    }

                                    /*Initiate Magnify Function with the id of the image, and the strength of the magnifier glass:*/
                                    magnify("productImg", 1.5);
                                })
                        })
                } else {
                    fetch(`/api/nutrition/${data.nutrition[0]}`)
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            // console.log([data]);
                            setNutrition([data]);

                            fetch(`/api/product`)
                                .then(res => {
                                    return res.json();
                                })
                                .then(data => {
                                    setRelatedProduct(data.filter((product) => product._id !== id));

                                    for (let x in data.filter((product) => product._id !== id)) {
                                        document.getElementsByClassName('splash-image')[x].style.backgroundImage = "url('../" + data[x].splashImage + "')";
                                    }

                                    if (document.getElementsByClassName("img-magnifier-glass")[0]) {
                                        document.getElementsByClassName("img-magnifier-glass")[0].remove();
                                    }

                                    function magnify(imgID, zoom) {
                                        var img, glass, w, h, bw;
                                        img = document.getElementById(imgID);
                                        /*create magnifier glass:*/
                                        glass = document.createElement("DIV");
                                        glass.setAttribute("class", "img-magnifier-glass");
                                        /*insert magnifier glass:*/
                                        img.parentElement.insertBefore(glass, img);
                                        /*set background properties for the magnifier glass:*/
                                        glass.style.backgroundImage = "url('" + img.src + "')";
                                        glass.style.backgroundRepeat = "no-repeat";
                                        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
                                        bw = 3;
                                        w = glass.offsetWidth / 2;
                                        h = glass.offsetHeight / 2;
                                        /*execute a function when someone moves the magnifier glass over the image:*/
                                        glass.addEventListener("mousemove", moveMagnifier);
                                        img.addEventListener("mousemove", moveMagnifier);
                                        glass.addEventListener("mouseleave", removeMagnifier);
                                        /*and also for touch screens:*/
                                        glass.addEventListener("touchmove", moveMagnifier);
                                        img.addEventListener("touchmove", moveMagnifier);
                                        function removeMagnifier(e) {
                                            e.target.style.opacity = "0";
                                        }
                                        function moveMagnifier(e) {
                                            var pos, x, y;
                                            /*prevent any other actions that may occur when moving over the image*/
                                            e.preventDefault();
                                            e.target.style.opacity = "1";
                                            /*get the cursor's x and y positions:*/
                                            pos = getCursorPos(e);
                                            x = pos.x;
                                            y = pos.y;
                                            /*prevent the magnifier glass from being positioned outside the image:*/
                                            if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
                                            if (x < w / zoom) { x = w / zoom; }
                                            if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
                                            if (y < h / zoom) { y = h / zoom; }
                                            /*set the position of the magnifier glass:*/
                                            glass.style.left = (x - w) + "px";
                                            glass.style.top = (y - h) + "px";
                                            /*display what the magnifier glass "sees":*/
                                            glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
                                        }
                                        function getCursorPos(e) {
                                            var a, x = 0, y = 0;
                                            e = e || window.event;
                                            /*get the x and y positions of the image:*/
                                            a = img.getBoundingClientRect();
                                            /*calculate the cursor's x and y coordinates, relative to the image:*/
                                            x = e.pageX - a.left;
                                            y = e.pageY - a.top;
                                            /*consider any page scrolling:*/
                                            x = x - window.pageXOffset;
                                            y = y - window.pageYOffset;
                                            return { x: x, y: y };
                                        }
                                    }

                                    /*Initiate Magnify Function with the id of the image, and the strength of the magnifier glass:*/
                                    magnify("productImg", 1.5);
                                })
                        })
                }
            })
    }, [id]);

    const carouselEffect = (e) => {
        document.getElementById("productImg").src = e.target.src;

        document.getElementsByClassName("img-magnifier-glass")[0].remove();

        function magnify(imgID, zoom) {
            var img, glass, w, h, bw;
            img = document.getElementById(imgID);
            /*create magnifier glass:*/
            glass = document.createElement("DIV");
            glass.setAttribute("class", "img-magnifier-glass");
            /*insert magnifier glass:*/
            img.parentElement.insertBefore(glass, img);
            /*set background properties for the magnifier glass:*/
            glass.style.backgroundImage = "url('" + img.src + "')";
            glass.style.backgroundRepeat = "no-repeat";
            glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
            bw = 3;
            w = glass.offsetWidth / 2;
            h = glass.offsetHeight / 2;
            /*execute a function when someone moves the magnifier glass over the image:*/
            glass.addEventListener("mousemove", moveMagnifier);
            img.addEventListener("mousemove", moveMagnifier);
            glass.addEventListener("mouseleave", removeMagnifier);
            /*and also for touch screens:*/
            glass.addEventListener("touchmove", moveMagnifier);
            img.addEventListener("touchmove", moveMagnifier);
            function removeMagnifier(e) {
                e.target.style.opacity = "0";
            }
            function moveMagnifier(e) {
                var pos, x, y;
                /*prevent any other actions that may occur when moving over the image*/
                e.preventDefault();
                e.target.style.opacity = "1";
                /*get the cursor's x and y positions:*/
                pos = getCursorPos(e);
                x = pos.x;
                y = pos.y;
                /*prevent the magnifier glass from being positioned outside the image:*/
                if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
                if (x < w / zoom) { x = w / zoom; }
                if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
                if (y < h / zoom) { y = h / zoom; }
                /*set the position of the magnifier glass:*/
                glass.style.left = (x - w) + "px";
                glass.style.top = (y - h) + "px";
                /*display what the magnifier glass "sees":*/
                glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
            }
            function getCursorPos(e) {
                var a, x = 0, y = 0;
                e = e || window.event;
                /*get the x and y positions of the image:*/
                a = img.getBoundingClientRect();
                /*calculate the cursor's x and y coordinates, relative to the image:*/
                x = e.pageX - a.left;
                y = e.pageY - a.top;
                /*consider any page scrolling:*/
                x = x - window.pageXOffset;
                y = y - window.pageYOffset;
                return { x: x, y: y };
            }
        }

        /*Initiate Magnify Function with the id of the image, and the strength of the magnifier glass:*/
        magnify("productImg", 1.5);
    }

    const setPack = (pack, price, itemID) => {
        const currentCartState = { id: id, flavour: product.flavour, pack: pack, price: price, thumbnail: product.images[0], itemID: itemID };
        setCartState(currentCartState);
        setPrice(currentCartState.price);
        // console.log(itemID);
    }

    const addCart = (cartState) => {
        // console.log(cartState);
        document.getElementById("cart-badge").className += "cart-badge";
        setTimeout(() => { document.getElementById("cart-badge").className = ""; }, 1000);

        fetch(`/api/cart/${cartState.itemID}`)
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
        (product && nutrition && relatedProduct) && (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-11 col-xl-9 col-lg-10 col-md-11 col-sm-11 product-container">
                        <Link to="/shop" className="custom-btn btn-3 text-center back-btn">
                            <span><i className="fa fa-arrow-left" style={{
                                fontSize: '20px',
                                marginRight: '0.5em',
                            }}></i>
                                Back</span>
                        </Link>
                        <div className="text-center">
                            <div className="productBox">
                                <div className="productInfo">
                                    <div className="productImages">
                                        <div className="img-magnifier-container mr-3">
                                            <img src={`../${product.images[0]}`} alt={`Can of ${product.flavour}`} id="productImg" style={{ marginBottom: '1em' }} className="w-100" />
                                        </div>
                                        <div className="productImgCarosel">
                                            <img src={`../${product.images[0]}`} alt={`Can of ${product.flavour}`} className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                            <img src={`../${product.images[1]}`} alt={`Can of ${product.flavour} in white background`} className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                            <img src={`../${product.images[2]}`} alt={`Can of ${product.flavour} at the beach`} className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                            <img src={`../${product.images[3]}`} alt={`Can of ${product.flavour} with other props`} className="productCaroselItem" onClick={(e) => carouselEffect(e)} />
                                            <img src={`../${product.images[4]}`} alt={`Pouring a can of ${product.flavour}`} className="productCaroselItem" onClick={(e) => carouselEffect(e)} style={{ marginRight: 0 }} />
                                        </div>
                                    </div>
                                    <div className="productDesc">
                                        <h2>{product.flavour}</h2>
                                        <h4>{`${product.size}ml`}</h4>
                                        <SlRating readonly precision=".25" value={product.rating} className="productRating"></SlRating> {/* Displays the ratings from the backend, read only. */}
                                        <h3>{`£ ${price}`}</h3>
                                        <p>{product.description}</p>

                                        <div className="productOptions">
                                            <Link className="packoption custom-btn btn-3" onClick={() => setPack(3, product.price[0], product.items[0])}><span>3 Pack</span></Link>
                                            <Link className="packoption custom-btn btn-3" onClick={() => setPack(6, product.price[1], product.items[1])}><span>6 Pack</span></Link>
                                            <Link className="custom-btn btn-3" onClick={() => setPack(12, product.price[2], product.items[2])}><span>12 Pack</span></Link>
                                        </div>
                                        <Link className="custom-btn-widest btn-5" onClick={() => addCart(cartState)}><span>Add to Cart</span></Link>

                                    </div>
                                </div>
                            </div>
                            <div className="productFacts">
                                <h3>Ingredients</h3>
                                {nutrition.map((n, index) => (
                                    <p id={n._id + "-" + index} key={n._id}>{n.ingredients}</p>
                                ))}
                            </div>
                            <div className="productFacts">
                                <h3>Nutritional Information</h3>
                                {nutrition.map((n, index) => (
                                    <div className="nutritionalTable col-lg-6 col-md-8 col-sm-8 col-8" id={"nt-" + n._id + "-" + index} key={n._id}>
                                        <div className="nutritAvTitle">
                                            <h5 className="nutritAttribute">Average Quantity</h5>
                                            <h5 className="nutritFact text-right">Per 100ml</h5>
                                        </div>
                                        <div className="nutritInfo">
                                            <h5 className="nutritAttribute">Energy</h5>
                                            <h5 className="nutritFact">{`${n.energy[0]}/${n.energy[1]}`}</h5>
                                        </div>
                                        <div className="nutritInfo">
                                            <h5 className="nutritAttribute">Fat</h5>
                                            <h5 className="nutritFact">{`${n.fat}g`}</h5>
                                        </div>
                                        <div className="nutritInfo">
                                            <h5 className="nutritAttribute">Carbohydrates</h5>
                                            <h5 className="nutritFact">{`${n.carbohydrateTotal}g`}</h5>
                                        </div>
                                        <div className="nutritInfo">
                                            <h5 className="nutritAttribute">~ Sugar</h5>
                                            <h5 className="nutritFact">{`${n.carbohydrateSugar[0]}g`}</h5>
                                        </div>
                                        <div className="nutritInfo">
                                            <h5 className="nutritAttribute">Protein</h5>
                                            <h5 className="nutritFact">{`${n.protein}g`}</h5>
                                        </div><div className="nutritInfo">
                                            <h5 className="nutritAttribute">Sodium</h5>
                                            <h5 className="nutritFact">{`${n.salt}g`}</h5>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="productFacts">
                                <h3 className="mt-5 mb-0">You may Also like</h3>
                                <div className="row mt-0" style={{
                                    textAlign: 'initial',
                                }}>
                                    {
                                        relatedProduct && relatedProduct
                                            .filter((product) => product._id !== id)
                                            .map((product) => (
                                                <div className="product col-12 col-lg-4 col-md-4 col-sm-6 mt-0" id={product._id} key={product._id} style={{
                                                    padding: '1.5em',
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
                                                        zIndex: '0',
                                                        opacity: '0',
                                                        transform: 'scale(1.1)',
                                                    }}>

                                                    </div>
                                                    <ProductList product={product} />
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                            {/* All information pulled from the backend, see following comments for references*/}
                            {/* Mixed Pack: */}
                            {/* Feel Good Drinks. N.d. "[Cans on pastel background]." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/. */}
                            {/* Feel Good Drinks. N.d. "Raspberry & Hibiscus." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/raspberry-hibiscus-12-x-330ml.  */}
                            {/* Feel Good Drinks. N.d. "Peach & Passionfruit." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/peach-passionfruit-12-x-330ml.   */}
                            {/* Feel Good Drinks. N.d. "Rhubarb & Apple." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/rhubarb-apple-12-x-330ml.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2020. “Save 30% on all the Feel Good flavours until October 27th!” Instagram Photo, October 9, 2020. https://www.instagram.com/p/CGFxR_NHoCg/.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “NEWSFLASH! Find your flavour!” Instagram Photo, April 19, 2021. https://www.instagram.com/p/CN0Ws5SLTtr/ */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2020. “BUY NOW 10% OFF.” Instagram Photo, August 3, 2020. https://www.instagram.com/p/CDbO_EUHymK/.  */}
                            {/* Peach & Passionfruit: */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. "NEWSFLASH." Instagram Photo, March 3, 2021. https://www.instagram.com/p/CL7KBoJlScq/.  */}
                            {/* Feel Good Drinks. N.d. "Peach & Passionfruit." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/peach-passionfruit-12-x-330ml.   */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “At the beating heart of Feel Good is a mission to make this world a better place for everyone.” Instagram Photo, July 9, 2021. https://www.instagram.com/p/CRGG2XCL0SN/.  */}
                            {/* Sjöström, Oliver. 2018. “Men running toward beach.” Unsplash. https://unsplash.com/photos/1mtPJuiteRI.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “We added a squeeze of real apple juice, natural peach & passionfruit flavours and a touch of maca to our British sparkling water.” Instagram Photo, April 21, 2021. https://www.instagram.com/p/CN5Pzzcrge_/.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2020. “Stop, sip and revive.” Instagram Photo, April 23, 2020. https://www.instagram.com/p/B_U2McfFSUB/.  */}
                            {/* Raspberry & Hibiscus: */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. "NEWSFLASH." Instagram Photo, March 3, 2021. https://www.instagram.com/p/CL7KBoJlScq/.  */}
                            {/* Feel Good Drinks. N.d. "Raspberry & Hibiscus." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/raspberry-hibiscus-12-x-330ml.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2020. “At the heart of Feel Good is a mission to make this world a better place for everyone.” Instagram Photo, October 31, 2020. https://www.instagram.com/p/CHAIqumrJB5/.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “Natural raspberry flavour, a squeeze of real apple juice plus a touch of hibiscus and ginseng is added to our British sparkling water.” Instagram Photo, February 11, 2021. https://www.instagram.com/p/CLJregYFMe9/.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “£4 OFF.” Instagram Photo, April 29, 2021. https://www.instagram.com/p/CHAIqumrJB5/.  */}
                            {/* Rhubarb & Apple */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. "NEWSFLASH." Instagram Photo, March 3, 2021. https://www.instagram.com/p/CL7KBoJlScq/.  */}
                            {/* Feel Good Drinks. N.d. "Rhubarb & Apple." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/rhubarb-apple-12-x-330ml.  */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “3% of every can of Feel Good you buy goes back to charities.” Instagram Photo, April 28, 2021. https://www.instagram.com/p/COLSphirTrw/. */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. “3% of every can of Feel Good you buy goes back to charities.” Instagram Photo, April 28, 2021. https://www.instagram.com/p/COLSphirTrw/. */}
                            {/* Feel Good Drinks (@feelgooddrinks). 2021. "When we make time for the things in life that make is Feel Good, everything else will follow." Instagram photo, March 24, 2021. https://www.instagram.com/p/CMxTUtALlt4/.  */}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductDetails;