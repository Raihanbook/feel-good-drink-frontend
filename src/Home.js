import { InView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const Home = () => {

    useEffect(() => {
        const gsap = window.gsap;

        // animate bubbles using gsap
        gsap.fromTo(".bubbleone", {
            scale: 0.1
        }, {
            scale: 1,
            duration: 2,
            repeat: -1,
            opacity: 0
        })

        gsap.fromTo(".bubbletwo", {
            scale: 1
        }, {
            scale: 1.5,
            duration: 2,
            repeat: -1,
            opacity: 0
        })

        gsap.fromTo(".bubblethree", {
            scale: 0.5,
            opacity: 0
        }, {
            scale: 1.5,
            duration: 2,
            repeat: -1,
            opacity: 1
        })

        gsap.fromTo(".bubblefour", {
            scale: 0,
            opacity: 1
        }, {
            scale: 1.5,
            duration: 2,
            repeat: -1,
            opacity: 0
        })

        // add timeline 
        var tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 0
        });

        //add 3 tweens that will play in direct succession.
        tl.to(".numberone", {
            duration: 1,
            scale: 1,
            opacity: 0
        });
        tl.to(".numbertwo", {
            duration: 1,
            opacity: 0,
            scale: 2
        });
        tl.to(".numberthree", {
            duration: 0.5,
            opacity: 0,
            scale: 2
        });
        tl.to(".numberfour", {
            duration: 0.1,
            opacity: 0,
            scale: 2
        });
        tl.to(".numberfive", {
            duration: 1,
            opacity: 0,
            scale: 2
        });
        tl.to(".numbersix", {
            duration: 0.5,
            scale: 1.5,
            opacity: 0
        });

        // add another timeline 
        var t2 = gsap.timeline({
            repeat: -1,
            repeatDelay: 0
        });

        //add 3 tweens that will play in direct succession.
        t2.to(".number-one", {
            duration: 1,
            opacity: 0,
            x: 0
        });
        t2.to(".number-two", {
            duration: 1,
            opacity: 0,
            scale: 2
        });
        t2.to(".number-three", {
            duration: 0.5,
            opacity: 1,
            x: 0,
            scale: 2,
            y: 20
        });
        t2.to(".number-four", {
            duration: 0.5,
            opacity: 0,
            scale: 2
        });
        t2.to(".number-five", {
            duration: 1,
            opacity: 0,
            scale: 2
        });
        t2.to(".number-six", {
            duration: 0.5,
            opacity: 0,
            scale: 1.5
        });


        // animation for class circle objects
        let object = {
            el: '.circle',
            duration: 10,
        }

        gsap.fromTo(object.el, object.duration, {
            opacity: 2,
            y: '+=10',
            scale: 1.5,

        }, {
            opacity: 1,
            y: '-2000', //  moving to this position on y-axis
            scale: -0.5, // decreasing in size
            stagger: {
                each: object.duration / document.querySelectorAll(object.el).length,
                repeat: -1
            }
        });

        window.scroll({
            top: 0,
            left: 0,
        });
    }, []);

    const variants = {
        initial: {
            opacity: 0,
            y: 40,
        },
        show: {
            opacity: 1,
            y: 0,
        },
    };

    return (
        <div className="container-fluid">
            <div className="row align-items-center" style={{
                backgroundColor: '#cec9ff',
                backgroundImage: 'url("./hero_img.png")', // Image modified by Group Mint. Original Image Source: Feel Good Drinks (@feelgooddrinks). 2020. “BUY NOW 10% OFF.” Instagram Photo, August 3, 2020. https://www.instagram.com/p/CDbO_EUHymK/. 
                height: '100vmin',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div className="col-9 col-lg-6 col-md-6 col-sm-7 text-center hero-text">
                    <div>
                        <div>
                            <h4>Feel Good is a range of 100% natural, great tasting, fruitful sparkling waters in recyclable and plastic free packaging.</h4>
                        </div>
                        <div className="mt-5">
                            <Link to="/shop" className="custom-btn btn-3 m-2"><span>Shop Now</span></Link>
                            <Link to="/about-us" className="custom-btn btn-3 m-2"><span>About Us</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-xl-10 col-lg-11 col-md-11 col-sm-12 home-container">
                    <div className="row mt-5 mb-5">
                        <div className="col-12 text-center">
                            <h1><strong>Find Your Flavour</strong></h1> {/* Section title */}
                        </div>
                    </div>

                    <InView triggerOnce threshold={0.25}>
                        {({ ref, inView }) => (
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate={inView ? 'show' : undefined}
                                transition={{ duration: 1 }}
                                ref={ref}
                                className="row m-auto drink-section"
                            >
                                <div className="col-12 col-lg-7 col-md-7 text-center">
                                    {/* Peach and Passionfruit 3D Model Can. 3D model and texturing created by Group Mint. Design Reference: Feel Good Drinks. n.d. "Peach & Passionfruit." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/pages/our-flavours. */}
                                    <div id="peach-can">
                                        <model-viewer src="./3d_models/peach_passionfruit/peach_passionfruit.gltf" alt="Peach and Passionfruit 3D Can" auto-rotate camera-controls ar environment-image="neutral"></model-viewer> {/* Model-viewer loading the 3D model, with auto rotate, camera controls (allow user to rotate can) and ar enabled. Background set to neutral for best environment. Implemented with the help of this tutorial: Mutua, Chris. 2021. "How to Insert 3D Objects into a Webpage using HTML and CSS." Section. https://www.section.io/engineering-education/how-to-insert-3d-objects-into-a-webpage-using-html-and-css/ */}
                                    </div>
                                    <img className="splash-image mw-100" src="./peach_and_passionfruit_splash.png" alt="Peach and Passionfruit Splash" />{/* Splash image created by Group Mint */}
                                </div>
                                <div className="col-12 col-lg-5 col-md-5">
                                    <div className="mt-4 text-center">
                                        <h2><strong>Peach & Passionfruit</strong></h2> {/* Sub-Section title */}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h5>330ml</h5>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h4><strong>From £4.99</strong></h4>
                                    </div>
                                    <div className="mt-4 text-left">
                                        <p>We added a squeeze of real apple juice, natural peach & passionfruit flavours and a touch of maca to our British sparkling water to make a tongue-tingling drink you can enjoy anywhere; the perfect non-alcoholic pick-me-up! Stop, sip and give back.</p> {/* Text Source: Feel Good Drinks. N.d. "Peach & Passionfruit." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/peach-passionfruit-12-x-330ml. */}
                                    </div>
                                    <div className="mt-2 text-center">
                                        <Link to="/product/60ecb9f24bf2f02fcb044074" className="custom-btn btn-3 m-3"><span>View Details</span></Link>
                                        <Link to="/shop" className="custom-btn btn-3 m-3"><span>Shop All</span></Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    <InView triggerOnce threshold={0.25}>
                        {({ ref, inView }) => (
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate={inView ? 'show' : undefined}
                                transition={{ duration: 1 }}
                                ref={ref}
                                className="row m-auto drink-section"
                            >
                                <div className="col-12 col-lg-5 col-md-5 order-12 order-lg-1 order-md-1">
                                    <div className="mt-4 text-center">
                                        <h2><strong>Raspberry & Hibiscus</strong></h2> {/* Sub-Section title */}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h5>330ml</h5>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h4><strong>From £4.99</strong></h4>
                                    </div>
                                    <div className="mt-4 text-left">
                                        <p> Natural raspberry flavour, a squeeze of real apple juice plus a touch of hibiscus and ginseng is added to our British sparkling water, to create a delicious fruitful alternative to sugary carbonated drinks. Stop, sip and give back.</p> {/* Text Source: Feel Good Drinks. N.d. "Raspberry & Hibiscus." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/raspberry-hibiscus-12-x-330ml. */}
                                    </div>
                                    <div className="mt-2 text-center">
                                        <Link to="/product/60ecb6704bf2f02fcb04406f" className="custom-btn btn-3 m-3"><span>View Details</span></Link>
                                        <Link to="/shop" className="custom-btn btn-3 m-3"><span>Shop All</span></Link>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-7 col-md-7 order-1 order-lg-12 text-center">
                                    {/* Raspberry and Hibiscus 3D Model Can. 3D model and texturing created by Group Mint. Design reference: Feel Good Drinks. n.d. "Raspberry & Hibiscus." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/pages/our-flavours. */}
                                    <div id="raspberry-can">
                                        <model-viewer src="./3d_models/raspberry_hibiscus/raspberry_hibiscus.gltf" alt="Raspberry and Hibiscus 3D Can" auto-rotate camera-controls ar environment-image="neutral"></model-viewer> {/* Model-viewer loading the 3D model, with auto rotate, camera controls (allow user to rotate can) and ar enabled. Background set to neutral for best environment. Implemented with the help of this tutorial: Mutua, Chris. 2021. "How to Insert 3D Objects into a Webpage using HTML and CSS." Section. https://www.section.io/engineering-education/how-to-insert-3d-objects-into-a-webpage-using-html-and-css/*/}
                                    </div>
                                    <img className="splash-image" src="./raspberry_and_hibiscus_splash.png" alt="Raspberry and Hibiscus Splash" /> {/* Splash image created by Group Mint */}
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    <InView triggerOnce threshold={0.25}>
                        {({ ref, inView }) => (
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate={inView ? 'show' : undefined}
                                transition={{ duration: 1 }}
                                ref={ref}
                                className="row m-auto drink-section"
                            >
                                <div className="col-12 col-lg-7 col-md-7 text-center">
                                    {/* Apple and Rhubarb 3D Model Can. 3D model and texturing created by Group Mint. Design reference: Feel Good Drinks. n.d. "Rhubarb & Apple." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/pages/our-flavours. */}
                                    <div id="rhubarb-can">
                                        <model-viewer src="./3d_models/rhubarb_apple/rhubarb_apple.gltf" alt="Rhubarb and Apple 3D Can" auto-rotate camera-controls ar environment-image="neutral"></model-viewer>{/* Model-viewer loading the 3D model, with auto rotate, camera controls (allow user to rotate can) and ar enabled. Background set to neutral for best environment. Implemented with the help of this tutorial: Mutua, Chris. 2021. "How to Insert 3D Objects into a Webpage using HTML and CSS." Section. https://www.section.io/engineering-education/how-to-insert-3d-objects-into-a-webpage-using-html-and-css/ */}
                                    </div>
                                    <img className="splash-image" src="./rhubarb_and_apple_splash.png" alt="Rhubarb and Apple Splash" /> {/* Splash image created by Group Mint */}
                                </div>
                                <div className="col-12 col-lg-5 col-md-5">
                                    <div className="mt-4 text-center">
                                        <h2><strong>Rhubarb & Apple</strong></h2> {/* Sub-Section title */}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h5>330ml</h5>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h4><strong>From £4.99</strong></h4>
                                    </div>
                                    <div className="mt-4 text-left">
                                        <p>Real apple juice and 100% natural rhubarb flavours infused with Echinacea makes our British sparkling water a delicious taste of the seasons and the ideal choice to refresh you any day of the year. Don't forget to chill it! Stop, sip and give back. </p> {/* Text Source: Feel Good Drinks. N.d. "Rhubarb & Apple." Feel Good Drinks. Accessed June 10, 2021. https://feelgooddrinks.com/collections/shop/products/rhubarb-apple-12-x-330ml. */}
                                    </div>
                                    <div className="mt-2 text-center">
                                        <Link to="/product/60ecba154bf2f02fcb044075" className="custom-btn btn-3 m-3"><span>View Details</span></Link>
                                        <Link to="/shop" className="custom-btn btn-3 m-3"><span>Shop All</span></Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>

                    <InView triggerOnce threshold={0.25}>
                        {({ ref, inView }) => (
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate={inView ? 'show' : undefined}
                                transition={{ duration: 1 }}
                                ref={ref}
                                className="row m-auto"
                            >
                                <div className="col-12">
                                    <div className="card m-auto col-12 col-lg-10 col-md-12 col-sm-12" style={{
                                        boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                                    }}>
                                        <div className="card-body">
                                            <div className="row mission-container">
                                                <div className="col-12 text-center mb-4 order-1 order-lg-1">
                                                    <h2 className="card-title">Our Mission</h2> {/* Section title */}
                                                </div>
                                                <div className="col-12 text-center mb-5 order-2 order-lg-2">
                                                    <p className="card-subtitle"><strong>We are a purpose driven brand on a mission to lead change from within the drinks industry.</strong></p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                                </div>
                                                <div className="col-12 col-lg-6 order-4 order-lg-3">
                                                    <div className="row align-items-center mb-5">
                                                        <div className="col-12" style={{ display: '-webkit-box' }}>
                                                            <div className="row align-items-center">
                                                                <img src="./dot_point.png" alt="Dot Point" width="30px" height="auto" className="ml-4" />
                                                            </div>
                                                            <p className="card-text ml-5 mr-4">Our ambitions may be big, but we are already the first soft drink in the UK to become Climate Positive.</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-5">
                                                        <div className="col-12" style={{ display: '-webkit-box' }}>
                                                            <div className="row align-items-center">
                                                                <img src="./dot_point.png" alt="Dot Point" width="30px" height="auto" className="ml-4" />
                                                            </div>
                                                            <p className="card-text ml-5 mr-4">We have been awarded Planet Mark certification and are committed to being Carbon Net Zero by 2030. So far so good.</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-5">
                                                        <div className="col-12" style={{ display: '-webkit-box' }}>
                                                            <div className="row align-items-center">
                                                                <img src="./dot_point.png" alt="Dot Point" width="30px" height="auto" className="ml-4" />
                                                            </div>
                                                            <p className="card-text ml-5 mr-4">In addition we have established our 3% For People and Planet Fun - giving 3% of sales to charities and non-profit organisations with shared values and actions.</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-lg-6 col-md-10 text-center mb-5 order-3 order-lg-4">
                                                    <video className="planet-animation" autoPlay loop muted playsInline> {/* Animation of People and Planet logo, set to autoplay, loop forever. Muted for Chrome support, playsInline for IOS support */}
                                                        <source src="./people_planet.mp4" type="video/mp4" /> {/* Image Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. Animated by Group Mint*/}
                                                    </video>
                                                </div>
                                                <div className="col-12 order-5 order-lg-5">
                                                    <hr style={{ borderTop: '2px solid #222222' }} />
                                                </div>
                                                <div className="col-12 col-lg-6 col-md-10 text-center order-6 order-lg-6">
                                                    <img src="./speech_bubble_slim.png" alt="Speech Bubble" className="w-50" /> {/* Original Image Source: John3. 2019. "Chat Oval Speech Bubbles Symbol Comments." Top PNG. https://toppng.com/chat-oval-speech-bubbles-symbol-comments-icon-chat-PNG-free-PNG-Images_234561. Image modified by Group Mint*/}
                                                </div>
                                                <div className="col-12 col-lg-6 order-7 order-lg-7">
                                                    <div className="row">
                                                        <div className="col-12 text-center mb-3 mt-3">
                                                            <p className="card-subtitle"><strong>As Ed Woolner, the man behind the brand says,</strong></p>
                                                        </div>
                                                        <div className="col-12">
                                                            <p className="card-text ml-3">"We all know how precarious our planet's future is, how hard it is to protect and restore it, but we can have a positive impact - as custodians of the land, parents and consumers. With each choice we can make a difference and here at Feel Good we have the opportunity to support others with those choices too. That makes me very happy."</p> {/* Text Source: Feel Good Drinks. N.d. "3% for People & Planet." Feel Good Drinks. Accessed June 11, 2021. https://feelgooddrinks.com/pages/3-percent-for-people-and-planet. */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 order-8 order-lg-8">
                                                    <div className="mt-2 text-center">
                                                        <Link to="/about-us" className="custom-btn-wide btn-4 m-3"><span>Find Out More</span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </InView>
                    <div className="row m-auto insta-container">
                        <div className="col-12">
                            <div className="mt-4 text-center">
                                <h2><strong>Join Us On Instagram!</strong></h2>{/* Section title */}
                            </div>
                            <div className="mt-4 mb-4 text-center">
                                <a className="insta-link" href="https://www.instagram.com/feelgooddrinks" target="_blank" rel="noreferrer"><h4>@feelgooddrinks</h4></a>
                            </div>
                        </div>
                        <div className="row bubble-container">
                            <div className="col-6">
                                <div class="bubbleone"></div>
                                <div class="bubbletwo"></div>
                                <div class="bubblethree"></div>
                                <div class="bubblefour"></div>
                                <div class="dot number-three"></div>


                                <div class="circles">
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                </div>

                            </div>
                            <div className="col-6">
                                <div>
                                    <div class="dot number-two"></div>
                                    <div class="dot numberone" ></div>
                                    <div class="dot numberfive" ></div>
                                    <div class="dot numbertwo"></div>
                                    <div class=" dot number-one" ></div>
                                    <div class="dot number-five" ></div>
                                </div>
                            </div>
                        </div>
                        <div className="row insta-imgs">
                            <blockquote className="instagram-media" data-instgrm-version="7">
                                <a href="https://www.instagram.com/p/CQ0TmwBriQQ/embed/"><i alt="Feel Good Drinks and Beau's Icecream Instagram Photo"></i></a> {/* Feel Good Drinks (@feelgooddrinks). 2021. "COMPETITION CLOSED WINNER ANNOUNCED AT 6pm." Instagram Photo, July 2, 2021. https://www.instagram.com/p/CQ0TmwBriQQ/ */}
                            </blockquote>
                            <div style={{ width: '10px', }}></div>
                            <blockquote className="instagram-media" data-instgrm-version="7" >
                                <a href="https://www.instagram.com/p/CQOUTyRraQf/embed/"><i alt="Feel Good Drinks and their packaging Instagram Photo"></i></a> {/* Feel Good Drinks (@feelgooddrinks). 2021. "DID YOU KNOW METALS RECYCLE FOREVER?" Instagram Photo, June 17, 2021. https://www.instagram.com/p/CQOUTyRraQf */}
                            </blockquote>
                            <div style={{ width: '10px', }}></div> {/* Div to act as padding between insta images. As it's an embed we had little control over styling of these images. */}
                            <blockquote className="instagram-media" data-instgrm-version="7" >
                                <a href="https://www.instagram.com/p/CP8HbOCr3I8/embed/"><i alt="Feel Good Drinks on the beach Instagram Photo"></i></a> {/* Feel Good Drinks (@feelgooddrinks). 2021. "Is it the weekend yet?" Instagram Image, June 10, 2021. https://www.instagram.com/p/CP8HbOCr3I8/. */}
                            </blockquote>
                            <div style={{ width: '10px', }}></div> {/* Div to act as padding between insta images. */}
                            <blockquote className="instagram-media" data-instgrm-version="7" >
                                <a href="https://www.instagram.com/p/CCopon9B3ze/embed/"><i alt="Feel Good Drinks Peach and Passionfruit held on the beach Instagram Photo"></i></a> {/* Feel Good Drinks (@feelgooddrinks). 2020. "Smell the sea, and feel the sky." Instagram Photo, July 15, 2020. https://www.instagram.com/p/CCopon9B3ze */}
                            </blockquote>
                            <div style={{ width: '10px', }}></div> {/* Div to act as padding between insta images. */}
                            <blockquote className="instagram-media" data-instgrm-version="7" >
                                <a href="https://www.instagram.com/p/CN0Ws5SLTtr/embed/"><i alt="Feel Good Drinks 3% for people and planet packaging Instagram Photo"></i></a> {/* Feel Good Drinks (@feelgooddrinks). 2021. "NEWSFLASH!" Instagram Image, April 19, 2021. https://www.instagram.com/p/CN0Ws5SLTtr/.  */}
                            </blockquote>
                            <div style={{ width: '10px', }}></div> {/* Div to act as padding between insta images. */}
                            <blockquote className="instagram-media" data-instgrm-version="7" >
                                <a href="https://www.instagram.com/p/CKyeur3lyx3/embed/"><i alt="Feel Good Drinks Apple and Rhubarb with salad Instagram Photo"></i></a> {/* Feel Good Drinks (@feelgooddrinks). 2021. "LUNCH TIME!" Instagram Photo, February 2, 2021. https://www.instagram.com/p/CKyeur3lyx3. */}
                            </blockquote>
                            <div style={{ width: '10px', }}></div> {/* Div to act as padding between insta images. */}
                        </div>

                        <div className="row bubble-container2">
                            <div className="col-12">
                                <div class="dot numbersix" ></div>
                                <div class="dot numberthree"></div>
                                <div class="dot numberfour"></div>
                                <div class="dot number-six" ></div>
                                <div class="dot number-four"></div>
                                <div class="circles2">
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                    <div class="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;