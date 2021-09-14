import { useState, useEffect, useRef } from "react";
import Toast from './components/Toast';

const ContactUs = () => {

    useEffect(() => {
        // Put your Javascript code here...
        const gsap = window.gsap;

        gsap.fromTo(".contact-bubbleone", { scale: 0.1 },
            { scale: 1, duration: 2, repeat: -1, opacity: 0 })

        gsap.fromTo(".contact-bubbletwo", { scale: 1 },
            { scale: 1.5, duration: 2, repeat: -1, opacity: 0 })


        gsap.fromTo(".contact-bubblethree", { scale: 0.5, opacity: 0 },
            { scale: 1.5, duration: 2, repeat: -1, opacity: 1 })

        gsap.fromTo(".contact-bubblefour", { scale: 0, opacity: 1 },
            { scale: 1.5, duration: 3, repeat: -1, opacity: 0 })

        // animation for class circle objects
        let object1 = {
            el: '.contact-circle-one',
            duration: 10,
        }

        gsap.fromTo(object1.el, object1.duration, {
            opacity: 2,
            y: '+=10',
            scale: 1.5,

        }, {
            opacity: 1,
            y: '-2000', //  moving to this position on y-axis
            scale: -0.5, // decreasing in size
            stagger: {
                each: object1.duration / document.querySelectorAll(object1.el).length,
                repeat: -1
            }
        });

        // animation for class circle objects
        let object2 = {
            el: '.contact-circle-two',
            duration: 10,
        }

        gsap.fromTo(object2.el, object2.duration, {
            opacity: 2,
            y: '+=10',
            scale: 1.5,

        }, {
            opacity: 1,
            y: '-2000', //  moving to this position on y-axis
            scale: -0.5, // decreasing in size
            stagger: {
                each: object2.duration / document.querySelectorAll(object2.el).length,
                repeat: -1
            }
        });

        // Makes the site jump to the top of new pages when links are clicked
        window.scroll({
            top: 0,
            left: 0,
        });

    }, []);

    const [nameFull, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [phoneNo, setPhone] = useState('');
    const [messageTxt, setMessage] = useState('');
    const [file, setFile] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');


    const formSubmit = (e) => {
        e.preventDefault();
        const contactDetail = {
            fullName: nameFull,
            businessName: business,
            email: emailAddress,
            phone: phoneNo,
            message: messageTxt,
            attachment: file,
        };

        setIsPending(true);

        fetch('/api/message', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactDetail)

        }).then(() => {
            console.log('contact form submitted!');
            setName(''); {/*Reset name of contact input*/}
            setBusiness(''); {/*Reset name of business input*/}
            setEmail(''); {/*Reset email input*/}
            setPhone(''); {/*Reset phone input*/}
            setMessage(''); {/*Reset message input*/}
            setFile(''); {/*Reset file input*/}
            setToastType(ToastType.success); {/*Setting the Toast notification background colour to Orange*/}
            setToastMessage('Form Submitted Successfully! We will contact you as soon as we can.');
            setIsPending(false); {/*Clear "is submitting" status on button*/ }
        })
    }

    const ToastType = {
        success: "success",
        fail: "fail",
    };

    const ToastRef = useRef(null)

    return (
        <div className="container-fluid">
            <div className="row mt-4 align-items-center">
                <div className="col-12 text-left">
                    <h1 className="pageTitle">Contact Us</h1>
                </div>
                <div className="col-12 p-0">
                    <hr style={{ borderTop: '2px solid #b8b8b8' }} /> {/* Divider under page title */}
                </div>
            </div>
            <div className="row contact-container text-center">
                <div className="col-lg-8 col-md-9 col-sm-12">
                    <div className="card m-auto col-12 contact-card" style={{
                        boxShadow: 'rgb(0 0 0 / 30%) 0px 0px 20px -5px',
                    }}> {/* Card and box shadow around contact contents */}
                        <p className="col-10 col-lg-8 contact-desc">We always like to hear from customers or potential stockists, so if you'd like to get in contact with us, fill out the form below or use one of the alternate contact methods listed! </p>
                        <form className="form" onSubmit={formSubmit}>
                            <label className="form-field">Full Name<span className="form-required">*</span></label><br></br> {/* Label for Name form field with styled asterix to visually show required fields */}
                            <input name="full_name" type="text" className="form-input col-9 col-lg-7" required value={nameFull} onChange={(e) => setName(e.target.value)} /><br></br> {/* Text input field for Name, set to required */}
                            <label className="form-field">Business Name (Optional)</label><br></br> {/* Label for Business name field, which is optional */}
                            <input name="business_name" type="text" className="form-input col-9 col-lg-7" value={business} onChange={(e) => setBusiness(e.target.value)} /><br></br> {/* Text input for business name, not required */}
                            <label className="form-field">Email<span className="form-required">*</span></label><br></br> {/* Label for Email form field with styled asterix to visually show required fields */}
                            <input name="email" type="email" className="form-input col-9 col-lg-7" required value={emailAddress} onChange={(e) => setEmail(e.target.value)} /><br></br> {/* email input for email, set to required */}
                            <label className="form-field">Phone (Optional)</label><br></br>{/* Label for phone form field, optional */}
                            <input name="phone" type="text" className="form-input col-9 col-lg-7" value={phoneNo} onChange={(e) => setPhone(e.target.value)} /><br></br> {/* Text input for phone number (using text instead of number to allow for symbols for country/state codes etc, better UX) */}
                            <label className="form-field">Message<span className="form-required">*</span></label><br></br> {/* Label for message form field, with styled asterix to visually show required fields */}
                            <textarea name="message" className="message-textarea col-9 col-lg-7" maxlength="1000" required value={messageTxt} onChange={(e) => setMessage(e.target.value)} /><br></br> {/* Textare for message input, 1000 character limit, set to required */}
                            <input type="file" name="filename" className="form-input file-upload col-9 col-lg-7" value={file} onChange={(e) => setFile(e.target.value)} /><br></br> {/* File upload button, not required. */}
                            {!isPending && <input type="submit" name="submit" value="Submit"
                                className="form-submit btn btn-light col-3"
                                onClick={() => {
                                    ToastRef.current.show();
                                }} />} {/* Submit button.*/}
                            {isPending && <button type="submit button" className="form-submit btn btn-secondary col-3 formSubmitBtn" aria-label="disabled" tabIndex="-5" disabled> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ marginRight: '0.125em' }} />Submitting...</button>} {/* Submit button when submission is in progress. */}
                            {/*Details that will be submitted */}
                            <Toast
                                ref={ToastRef}
                                message={toastMessage}
                                type={toastType}
                            /> {/*Toast Notification settings */}
                        </form>
                        <div class="contact-bubbleone"></div>
                        <div class="contact-bubbletwo"></div>
                        <div class="contact-bubblethree"></div>
                        <div class="contact-bubblefour"></div>

                        <div class="contact-circles-one">
                            <div class="contact-circle-one"></div>
                            <div class="contact-circle-one"></div>
                            <div class="contact-circle-one"></div>
                            <div class="contact-circle-one"></div>
                        </div>

                        <div class="contact-circles-two">
                            <div class="contact-circle-two"></div>
                            <div class="contact-circle-two"></div>
                            <div class="contact-circle-two"></div>
                            <div class="contact-circle-two"></div>
                        </div>

                        <div className="other-contact col-9"> {/* Other contact information */}
                            <h2>Other ways to contact us</h2><br></br>
                            <div className="text-left">
                                <p><strong>Email:</strong> <a href="mailto:hello@feelgooddrinks.com">hello@feelgooddrinks.com</a></p> {/* Opens email in email application */}
                                <p><strong>Phone:</strong> <a href="tel:987-654-4210">987 654 3210</a></p> {/* Allows you to call by clicking the number (on compatible devices) */}
                                <p><strong>Fax:</strong> 987 654 3121</p>
                                <p><strong>Address:</strong> Feel Good Drinks, Lyme Regis, Dorset DT7 3LS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;