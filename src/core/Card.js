import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';

const Card = ({product}) => {

    return(

        <div className="col-md-3 item-grid simpleCart_shelfItem">
                <div className=" mid-pop">
                  <div className="pro-img">
                      <ShowImage item={product}  url="products"/>
                    
                    <div className="zoom-icon ">
                      <Link className="picture" to="images/pc.jpg" rel="title"><i className="glyphicon glyphicon-search icon " /></Link>
                      <Link to="/single"><i className="glyphicon glyphicon-menu-right icon" /></Link>
                    </div>
                  </div>
                  <div className="mid-1">
                    <div className="women">
                      <div className="homestead-product">
                        <span>sofa</span>
                        <h6><Link to="/single">{ product.productname }</Link></h6>
                      </div>
                      <div className="img item_add">
                        <Link to="#"><img src={require('../images/ca.png')} alt="" /></Link>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="mid-2">
                      <p><label>₹{product.price}</label><em className="item_price">₹12999</em></p>
                      <div className="block">
                        <div className="starbox small ghosting"> </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
                </div>
    );    
};

    export default Card;