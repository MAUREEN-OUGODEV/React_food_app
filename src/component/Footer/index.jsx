import React from "react";
import './style.css'
const Footer = () =>{
    return(
        <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3 icons">
                <h3>Fooodish</h3>
                <p className="all">Continue Fooodish 2023 all rights reserved </p>
               <h3>Follow us On</h3>
                <i class="bi bi-pinterest"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-facebook"></i>

                </div>
                <div className="col-md-3">
                <h3>Menu</h3>
              <ul>
               <li>Home</li>
               <li>Offers</li>
               <li>Service</li>
               <li>About Us</li>
               </ul>

                </div>
                <div className="col-md-3">
                <h3>Information</h3>
                <ul>
                 <li>Menu</li>
                <li>Quality</li>
                 <li>Make a choice</li>
                 <li>Salad with Vegetable</li>
                 <li>Fast Delivery</li>
                  <li>Subscribe</li>
                  </ul>

                </div>
                <div className="col-md-3">
                   <h3>Contact</h3>
                <ul>
                <li>+123456789</li>
               <li>Explore</li>
               <li>info@foodish.com</li>
                  <li>1245,NewYork,USA</li>
               </ul>

                </div>

            </div>

        </div>
        </div>
    );
}
export default Footer;