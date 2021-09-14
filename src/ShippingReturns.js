import { useEffect } from "react";

const Shipping = () => {

    useEffect(() => {

        // Makes the site jump to the top of new pages when links are clicked
        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);

    return (
        <div className="container-fluid">
            {/* Header section for the Shipping and Returns page */}
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left">
                    <h1 className="pageTitle">Shipping & Returns</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under page title */}
                </div>
            </div>
            <div className="row text-left align-items-center shipping-content">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="shipping-section">
                        <h5><strong>DELIVERY TERMS</strong></h5>
                            <p>We aim to ship on the same day to a UK address for orders placed before midday. Please allow 2-3 working days for your Feel Good to arrive at your doorstep.  #FeelGoodMoment</p>
                    </div>
                    <div className="shipping-section">
                        <h5><strong>RETURNS</strong></h5>
                            <p>Your right to cancel does not affect your rights as a consumer in relation to any defective or incorrect products you may receive. If you receive a defective or incorrect product, please contact us immediately at <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a> with your order number and a description of the problem. Thank you.</p>
                    </div>
                    <div>
                        <h5><strong>WHERE WE DELIVER</strong></h5>
                            <p>We ship to UK based addresses. Sadly, we can't offer international deliveries at present, but watch this space! </p><br></br>
                    </div>
                </div>
            </div>
        </div>
        // All textual content from: Feel Good Drinks. n.d. "Shipping & Returns." Feel Good Drinks. Accessed August 1, 2021. https://feelgooddrinks.com/pages/shipping-returns.
    );
}
 
export default Shipping;