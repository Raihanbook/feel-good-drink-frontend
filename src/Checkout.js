import { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CardSection from "./components/CardSection";

const Checkout = ({ setNewCart }) => {

    useEffect(() => {

        document.getElementById("myCart").style.width = "0";
        document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";

    }, []);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make  sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        if (result.error) {
            // Show error to your customer.
            console.log(result.error.message);
        } else {
            // Send the token to your server.
            // This function does not exist yet; we will define it in the next step.
            stripeTokenHandler(result.token);
            // console.log(result);
        }
    };

    function stripeTokenHandler(token) {
        const paymentData = {
            stripeToken: token.id,
            userName: fullName,
            userEmail: email,
            userNumber: phone,
            address: address
        };
        // console.log(paymentData);

        // Use fetch to send the token ID and any other payment data to your server.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentData),
        })
            .then(() => {
                setIsSubmitted(true);

                fetch(`/api/cart/items`)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => {
                        // console.log(data);
                        if (data.message) {
                            setNewCart(null);
                        } else {
                            setNewCart(data);
                        }
                    })
            })
    }

    return (
        <div className="container-fluid text-center">
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left">
                    <h1 className="pageTitle">Checkout</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under page title */}
                </div>
            </div>
            {!isSubmitted && (
                <div className="row contact-container text-center">
                    <div className="col-lg-8 col-md-9 col-sm-12">
                        <div className="card m-auto col-12 contact-card" style={{
                            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                            paddingBottom: '50px',
                        }}> {/* Card and box shadow around contact contents */}
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <label className="form-field">Full Name<span className="form-required">*</span></label><br></br> {/* Label for Name form field with styled asterix to visually show required fields */}
                                        <input name="full_name" type="text" className="form-input col-9 col-lg-7" required value={fullName} onChange={(e) => setFullName(e.target.value)}></input><br></br> {/* Text input field for Name, set to required */}
                                        <label className="form-field">Email<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                                        <input name="email" type="email" className="form-input col-9 col-lg-7" required value={email} onChange={(e) => setEmail(e.target.value)}></input><br></br> {/* email input for email, set to required */}
                                        <label className="form-field">Address<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                                        <input name="address" type="text" className="form-input col-9 col-lg-7" required value={address} onChange={(e) => setAddress(e.target.value)}></input><br></br> {/* Text input for business name, not required */}
                                        <label className="form-field">Phone<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                                        <input name="phone" type="text" className="form-input col-9 col-lg-7" required value={phone} onChange={(e) => setPhone(e.target.value)}></input><br></br> {/* Text input for phone number (using text instead of number to allow for symbols for country/state codes etc, better UX) */}
                                        <CardSection />
                                    </div>
                                    <div className="col-12 mt-5">
                                        <button className="custom-btn-widest btn-5 col-9 col-lg-7" disabled={!stripe}><span style={{
                                            top: '0px',
                                        }}>Confirm Payment</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {isSubmitted && (
                <div className="row contact-container text-center">
                    <div className="col-lg-8 col-md-9 col-sm-12">
                        <div className="card m-auto col-12 contact-card" style={{
                            boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                            paddingBottom: '50px',
                        }}> {/* Card and box shadow around contact contents */}
                            <div className="row">
                                <div className="col-12">
                                    <h1>Thank you for your purchase</h1>
                                </div>
                                <div className="col-12">
                                    <i className="fa fa-cart-plus" style={{
                                        fontSize: '10em', //Size for Cart icon
                                    }}></i>
                                </div>
                                <div className="col-12 mt-3">
                                    <a href="/" className="custom-btn-widest btn-5 col-9 col-lg-7"><span>Back to Home Page</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Checkout;