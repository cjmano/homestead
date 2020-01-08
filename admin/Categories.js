import React from 'react';
import AdminLeftBar from '../admincore/AdminLeftBar';
import AdminMenu from '../admincore/AdminMenu';
import {Link, withRouter} from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import {isAuthenticated} from '../auth';




const Categories = () => {
    
    const {user: {_id, firstname, lastname, email, role}} = isAuthenticated();
    
  

        
        return(
         


<div className="main-panel">
<ScriptTag isHydrating={true} type="text/babel" src="tble.js" />
  <div className="content">
    <div className="panel-header bg-primary-gradient">
      <div className="page-inner py-5">
        <div className="d-flex align-items-left align-items-md-center flex-column flex-md-row">
          <div>
            <h2 className="text-white pb-2 fw-bold">Hello Admin </h2>
            <h5 className="text-white op-7 mb-2">Categories</h5>
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
                <h4 className="card-title">Categories</h4>
                <Link className="btn btn-primary btn-round ml-auto" to="addcategory">
                  <i className="fas fa-layer-group"> </i> &nbsp;&nbsp;
                  Add
                </Link>
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
              <div className="table-responsive">
                <table id="multi-filter-select" className="display table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Category Id</th>
                      <th>Name</th>
                      <th>Created</th>
                      <th>Updated</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>56025</td>
                      <td>Category 1</td>
                      <td>12/08/2019</td>
                      <td>16/08/2019</td>
                      <td>
                        <div className="form-button-action">
                          <button type="button" data-toggle="tooltip" title className="btn btn-sm btn-md btn-success " value="Send" data-original-title="Edit"><i className="fas fa-edit"> Edit</i></button>
                          &nbsp;&nbsp;<button type="button" data-toggle="tooltip" title className="btn btn-sm btn-md btn-danger " value="Send" data-original-title="Delete"><i className="fas fa-trash-alt"> Delete</i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>56025</td>
                      <td>Category 2</td>
                      <td>12/08/2019</td>
                      <td>16/08/2019</td>
                      <td>
                        <div className="form-button-action">
                          <button type="button" data-toggle="tooltip" title className="btn btn-sm btn-md btn-success " value="Send" data-original-title="Edit"><i className="fas fa-edit"> Edit</i></button>
                          &nbsp;&nbsp;<button type="button" data-toggle="tooltip" title className="btn btn-sm btn-md btn-danger " value="Send" data-original-title="Delete"><i className="fas fa-trash-alt"> Delete</i></button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>56025</td>
                      <td>Category 3</td>
                      <td>12/08/2019</td>
                      <td>16/08/2019</td>
                      <td>
                        <div className="form-button-action">
                          <button type="button" data-toggle="tooltip" title className="btn btn-sm btn-md btn-success " value="Send" data-original-title="Edit"><i className="fas fa-edit"> Edit</i></button>
                          &nbsp;&nbsp;<button type="button" data-toggle="tooltip" title className="btn btn-sm btn-md btn-danger " value="Send" data-original-title="Delete"><i className="fas fa-trash-alt"> Delete</i></button>
                        </div>
                      </td>
                    </tr>
             
                  </tbody>
                </table>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        );};


        export default Categories;