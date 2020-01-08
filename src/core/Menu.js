import React, {Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';

import style1 from './css/bootstrap.css';
import style2 from './css/style.css';
import style3 from './css/pstyle.css';
import style4 from './css/flexslider.css';
import style5 from './css/popuo-box.css';
import style6 from './css/style4.css';
import style10 from './plugins/font-awesome-4.7.0/css/font-awesome.min.css';
import style7 from './css/pignose.layerslider.css';
import style8 from './css/jstarbox.css';
import style9 from './css/chocolat.css';


const isActive = (history, path) =>{
    if(history.location.pathname === path){
        return{ 'background-color': '#', color: '#' };
        
    }else{
        return{ 'background-color': '#', color: '#' };
    }
};
const Menu = ({ history }) => (
            
<div className="header">
  <div className="container-fluid">
    <div className="head">
      <div className=" logo">
        <Link to="/home"><img src={require('../images/logo.png')}  alt=""/></Link>
      </div>
    </div>
  </div>
  
     
  
  <div className="header-top">
    <div className="container-fluid">
      <div className="col-md-offset-10 col-md-2 header-login">
        <ul>
        { !isAuthenticated() && ( <Fragment>
          <li><Link to='/signin' >Login</Link></li>
          <li><Link to='/signup' >Register</Link></li>
           </Fragment> )}
          

          { isAuthenticated() && ( <Fragment>
            <li><Link onClick={() => signout(() => {
            history.push('/');
          })} >Logout</Link></li> 
          <li><Link  to='/user/dashboard' >Profile</Link></li>
          <li><Link  to='/checkout' >Checkout</Link></li>
          </Fragment> )}

          
          
        </ul>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="head-top">
      <div className="col-sm-8  h_menu4">
        <nav className="navbar nav_bottom" role="navigation">
          <div className="navbar-header nav_2">
            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          
          <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
            <ul className="nav navbar-nav nav_1">
              <li className="dropdown mega-dropdown active">
                
                <Link style={isActive(history, '/workstation')} to='/workstation' className="color1" to="#" data-toggle="dropdown">Office</Link>
                <div className="dropdown-menu ">
                  <div className="menu-top">

                    <div className="col1">
                      <div className="h_nav">
                        <h4>Workstation</h4>
                        <ul>
                          <li><Link to="/Product">Liner </Link></li>
                          <li><Link to="/Product">Curve</Link></li>
                          <li><Link to="/Product">L Shape</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>partiticians</h4>
                        <ul style={{background: '#efefef'}}>
                          <li><Link to="/Product">Aluminum</Link></li>
                          <li><Link to="/Product">Defent Glass</Link></li>
                          <li><Link to="/Product">Calcium Silicate</Link></li>
                          <li><Link to="/Product">Gipsm Boards</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Seelings</h4>
                        <ul>
                          <li><Link to="/Product">Grid Seelings</Link></li>
                          <li><Link to="/Product">Gipsm Seelings</Link></li>
                          <li><Link to="/Product">Aluminum Seelings</Link></li>
                          <li><Link to="/Product">PVC Seelings</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Flooring</h4>
                        <div style={{background: '#efefef'}}>
                          <ul>
                            <li><Link to="/Product">Vinyal Flooring</Link></li>
                            <li><Link to="/Product">corpet Flooring</Link></li>
                            <li><Link to="/Product">Epoxy Flooring</Link></li>
                          </ul>
                        </div>
                      </div></div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Office Furniture</h4>
                        <div>
                          <ul>
                            <li><Link to="/Product">Execute Table</Link></li>
                            <li><Link to="/Product">Reception Table</Link></li>
                            <li><Link to="/Product">Confrence Table</Link></li>
                            <li><Link to="/Product">Waiting Table</Link></li>
                          </ul>
                        </div>
                      </div></div>
           
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              <li className="dropdown mega-dropdown active">
                <Link tyle={isActive(history, '/homeinteriors')} to='/homeinteriors' className="color1" to="#" data-toggle="dropdown">Home Interiors</Link>
                <div className="dropdown-menu ">
                  <div className="menu-top">
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Modular Kitchen</h4>
                        <ul>
                          <li><Link to="/Product">L Shape</Link></li>
                          <li><Link to="/Product">Linear</Link></li>
                          <li><Link to="/Product">U Shpe</Link></li>
                          <li><Link to="/Product">Parallel</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Bedrooms</h4>
                        <ul style={{background: '#efefef'}}>
                          <li><Link to="/Product">Coat</Link></li>
                          <li><Link to="/Product">Wardrobe</Link></li>
                          <li><Link to="/Product">Divan</Link></li>
                          <li><Link to="/Product">Dressing Table</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Living Area</h4>
                        <ul>
                          <li><Link to="/Product">Tv Unit</Link></li>
                          <li><Link to="/Product">Center Table</Link></li>
                          <li><Link to="/Product">Sofas</Link></li>
                          <li><Link to="/Product">Decorative Shelfs</Link></li>
                          <li><Link to="/Product">Divan</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Dining Area</h4>
                        <div style={{background: '#efefef'}}>
                          <ul>
                            <li><Link to="/Product">Dining Table</Link></li>
                            <li><Link to="/Product">Crockery Unit</Link></li>
                          </ul>
                        </div>
                      </div></div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Pooja</h4>
                        <div style={{background: '#'}}>
                          <ul>
                            <li><Link to="/Product">Pooja Cabinets</Link></li>
                            <li><Link to="/Product">Courier panels</Link></li>
                          </ul>
                        </div>
                      </div></div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              <li className="dropdown mega-dropdown active">
                <Link style={isActive(history, '/doors')} to='/doors' className="color1" to="#" data-toggle="dropdown">Doors</Link>
                <div className="dropdown-menu ">
                  <div className="menu-top">
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Mattresses</h4>
                        <ul>
                          <li><Link to="/Product">Single Bed Mattress</Link></li>
                          <li><Link to="/Product">Queen Bed Mattress</Link></li>
                          <li><Link to="/Product">King Bed Mattress</Link></li>
                          <li><Link to="/Product">Foldable Mattress</Link></li>
                          <li><Link to="/Product">Baby Mattress</Link></li>
                          <li><Link to="/Product">Kids Mattress</Link></li>
                          <li><Link to="/Product">Mattress Protectors</Link></li>
                          <li><Link to="/Product">Mattress Toppers</Link></li>
                          <li><Link to="/Product">Pillows</Link></li>
                          <li><Link to="/Product">Bed Wedges</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Mattress Type</h4>
                        <ul style={{background: '#efefef'}}>
                          <li><Link to="/Product">Coir</Link></li>
                          <li><Link to="/Product">Foam</Link></li>
                          <li><Link to="/Product">Memory Foam</Link></li>
                          <li><Link to="/Product">Bonnell Spring</Link></li>
                          <li><Link to="/Product">Pocket Spring</Link></li>
                          <li><Link to="/Product">Latex</Link></li>
                          <li><Link to="/Product">Cotton Fill </Link></li>
                          <li><Link to="/Product">Hybrid Materials</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Mattress Firmness</h4>
                        <ul>
                          <li><Link to="/Product">Soft</Link></li>
                          <li><Link to="/Product">Medium Soft</Link></li>
                          <li><Link to="/Product">Medium Firm</Link></li>
                          <li><Link to="/Product">Firm</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Bedding</h4>
                        <div style={{background: '#efefef'}}>
                          <ul>
                            <li><Link to="/Product">Bed Sheets</Link></li>
                            <li><Link to="/Product">Bed Covers</Link></li>
                            <li><Link to="/Product">Bed Runners</Link></li>
                            <li><Link to="/Product">Bedding Sets</Link></li>
                            <li><Link to="/Product">Duvets</Link></li>
                            <li><Link to="/Product">Duvet Covers</Link></li>
                            <li><Link to="/Product">Comforters</Link></li>
                            <li><Link to="/Product">Quilts</Link></li>
                            <li><Link to="/Product">Blankets</Link></li>
                            <li><Link to="/Product">Dohars</Link></li>
                          </ul>
                        </div>
                      </div></div>
                    <div className="col1 col5">
                      <img src="images/me.png" className="img-responsive"  alt="" />
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              <li className="dropdown mega-dropdown active">
                <Link style={isActive(history, '/signin')} to='/homedecor' className="color1" to="#" data-toggle="dropdown">Home Decor</Link>
                <div className="dropdown-menu ">
                  <div className="menu-top">
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Bedroom	</h4>
                        <ul>
                          <li><Link to="/Product">Coats</Link></li>
                          <li><Link to="/Product">Wardrobles</Link></li>
                          <li><Link to="/Product">Divan</Link></li>
                          <li><Link to="/Product">Dressing Table</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Living Area</h4>
                        <ul style={{background: '#efefef'}}>
                          <li><Link to="/Product">Tv Unit</Link></li>
                          <li><Link to="/Product">Center Table</Link></li>
                          <li><Link to="/Product">Sofas</Link></li>
                          <li><Link to="/Product">Decorative Selfs</Link></li>
                          <li><Link to="/Product">Diavn</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Kides Room</h4>
                        <ul>
                          <li><Link to="/Product">Coat</Link></li>
                          <li><Link to="/Product">Wardrobes</Link></li>
                          <li><Link to="/Product">Study Table</Link></li>
                          <li><Link to="/Product">Dressing Table</Link></li>
                          <li><Link to="/Product">Divan</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Pots</h4>
                        <div style={{background: '#efefef'}}>
                          <ul>
                            <li><Link to="/Product">Dry Sticks</Link></li>
                            <li><Link to="/Product">Curtons</Link></li>
                            <li><Link to="/Product">Photo Frams</Link></li>
                            <li><Link to="/Product">Decorative Lights</Link></li>
                            <li><Link to="/Product">Wallpapers</Link></li>
                          </ul>
                        </div>
                      </div></div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              <li className="dropdown mega-dropdown active">
                <Link className="color1" to="#" data-toggle="dropdown">Windows</Link>
                <div className="dropdown-menu " style={{width: 400, left: 10}}>
                  <div className="menu-top">
                    <div className="col1">
                      <div className="h_nav">
                        <h4>UPVC</h4>
                        <ul>
                          <li><Link to="/Product">Two Rack</Link></li>
                          <li><Link to="/Product">Three Rack</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Aluminum</h4>
                        <ul style={{background: '#efefef'}}>
                          <li><Link to="/Product">Two Rack</Link></li>
                          <li><Link to="/Product">Three Rack</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              <li className="dropdown mega-dropdown active">
                <Link style={isActive(history, '/furnitures')} to='/furnitures' className="color1" to="#" data-toggle="dropdown">Furnitures</Link>
                <div className="dropdown-menu " style={{width: 200, left: 10}}>
                  <div className="menu-top">
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Furnitures</h4>
                        <ul>
                          <li><Link to="/Product">Sofass</Link></li>
                          <li><Link to="/Product">Queen Bed Mattress</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
              <li className="dropdown mega-dropdown active">
                <Link className="color1" to="#" data-toggle="dropdown">Civil</Link>
                <div className="dropdown-menu " style={{width: 200, left: 10}}>
                  <div className="menu-top">
                    <div className="col1">
                      <div className="h_nav">
                        <h4>Civil Works</h4>
                        <ul>
                          <li><Link to="/Product">Architecture</Link></li>
                          <li><Link to="/Product">Interiors</Link></li>
                          <li><Link to="/Product">Structures</Link></li>
                          <li><Link to="/Product">Landscaping</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-sm-2 search-right">
        <ul className="heart">
          <li>
            <Link to="wishlist">
              <span className="glyphicon glyphicon-heart" aria-hidden="true" />
            </Link></li>
          <li><Link className="play-icon popup-with-zoom-anim" to="#small-dialog"><i className="glyphicon glyphicon-search"> </i></Link></li>
        </ul>
        <div className="cart box_1">
          <Link to="checkout">
            <h3> <div className="total">
                <span className>₹12,999</span></div>
              <img src="images/cart.png" alt="" /></h3>
          </Link>
          <p><Link to="javascript:;" className="simpleCart_empty">Empty Cart</Link></p>
        </div>
        <div className="clearfix"> </div>
        <div id="small-dialog" className="mfp-hide">
          <div className="search-top">
            <div className="login-search">
              <input type="submit" defaultValue />
              <input type="text" defaultValue="Search.." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search..';}" />
            </div>
            <p>Search</p>
          </div>
        </div>
        
      </div>
      <div className="clearfix" />
    </div>
  </div>
</div>
  
);


export default withRouter(Menu);