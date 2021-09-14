import { Link } from 'react-router-dom';
import { useEffect } from "react";

// Makes the site jump to the top of new pages when links are clicked
const Stockist = () => {

    useEffect(() => {

        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);

    return (
        <div className="container-fluid text-center">
            {/* Header section for the Stockists page */}
            <div className="row mt-4 align-items-center">
                <div className="col-6 text-left">
                    <h1 className="pageTitle">Stockists</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under the title of the page */}
                </div>
            </div>
            <div className="row mx-lg-5 mx-md-2 align-items-center text-left">
                <div className="col-10 text-center mb-5 stock-container">
                    <h3 className="my-5"><strong>Find our products at the following retailers</strong></h3>
                    <div className="row g-3" >
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.booths.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_booths.png" alt="logo of Booths" className="stockistImg" /> {/* Booths. n.d. “[Booths Logo].” Booths. Accessed August 3, 2021. https://www.booths.co.uk.  */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.amazon.com" target="_blank" rel="noreferrer">
                            <img src="./logo_amazon.png" alt="logo of Amazon" className="stockistImg" /> {/* Amazon. n.d. “[Amazon Logo].” Amazon. Accessed August 3, 2021. https://www.amazon.com.  */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.whsmith.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_whsmith.png" alt="logo of WH Smith" className="stockistImg" /> {/* WHSmith. n.d. “[WHSmith Logo].” WHSmith. Accessed August 3, 2021. https://www.whsmith.co.uk. */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.spar.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_spar.png" alt="logo of Spar" className="stockistImg" /> {/* Spar. n.d. “[Spar Logo].” Spar. Accessed August 3, 2021. https://www.spar.co.uk.  */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.ocado.com/webshop/startWebshop.do" target="_blank" rel="noreferrer">
                            <img src="./logo_ocado.png" alt="logo of Ocado" className="stockistImg" />  {/* Ocado. n.d. “[Ocado Logo].” Ocado. Accessed August 3, 2021.  https://www.ocado.com/webshop/startWebshop.do.  */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.staustellbrewery.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_staustell.png" alt="logo of St Austell brewery" className="stockistImg" /> {/* St Austell Brewery. n.d. “[St Austell Logo].” St Austell Brewery. Accessed August 3, 2021. https://www.staustellbrewery.co.uk.  */}
                        </a>
                    </div>
                </div>
                <div className="col-10 text-center mb-5 stock-container">
                    <h3 className="my-5"><strong>Find our products at the following wholesalers</strong></h3>
                    <div className="row g-2 ">
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://www.bidfood.com.au" target="_blank" rel="noreferrer">
                            <img src="./logo_bidfood.png" alt="logo of Bid food" className="stockistImg" /> {/* Bidfood. n.d. “[Bidfood Logo].” Bidfood. Accessed August 3, 2021. https://www.bidfood.com.au.  */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://unnu.biz/about-us/" target="_blank" rel="noreferrer">
                            <img src="./logo_unnu.png" alt="logo of Unnu" className="stockistImg" /> {/* Unnu. n.d. “[Unnu Logo].” Unnu. Accessed August 3, 2021. https://unnu.biz/about-us/.  */}
                        </a>
                        <a className="col-lg-4 col-md-6" href="https://diversefinefood.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_diverse.png" alt="logo of Diverse" className="stockistImg" /> {/* Diverse Fine Food. n.d. “[Diverse Logo].” Diverse Fine Food. Accessed August 3, 2021. https://diversefinefood.co.uk.  */}
                        </a>
                        <a className="col-lg-4 col-md-6" href="https://www.brake.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_brakes.png" alt="logo of Brakes" className="stockistImg" /> {/* Brakes. n.d. “[Brakes Logo].” Brakes. Accessed August 3, 2021. https://www.brake.co.uk.  */}
                        </a>
                        <a className="col-lg-4 col-md-6 mb-sm-4" href="https://jdsfoodgroup.co.uk" target="_blank" rel="noreferrer">
                            <img src="./logo_jds.png" alt="logo of JD's" className="stockistImg" /> {/* JDS Food Group. n.d. “[JDS Logo].” JDS Food Group. Accessed August 3, 2021. https://jdsfoodgroup.co.uk. */}
                        </a>
                    </div>
                </div>
                <div className="col-12 text-center mb-5">
                    <h3 className="mb-3 mt-5"><strong>Want to stock our product?</strong></h3><br></br>
                    <div className="col-6 stock-btn-cont">
                        <Link to="/contact-us" className="custom-btn-widest btn-5 m-3 stock-btn"><span>Contact Us</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stockist;