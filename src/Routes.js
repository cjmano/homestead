import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Shop from './core/Shop';
import Menu from './core/Menu';
import Footer from './core/Footer';
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard';

//admin modules

import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './admin/AdminDashboard';
import Categories from './admin/Categories';
import AddCategory from './admin/AddCategory';
import Products from './admin/Products';
import AddProduct from './admin/AddProduct';
import AdminHome from './admincore/AdminHome';
import AdminMenu from './admincore/AdminMenu';
import AdminLeftBar from './admincore/AdminLeftBar';
import AdminFooter from './admincore/AdminFooter';



const Admin = ({ match }) => (
    <React.Fragment>
        <AdminMenu /> 
        <AdminLeftBar /> 
        
    <Switch>
    
    
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <AdminRoute path="/admin/admindashboard" exact component={AdminDashboard} />
        <AdminRoute path="/admin/Categories" exact component={Categories} />
        <AdminRoute path="/admin/addcategory" exact component={AddCategory} />
        <AdminRoute path="/admin/products" exact component={Products} />
        <AdminRoute path="/admin/addproduct" exact component={AddProduct} />
        
        </Switch>
        <AdminFooter />
        
        </React.Fragment>

    );
    
const User = ({ match }) => (
    <React.Fragment>
        <Menu /> 
        <Switch>
        
        <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/shop" exact component={Shop} />
            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
            
            </Switch>
            <Footer />
            
            </React.Fragment>

        );


 const Routes = () => (
            <BrowserRouter forceRefresh>
              <Switch>
                <Route path="/admin" component={Admin} />
                <Route path="/" component={User} />
              </Switch>
            </BrowserRouter>
          );




export default Routes;