import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getProducts } from './apiCore';
import Card from './Card';


const Home = () => {

  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts('sold').then(data => {
        if (data.error) {
            setError(data.error);
        } else {
            setProductsBySell(data);
        }
    });
};

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
        console.log(data);
        if (data.error) {
            setError(data.error);
        } else {
            setProductsByArrival(data);
        }
    });
};

useEffect(() => {
  loadProductsByArrival();
  loadProductsBySell();
}, []);


return(
<div>
<div className="banner-grid">
    <div id="visual">
      <div className="slide-visual">
        
        <ul className="slide-group">
          <li><img className="img-responsive" src={require('../images/ba1.jpg')}  alt="Dummy Image" /></li>
          <li><img className="img-responsive"  src={require('../images/ba2.jpg')}  alt="Dummy Image" /></li>
          <li><img className="img-responsive" src={require('../images/ba3.jpg')}  alt="Dummy Image" /></li>
        </ul>
        
        <div className="script-wrap">
          <ul className="script-group">
            <li><div className="inner-script"><img className="img-responsive" src={require('../images/baa1.jpg')} alt="Dummy Image" /></div></li>
            <li><div className="inner-script"><img className="img-responsive" src={require('../images/baa2.jpg')} alt="Dummy Image" /></div></li>
            <li><div className="inner-script"><img className="img-responsive" src={require('../images/baa3.jpg')} alt="Dummy Image" /></div></li>
          </ul>
          <div className="slide-controller">
            <Link to="#" className="btn-prev"><img src={require('../images/btn_prev.png')} alt="Prev Slide" /></Link>
            <Link to="#" className="btn-play"><img src={require('../images/btn_play.png')} alt="Start Slide" /></Link>
            <Link to="#" className="btn-pause"><img src={require('../images/btn_pause.png')} alt="Pause Slide" /></Link>
            <Link to="#" className="btn-next"><img src={require('../images/btn_next.png')} alt="Next Slide" /></Link>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="clearfix" />
    </div>
  </div>

  <style dangerouslySetInnerHTML={{__html: "\n            \n            .carousel-inner {\n              margin: auto;\n              width: 90%;\n            }\n            \n            .carousel-control {\n              width: 4%;\n            }\n            \n            .carousel-control.left,\n            .carousel-control.right {\n              background-image: none;\n            }\n            \n            .glyphicon-chevron-left, .carousel-control .glyphicon-chevron-right {\n              margin-top: -10px;\n              margin-left: -10px;\n              color: #444;\n            }\n            \n            .carousel-inner a {\n              display: table-cell;\n              height: 180px;\n              width: 200px;\n              vertical-align: middle;\n            }\n            .carousel-inner img {\n              max-height: 150px;\n              margin: auto auto;\n              max-width: 100%;\n            }\n            \n            @media (max-width: 767px) {\n              .carousel-inner > .item.next,\n              .carousel-inner > .item.active.right {\n                left: 0;\n                -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0);\n              }\n            \n              .carousel-inner > .item.prev,\n              .carousel-inner > .item.active.left {\n                left: 0;\n                -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n              }\n            }\n            @media (min-width: 767px) and (max-width: 992px) {\n              .carousel-inner > .item.next,\n              .carousel-inner > .item.active.right {\n                left: 0;\n                -webkit-transform: translate3d(50%, 0, 0);\n                transform: translate3d(50%, 0, 0);\n              }\n            \n              .carousel-inner > .item.prev,\n              .carousel-inner > .item.active.left {\n                left: 0;\n                -webkit-transform: translate3d(-50%, 0, 0);\n                transform: translate3d(-50%, 0, 0);\n              }\n            }\n            @media (min-width: 992px) {\n              .carousel-inner > .item.next,\n              .carousel-inner > .item.active.right {\n                left: 0;\n                -webkit-transform: translate3d(16.7%, 0, 0);\n                transform: translate3d(16.7%, 0, 0);\n              }\n            \n              .carousel-inner > .item.prev,\n              .carousel-inner > .item.active.left {\n                left: 0;\n                -webkit-transform: translate3d(-16.7%, 0, 0);\n                transform: translate3d(-16.7%, 0, 0);\n              }\n            }\n            " }} /><br />

  <div className="content-mid">
    <h3>Explore Our Furniture Range</h3>
    <label className="line" /><div>
      <div className="col-md-10 col-md-offset-1">
        <div className="carousel slide" data-ride="carousel" data-type="multi" data-interval={3000} id="myCarousel">
          <div className="carousel-inner">
            <div className="item active">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/1.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/2.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/3.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/4.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/5.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/6.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/7.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/9.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/10.png')} className="img-responsive" /></Link></div>
            </div>
            <div className="item">
              <div className="col-md-2 col-sm-6 col-xs-12"><Link to="#"><img src={require('../images/funitture_icon/12.png')} className="img-responsive" /></Link></div>
            </div>
          </div>
          <Link className="left carousel-control" to="#myCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left" /></Link>
          <Link className="right carousel-control" to="#myCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right" /></Link>
        </div>
      </div>
      {/* partial */}
      {/*content*/}<br /><br />
      <div className="content">
        <div className="container">
          <br />
          <h3>Top Offers</h3>
          <label className="line" />
          <div className="banner-bootom-w3-agileits">
            <div className="container">
              <div className="col-md-5 bb-grids bb-left-agileits-w3layouts">
                <Link to="/product"><div className="bb-left-agileits-w3layouts-inner">
                    <h3 style={{color: '#fff'}}>SALE</h3>
                    <h4 style={{marginLeft: 150}}>upto<span>15%</span></h4>
                  </div></Link>
              </div>
              <div className="col-md-4 bb-grids bb-middle-agileits-w3layouts">
                <Link to="/product"><div className="bb-middle-top">
                    <h3 style={{color: '#fff'}}>SALE</h3>
                    <h4>upto<span>13%</span></h4>
                  </div></Link>
                <Link to="/product"><div className="bb-middle-bottom">
                    <h3 style={{color: '#fff'}}>SALE</h3>
                    <h4>upto<span>12%</span></h4>
                  </div></Link>
              </div>
              <div className="col-md-3 bb-grids bb-right-agileits-w3layouts">
                <Link to="/product"><div className="bb-right-top">
                    <h3 style={{color: '#fff'}}>SALE</h3>
                    <h4>upto<span>10%</span></h4>
                  </div></Link>
                <Link to="handbags"><div className="bb-right-bottom">
                    <h3 style={{color: '#fff'}}>SALE</h3>
                    <h4>upto<span>8%</span></h4>
                  </div></Link>
              </div>
              <div className="clearfix" />
            </div>
          </div>
          {/*products*/}
          <div className="content-mid">
            <h3>Popular Across Site</h3>
            <label className="line" />
            <div className="mid-popular">
              
        
              {productsByArrival.map((product, i) => (
                    
                        <Card key={i} product={product} />
                    
                ))}
          </div></div>

          <br /><br /><br />
          <div className="content-mid">
            <h3>Best Sellers</h3>
            <label className="line" />
            <div className="mid-popular">
              
        
              {productsBySell.map((product, i) => (
                    
                        <Card key={i} product={product} />
                    
                ))}
          </div></div>
        </div>
        
      </div>
    </div>
   
    
  </div></div>



);
};

export default Home;