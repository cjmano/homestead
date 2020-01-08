import React, {Fragment} from "react";
import AdminMenu from './AdminMenu';
import {Link, withRouter} from 'react-router-dom';
import {isAuthenticated} from '../auth';


const AdminLeftBar = ({ history }) => {
const {user: {_id, firstname, lastname, email, role}} = isAuthenticated();
return(

  

<div className="leftbar leftbar-style-2">
  <div className="leftbar-wrapper scrollbar scrollbar-inner">
    <div className="leftbar-content">
      <div className="user">
        <div className="avatar-sm float-left mr-2">
          <img src="../assets/img/teamprofile.jpg" alt="..." className="avatar-img rounded-circle" />
        </div>
        <div className="info">
          <Link data-toggle="collapse" to="#collapseExample" aria-expanded="true">
            <span>
              { firstname }
              <span className="user-level">Administrator</span>
              <span className="caret" />
            </span>
          </Link>
          <div className="clearfix" />
          <div className="collapse in" id="collapseExample">
            <ul className="adm">
              <li>
                <Link to="#profile">
                  <span className="link-collapse">My Profile</span>
                </Link>
              </li>
              <li>
                <Link to="#settings">
                  <span className="link-collapse">logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="adm adm-primary ">
        <li className="adm-item active">
          <Link to="/admin/admindashboard" aria-expanded="false">
            <i className="fas fa-store" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li className="adm-item submenu">
          <Link to="#Feedback" data-toggle="collapse"  className="" aria-expanded="true">
            <i className="fas fa-users" />
            <p>Users</p>
            <span className="caret" />
          </Link>
          <div className="collapse hide" id="Feedback" style={{}}>
            <ul className="adm adm-collapse">
              <li>
                <Link to="/admin/users">
                  <span className="sub-item">Users</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/reviews">
                  <span className="sub-item">Reviews</span>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="adm-item ">
          <Link to="/admin/products" className="collapsed" aria-expanded="false">
            <i className="fa fa-chart-line" />
            <p>Products</p>
          </Link>
        </li>
        <li className="adm-item ">
          <Link to="/admin/offers" className="collapsed" aria-expanded="false">
            <i className="fa fa-bullhorn" />
            <p>Offers</p>
          </Link>
        </li>
        <li className="adm-item ">
          <Link to="/admin/order" className="collapsed" aria-expanded="false">
            <i className="fa fas fa-dolly-flatbed" />
            <p>Orders</p>
          </Link>
        </li>
        <li className="adm-item">
          <Link to="/admin/categories" className="collapsed" aria-expanded="false">
            <i className="fa fa-layer-group" />
            <p>Categories</p>
          </Link>
        </li>
        <li className="adm-item ">
          <Link to="/admin/notify" className="collapsed" aria-expanded="false">
            <i className="fa fa-bell" />
            <p>Notify/Alerts Users</p>
          </Link>
        </li>
        <li className="adm-item">
          <Link to="/admin/reports" className="collapsed" aria-expanded="false">
            <i className="	fas fa-server" />
            <p>Reports</p>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>


  
);

  };
export default withRouter(AdminLeftBar);