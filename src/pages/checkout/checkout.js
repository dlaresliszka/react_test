import React from 'react';
import './checkout.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function checkout() {
    return (<div className="row">
        <div className="col-75">
            <div className="container">
                <form action="/action_page.php">
                    <div className="row">
                        <div className="col-50">
                            <h3>Billing Address</h3>
                            <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                            <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                            <input type="text" id="email" name="email" placeholder="john@example.com"/>
                            <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
                            <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                            <input type="text" id="city" name="city" placeholder="New York"/>

                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="state">State</label>
                                    <input type="text" id="state" name="state" placeholder="NY"/>
                                </div>
                                <div className="col-50">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" id="zip" name="zip" placeholder="10001"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-50">
                            <h3>Payment</h3>
                            <label htmlFor="fname">Accepted Cards</label>
                            <div className="icon-container">
                                <span className="fa fa-cc-visa" ></span>
                                <span className="fa fa-cc-amex" ></span>
                                <span className="fa fa-cc-mastercard" ></span>
                                <span className="fa fa-cc-discover" ></span>
                            </div>
                            <label htmlFor="cname">Name on Card</label>
                            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                            <label htmlFor="ccnum">Credit card number</label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                            <label htmlFor="expmonth">Exp Month</label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>

                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="expyear">Exp Year</label>
                                    <input type="text" id="expyear" name="expyear" placeholder="2018"/>
                                </div>
                                <div className="col-50">
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" id="cvv" name="cvv" placeholder="352"/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <label>
                        <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
                    </label>
                    <input type="submit" value="Continue to checkout" className="btn"/>
                </form>
            </div>
        </div>

        <div className="col-25">
            <div className="container">
                <h4>Cart
                    <span className="price">
          <span className="fa fa-shopping-cart"></span>
          <b>4</b>
        </span>
                </h4>
                <p><a >Product 1</a> <span className="price">$15</span></p>
                <p><a >Product 2</a> <span className="price">$5</span></p>
                <p><a >Product 3</a> <span className="price">$8</span></p>
                <p><a >Product 4</a> <span className="price">$2</span></p>
                <hr/>
                <p>Total <span className="price"><b>$30</b></span></p>
            </div>
        </div>
    </div>);
}
export default checkout;
