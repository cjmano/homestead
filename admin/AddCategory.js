

import React, { useState } from "react";
import AdminLeftBar from '../admincore/AdminLeftBar';
import AdminMenu from '../admincore/AdminMenu';

import ScriptTag from 'react-script-tag';
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { createCategory } from "./apiAdmin";


const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = e => {
      setError("");
      setName(e.target.value);
  };

  const clickSubmit = e => {
      e.preventDefault();
      setError("");
      setSuccess(false);
      // make request to api to create category
      createCategory(user._id, token, { name }).then(data => {
          if (data.error) {
              setError(data.error);
          } else {
              setError("");
              setSuccess(true);
          }
      });
  };

  const newCategoryFom = () => (
      <form onSubmit={clickSubmit}>
          <div className="form-group">
              <label className="text-muted">Name</label>
              <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  value={name}
                  autoFocus
                  required
              />
          </div>
       <center>   <button className="btn btn-outline-primary">Create Category</button></center>
      </form>
  );

  const showSuccess = () => {
      if (success) {
          return <h3 className="text-success">{name} is created</h3>;
      }
  };

  const showError = () => {
      if (error) {
          return <h3 className="text-danger">Category should be unique</h3>;
      }
  };

  const goBack = () => (
      <div className="mt-5">
          <Link to="/admin/dashboard" className="text-warning">
              Back to Dashboard
          </Link>
      </div>
  );

        return(
         


<div className="main-panel">

  <div className="content">
    <div className="panel-header bg-primary-gradient">
      <div className="page-inner py-5">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
          <div>
            <h2 className="text-white pb-2 fw-bold">Hello Admin </h2>
            <h5 className="text-white op-7 mb-2">This is your Category page</h5>
          </div>
          <div className="ml-md-auto py-2 py-md-0">
          </div>
        </div>
      </div>
    </div>
    
    <div className="page-inner mt--5">
      <div className="row mt--2">
        
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="d-flex align-items-center">
                <h4 className="card-title">Add Category</h4>
             
              </div>
            </div>
            <div className="card-body" style={{backgroundColor: '#f7fafc'}}>
              

              <div className="modal fade col-md-12" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header no-bd">
                      <h5 className="modal-title">
                        <span className="fw-mediumbold">
                          Alert</span>
                        <span className="fw-light">
                          User
                        </span>
                      </h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <p className="small">Create a new User using this form, make sure you fill them all</p>
                      <form>
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group form-group-default">
                              <label>Category</label>
                              <input id="addName" type="text" className="form-control" placeholder="name" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer no-bd">
                      <button type="button" id="addRowButton" className="btn btn-primary btn-sm">Add</button>
                      <button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
             
          
              {showSuccess()}
                    {showError()}
                    {newCategoryFom()}
    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        );};


        export default AddCategory;