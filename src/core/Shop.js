import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import Card from "./Card";
import Checkbox from "./Checkbox";
import { getCategories } from "./apiCore";
import sty from "./shop.css";


const Shop = () => {

    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [] }
    });
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);

    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setCategories(data);
            }
        });
    };

    useEffect(() => {
        init();
        
    }, []);


    const handleFilters = (filters, filterBy) => {
        // console.log("SHOP", filters, filterBy);
        const newFilters = { ...myFilters };
        newFilters.filters[filterBy] = filters;

       // if (filterBy === "price") {
          //  let priceValues = handlePrice(filters);
            //newFilters.filters[filterBy] = priceValues;
        //}
        //loadFilteredResults(myFilters.filters);
        setMyFilters(newFilters);
    };



    return (

 <div>
  <div className="home">
    <div className="home_container flex-column  justify-content-end">
      <center> <div className="home_content text-center">
          <div className="home_title">Product Category</div>
          <div className="breadcrumbs flex-column  justify-content-center" style={{"border-left": "1px solid #efefef00"}}>
            <ul className="flex-row  justify-content-start text-center">
              <li><a href="#">Home</a> / Category</li>
            </ul>
          </div></div></center>
    </div>
  </div>
  
  <div className="row">
<div className="col-md-3">
<div className="product">
<div className="product-main">
        <div className=" product-menu-bar">
          
            <div className="w_sidebar">
              <section className="sky-form">
                <h1>Categories</h1>
                <div className="row1 scroll-pane">
                  <div className="col col-3">
                    <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i />All Accessories</label>
                  </div>
                  <div className="col col-3">								
                  <ul><Checkbox categories={categories}
                  handleFilters={filters =>
                  handleFilters(filters, "category")} /></ul>			
                  </div>
                </div>
              </section>
              
              </div>
            </div></div></div></div>



<div className="col-md-9">
<div className="row products_row products_container grid">
    {JSON.stringify(myFilters)}
              <div className="content-mid">
                <div className="mid-popular">
                  <div className="col-md- item-grid simpleCart_shelfItem">
                    <div className=" mid-pop">
                      <div className="pro-img">
                        <img src="images/pc.jpg" className="img-responsive" alt />
                        <div className="zoom-icon ">
                          <a className="picture" href="images/pc.jpg" rel="title"><i className="glyphicon glyphicon-search icon " /></a>
                          <a href="/single"><i className="glyphicon glyphicon-menu-right icon" /></a>
                        </div>
                      </div>
                      <div className="mid-1">
                        <div className="women">
                          <div className="homestead-product">
                            <span>sofa</span>
                            <h6><a href="/single">Funiture</a></h6>
                          </div>
                          <div className="img item_add">
                            <a href="#"><img src="images/ca.png" alt /></a>
                          </div>
                          <div className="clearfix" />
                        </div>
                        <div className="mid-2">
                          <p><label>₹15000.00</label><em className="item_price">₹12999.00</em></p>
                          <div className="block">
                            <div className="starbox small ghosting"> </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  </div></div>
</div>

  </div>
  </div>




    );
};
    export default Shop;