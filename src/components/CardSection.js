import React from 'react';
import { CardElement, CardNumberElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function CardSection() {
    return (
        <label className="col-9 col-lg-7 p-0" style={{
            marginTop: '30px',
        }}>
            Card details
            <span className="form-required">*</span>
            <CardElement options={CARD_ELEMENT_OPTIONS} />
        </label>
    );
};

export default CardSection;