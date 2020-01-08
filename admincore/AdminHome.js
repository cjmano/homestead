import React from "react";
import {Link} from 'react-router-dom';
import AdminLayout from '../admincore/AdminLayout';
import {isAuthenticated} from '../auth';





const AdminHome = () => (



   <div className="main-panel">
  <div className="content">
    <div className="panel-header bg-primary-gradient">
      <div className="page-inner py-5">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
          <div>
            <h2 className="text-white pb-2 fw-bold">Hello Admin </h2>
            <h5 className="text-white op-7 mb-2">Dashboard</h5>
          </div>
          <div className="ml-md-auto py-2 py-md-0">
          </div>
        </div>
      </div>
    </div>
    <div className="page-inner mt--5">
      <div className="row mt--2">
        
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body ">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="flaticon-user-2 text-success" />
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="pass card-category">Total Visiters</p>
                    <h4 className="card-title">150</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="flaticon-desk text-warning" />
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="pass card-category">New Signups</p>
                    <h4 className="card-title">450</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="flaticon-chart-pie text-primary" />
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="pass card-category">Email Enquires</p>
                    <h4 className="card-title">230</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card card-stats card-round">
            <div className="card-body ">
              <div className="row">
                <div className="col-5">
                  <div className="icon-big text-center">
                    <i className="flaticon-success text-success" />
                  </div>
                </div>
                <div className="col-7 col-stats">
                  <div className="numbers">
                    <p className="pass card-category">Sold</p>
                    <h4 className="card-title">1,345</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-success">
                6%
                <i className="fa fa-chevron-up" />
              </div>
              <div className="h1 m-0">43</div>
              <div className="text-muted mb-3">Home Decor</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-danger">
                -3%
                <i className="fa fa-chevron-down" />
              </div>
              <div className="h1 m-0">17</div>
              <div className="text-muted mb-3">Corporate Office</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-success">
                9%
                <i className="fa fa-chevron-up" />
              </div>
              <div className="h1 m-0">7</div>
              <div className="text-muted mb-3">Home Interior</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-success">
                3%
                <i className="fa fa-chevron-up" />
              </div>
              <div className="h1 m-0">27</div>
              <div className="text-muted mb-3">Doors</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-danger">
                -2%
                <i className="fa fa-chevron-down" />
              </div>
              <div className="h1 m-0">95</div>
              <div className="text-muted mb-3">Windows</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-danger">
                -1%
                <i className="fa fa-chevron-down" />
              </div>
              <div className="h1 m-0">621</div>
              <div className="text-muted mb-3">Furnitures</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card full-height">
            <div className="card-body">
              <div className="card-title">Overall statistics</div>
              <div className="card-category">Daily information about statistics in system</div>
              <div className="d-flex flex-wrap justify-content-around pb-2 pt-4">
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-3" />
                  <h6 className="fw-bold mt-3 mb-0">Cart</h6>
                </div>
                <div className="px-2 pb-1 pb-md-0 text-center">
                  <div id="circles-1" />
                  <h6 className="fw-bold mt-3 mb-0">Orderd</h6>
                </div>
                <div className="px-2 pb-2 pb-md-0 text-center">
                  <div id="circles-2" />
                  <h6 className="fw-bold mt-3 mb-0">Delevired</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card full-height">
            <div className="card-body">
              <div className="card-title">Total income &amp; spend statistics</div>
              <div className="row py-3">
                <div className="col-md-4 d-flex flex-column justify-content-around">
                  <div>
                    <h6 className="fw-bold text-uppercase text-success op-8">Total Income</h6>
                    <h3 className="fw-bold">₹99,99,782</h3>
                  </div>
                  <div>
                    <h6 className="fw-bold text-uppercase text-danger op-8">Total Spend</h6>
                    <h3 className="fw-bold">₹85,99,248</h3>
                  </div>
                </div>
                <div className="col-md-8">
                  <div id="chart-container">
                    <canvas id="totalIncomeChart" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <div className="card-head-row">
                <div className="card-title">User Statistics</div>
                <div className="card-tools">
                  <a href="#" className="btn btn-info btn-border btn-round btn-sm mr-2">
                    <span className="btn-label">
                      <i className="fa fa-pencil" />
                    </span>
                    Export
                  </a>
                  <a href="#" className="btn btn-info btn-border btn-round btn-sm">
                    <span className="btn-label">
                      <i className="fa fa-print" />
                    </span>
                    Print
                  </a>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="chart-container" style={{minHeight: 375}}>
                <canvas id="statisticsChart" />
              </div>
              <div id="myChartLegend" />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-primary">
            <div className="card-header">
              <div className="card-title">Daily Sales</div>
              <div className="card-category">March 25 - April 02</div>
            </div>
            <div className="card-body pb-0">
              <div className="mb-4 mt-2">
                <h1>$4,578.58</h1>
              </div>
              <div className="pull-in">
                <canvas id="dailySalesChart" />
              </div>
            </div>
          </div>
          <div className="card card-primary bg-primary-gradient">
            <div className="card-body">
              <h4 className="mb-1 fw-bold"> Progress</h4>
              <div id="task-complete" className="chart-circle mt-4 mb-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




);

export default AdminHome;