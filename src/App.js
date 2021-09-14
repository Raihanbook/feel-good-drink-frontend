import Header from './components//Header';
import Home from './Home';
import Sidenav from './components/Sidenav';
import Shop from './Shop';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Stockist from './Stockist';
import Cart from './components/Cart';
import Privacy from './PrivacyPolicy';
import Terms from './TermsConditions';
import Shipping from './ShippingReturns';
import Footer from './components/fgd-footer';
import './components/Toast';
import '@shoelace-style/shoelace/dist/themes/base.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import { useState } from "react";
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
setBasePath('./../dist/shoelace');

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IlvwoCM9bBMeA8Hr0yNKrNfkqVPwyPPu2vEf8JSZbidy56I2PLFcUwDBL6piEDY64LDTbwNCczpWQZ9YR5ImqwR00W4ENs9SG');

function App() {

  const windowListener = (e) => {
    if (document.getElementById('mySidenav').contains(e.target) || document.getElementById('myCart').contains(e.target) || document.getElementById('menu-icon').contains(e.target) || document.getElementById('cart-icon').contains(e.target)) {
      // Clicked in box

    } else {
      // Clicked outside the box
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mySidenav").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
      document.getElementById("myCart").style.width = "0";
      document.getElementById("myCart").style.boxShadow = "rgb(0 0 0 / 30%) 70px 0px 30px 50px";
    }
  }

  const [newCart, setNewCart] = useState(null);


  return (
    <Elements stripe={stripePromise}>
      <Router>
        <div className="App">
          <Header newCart={newCart} windowListener={windowListener} setNewCart={setNewCart} />
          <Sidenav />
          <Cart newCart={newCart} setNewCart={setNewCart} />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/shop">
                <Shop setNewCart={setNewCart} />
              </Route>
              <Route exact path="/product/:id">
                <ProductDetails setNewCart={setNewCart} />
              </Route>
              <Route exact path="/about-us">
                <AboutUs />
              </Route>
              <Route exact path="/contact-us">
                <ContactUs />
              </Route>
              <Route exact path="/stockist">
                <Stockist />
              </Route>
              <Route exact path="/checkout">
                <Checkout setNewCart={setNewCart} />
              </Route>
              <Route exact path="/privacy-policy">
                <Privacy />
              </Route>
              <Route exact path="/terms-conditions">
                <Terms />
              </Route>
              <Route exact path="/shipping-returns">
                <Shipping />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Elements>
  );
}

export default App;