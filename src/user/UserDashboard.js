import React from 'react';
import Layout from '../core/Layout';
import {Link, withRouter} from 'react-router-dom';
import {isAuthenticated} from '../auth';




const Dashboard = () => {


    const {user: {_id, firstname, lastname, email, role}} = isAuthenticated();



    const userLinks = () => {
        return (
            <div className="card">
                <br></br>
                <div className="card-header" ><h4>User Information</h4> </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/cart">
                            My Cart
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to='/profile/update'>
                            Update Profile
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

const userInfo = () => {
    return (
        
            <div className="card mb-5"><br></br>
                <div className="card-header" ><h4>User Information</h4> </div>
                <div className="card-body">
        <ul className="list-group">
            <li className="list-group-item">{firstname}</li>
            <li className="list-group-item">{lastname}</li>
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">
                {role === 1 ? "Admin" : "Registered User"}
            </li>
        </ul>
        </div> </div>
    );
};

const purchaseHistory = () => {
    return (
        <div className="card mb-5">
        <h4 className="card-title"> Purchase History</h4>

        <ul className="list-group">
        <li className="list-group-item">history</li>

    </ul>

    </div>  
    )
}
    return(
        <Layout
        title="Profile"
        description={`G'day ${firstname}!`} className="container col-lg-9  col-md-offset-1 ">
 
    <div className="row">
        <div className="col-md-3">
        {userLinks()}
        </div>
        <div className="col-md-9">
{userInfo()}
{purchaseHistory()}
        </div>
    </div>


    </Layout>

    );
};


export default Dashboard;