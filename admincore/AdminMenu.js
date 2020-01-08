import React, {Fragment} from "react";
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';


require('./assets/css/imgcrop.css')
require('./assets/css/bootstrap.min.css')
require('./assets/css/atlantis.min.css')

require('./assets/css/demo.css')
require('./assets/css/jsstackedchart.css')
require('./assets/css/mine.css')
require('./assets/css/fonts.css')
require('./assets/css/fonts.min.css')




const adminMenu = ({ history }) => (
  
  

  
  
  <div className="main-header">
    <div className="logo-header" data-background-color="blue">
      <a href="/dashboard" className="logo">
        <img src="../assets/img/logo.png" alt="admin brand" className="admin-brand" />
      </a>
      <button className="admin-toggler sideadm-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle admigation">
        <span className="admin-toggler-icon">
          <i className="icon-menu" />
        </span>
      </button>
      <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
      <div className="adm-toggle">
        <button className="btn btn-toggle toggle-leftbar">
          <i className="icon-menu" />
        </button>
      </div>
    </div>
    
    <adm className="admin admin-header admin-expand-lg" data-background-color="blue2">
      <div className="container-fluid">
        <div className="collapse" id="search-adm">
          <form className="admin-left admin-form adm-search mr-md-3">
            <div className="input-group">
              <div className="input-group-prepend">
                <button type="submit" className="btn btn-search pr-1">
                  <i className="fa fa-search search-icon" />
                </button>
              </div>
              <input type="text" placeholder="Search ..." className="form-control" />
            </div>
          </form>
        </div>
        <ul className="admin-adm topbar-adm ml-md-auto align-items-center">
          <li className="adm-item toggle-adm-search hidden-caret">
            <a className="adm-link" data-toggle="collapse" href="#search-adm" role="button" aria-expanded="false" aria-controls="search-adm">
              <i className="fa fa-search" />
            </a>
          </li>
          <li className="adm-item dropdown hidden-caret">
            <a className="adm-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-envelope" />
            </a>
            <ul className="dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
              <li>
                <div className="dropdown-title d-flex justify-content-between align-items-center">
                  Messages
                  <a href="#" className="small">Mark all as read</a>
                </div>
              </li>
              <li>
                <div className="message-notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <a href="#">
                      <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                      <div className="notif-content">
                        <span className="subject">user</span>
                        <span className="block">
                          messages
                        </span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                      <div className="notif-content">
                        <span className="subject">user</span>
                        <span className="block">
                          messages
                        </span>
                        <span className="time">10 minutes ago</span>
                      </div>
                    </a>
                    <a href="#">
                      <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                      <div className="notif-content">
                        <span className="subject">user</span>
                        <span className="block">
                          messages
                        </span>
                        <span className="time">15 minutes ago</span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <Link to="javascript:void(0);" className="see-all" >See all messages<i className="fa fa-angle-right" /> </Link>
              </li>
            </ul>
          </li>
          <li className="adm-item dropdown hidden-caret">
            <Link to="#" className="adm-link dropdown-toggle"  id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bell" />
              <span className="notification">2</span>
            </Link>
            <ul className="dropdown-menu notif-box animated fadeIn" aria-labelledby="notifDropdown">
              <li>
                <div className="dropdown-title">You have 2 new notification</div>
              </li>
              <li>
                <div className="notif-scroll scrollbar-outer">
                  <div className="notif-center">
                    <Link to="#">
                      <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                      <div className="notif-content">
                        <span className="blockadmin">
                          New user registered
                        </span>
                        <span className="time">5 minutes ago</span>
                      </div>
                    </Link>
                    <Link to="#">
                      <div className="notif-icon notif-primary"> <i className="fa fa-user-plus" /> </div>
                      <div className="notif-content">
                        <span className="block">
                          user send messages to you
                        </span>
                        <span className="time">12 minutes ago</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link className="see-all" href="javascript:void(0);">See all notifications<i className="fa fa-angle-right" /> </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </adm></div>



  
);


export default withRouter(adminMenu);