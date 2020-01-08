import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Footer = () => (
  <div className="contanier col-md-12">
<div className="footer">
  <div className="footer-middle">
    <div className="container">
      <div className="col-md-3 footer-middle-in">
        <a href="index.html"><img src={require('../images/log.png')} alt="" /></a>
        <p>We are Best in class quality
          workmanship because every design in our studio is designed by
          highly experienced architects, who have dedicated their time in
          analyzing each and every furniture.</p>
      </div>   
      <div className="col-md-3 footer-middle-in">
        <h6>Information</h6>
        <ul className=" in">
          <li><a href>About</a></li>
          <li><a href>Contact Us</a></li>
          <li><a href="#">Returns</a></li>
        </ul>
        <ul className="in in1">
          <li><a href="#">Order History</a></li>
          <li><a href>Wish List</a></li>
          <li><a href>Login</a></li>
        </ul>
        <div className="clearfix" />
      </div>
      <div className="col-md-3 footer-middle-in">
        <h6>Tags</h6>
        <ul className="tag-in">
          <li><a href="#">sofa</a></li>
          <li><a href="#">table</a></li>
          <li><a href="#">coat</a></li>
          <li><a href="#">dining</a></li>
          <li><a href="#">wardrope</a></li>
          <li><a href="#">chairs</a></li>
          <li><a href="#">dining</a></li>
          <li><a href="#">beds</a></li>
          <li><a href="#">table</a></li>
        </ul>
      </div>
      <div className="col-md-3 footer-middle-in">
        <h6>Newsletter</h6>
        <span>Sign up for News Letter</span>
        <form>
          <input type="text" defaultValue="Enter your E-mail" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='Enter your E-mail';}" />
          <input type="submit" defaultValue="Subscribe" />
        </form>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <ul className="footer-bottom-top">
        <li><a href="#"><img src={require('../images/f2.png')} className="img-responsive" alt="" /></a></li>
        <li><a href="#"><img src={require('../images/f3.png')} className="img-responsive" alt="" /></a></li>
      </ul>
      <p className="footer-class">© 2019 Homestead. All Rights Reserved</p>
      <div className="clearfix"> </div>
    </div>
  </div>
</div>
</div>

    );


    export default Footer;