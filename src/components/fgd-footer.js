import '@shoelace-style/shoelace/dist/themes/base.css';
import '@shoelace-style/react/dist/spinner';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { Link } from 'react-router-dom';
const Facebook = "https://www.facebook.com/feelgooddrinks";
const Twitter = "https://twitter.com/feelgooddrinks";
const Instagram = "https://www.instagram.com/feelgooddrinks/";
const Youtube = "https://www.youtube.com/channel/UCwZ9WaN7QfltGY22mE-Jadg";
const Linkedin = "https://www.linkedin.com/company/feel-good-drinks";
setBasePath('./../../dist/shoelace');

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        {/* Facebook social icon */}
        <a href={Facebook} target="_blank" rel="noreferrer" className="social-link">
          <span className="icon facebook">
            <span className="tooltip">Facebook</span>
            <span><i className="fa fa-facebook" style={{ fontSize: '25px', }}></i></span>
          </span>
        </a>
        {/* Twitter social icon */}
        <a href={Twitter} target="_blank" rel="noreferrer" className="social-link">
          <span className="icon twitter">
            <span className="tooltip">Twitter</span>
            <span><i className="fa fa-twitter" style={{ fontSize: '27px', }}></i></span>
          </span>
        </a>
        {/* Instagram social icon */}
        <a href={Instagram} target="_blank" rel="noreferrer" className="social-link">
          <span className="icon instagram">
            <span className="tooltip">Instagram</span>
            <span><i className="fa fa-instagram" style={{ fontSize: '27px', }}></i></span>
          </span>
        </a>
        {/* YouTube social icon */}
        <a href={Youtube} target="_blank" rel="noreferrer" className="social-link">
          <span className="icon youtube">
            <span className="tooltip">Youtube</span>
            <span><i className="fa fa-youtube" style={{ fontSize: '24px', }}></i></span>
          </span>
        </a>
        {/* LinkedIn social icon */}
        <a href={Linkedin} target="_blank" rel="noreferrer" className="social-link">
          <span className="icon linkedin">
            <span className="tooltip">LinkedIn</span>
            <span><i className="fa fa-linkedin" style={{ fontSize: '24px', }}></i></span>
          </span>
        </a>
      </div>
      <div id="footerInfo">
        <div id="footerCopyright">
          <h3>Copyright</h3>
          <p>This website has been created as part of an assignment in an approved course of study for Curtin University and may contain copyrighted material not created by the author.
          </p>
          <p>No part of this work may be reproduced without concent of the original copyright owners. See code comments for references.</p>
        </div>
        {/* Footer sub menu */}
        <div id="footerNav">
          <a href="/"><h6>Home</h6></a>
          <Link to="/shop"><h6>Shop</h6></Link>
          <Link to="/about-us"><h6>About Us</h6></Link>
          <Link to="/contact-us"><h6>Contact</h6></Link>
        </div>
      </div>
      <div id="footerLink" className="row justify-content-center">
        <Link to="/privacy-policy" className="link-footer">Privacy Policy</Link>
        <p>|</p> {/* To divide the links visually */}
        <Link to="/terms-conditions" className="link-footer">Terms and Conditions</Link>
        <p>|</p> {/* To divide the links visually */}
        <Link to="/shipping-Returns" className="link-footer">Shipping and Returns</Link>
      </div>
    </footer>
  );
}

export default Footer;