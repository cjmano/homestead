import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link, Redirect } from 'react-router-dom';
import { getProduct, getCategories, updateProduct } from './apiAdmin';

const UpdateProduct = ({ match }) => {
    const [values, setValues] = useState({
        productsku: '',
        productname: '',
        price: '',
        categories: [],
        category: '',
        quantity: '',
        photo: '',
        shipping: '',
        productshort: '',
        productlong: '',
        
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });
    const [categories, setCategories] = useState([]);

    const { user, token } = isAuthenticated();
    const {
        productsku,
        productname,
        price,
        categories,
        category,
        quantity,
        photo,
        shipping,
        productshort,
        productlong,
        
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
        } = values;
    } = values;

    const init = productId => {
        getProduct(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                setValues({
                    ...values,
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    category: data.category._id,
                    shipping: data.shipping,
                    quantity: data.quantity,
                    formData: new FormData()
                });
                // load categories
                initCategories();
            }
        });
    };

    // load categories and set form data
    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    useEffect(() => {
        init(match.params.productId);
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        updateProduct(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                    quantity: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdProduct: data.name
                });
            }
        });
    };

    <form className="mb-3" onSubmit={clickSubmit}>
    <h4>Post Photo</h4>
    <div className="form-group">
        <label className="btn btn-secondary">
            <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*" />
        </label>
    </div>

    <div className="form-group">
        <label className="text-muted">productsku</label>
        <input onChange={handleChange('productsku')} type="text" className="form-control" value={productsku} />
    </div>
    <div className="form-group">
        <label className="text-muted">productname</label>
        <input onChange={handleChange('productname')} type="text" className="form-control" value={productname} />
    </div>

    <div className="form-group">
        <label className="text-muted">Short Description</label>
        <textarea onChange={handleChange('productshort')} className="form-control" value={productshort} />
    </div>

    <div className="form-group">
        <label className="text-muted">Long Description</label>
        <textarea onChange={handleChange('productlong')} className="form-control" value={productlong} />
    </div>
    <div className="form-group">
        <label className="text-muted">Price</label>
        <input onChange={handleChange('price')} type="number" className="form-control" value={price} />
    </div>

    <div className="form-group">
        <label className="text-muted">Category</label>
        <select onChange={handleChange('category')} className="form-control" >
        <option>Please select</option>
        {categories &&
                categories.map((c, i) => (
                    <option key={i} value={c._id}>
                        {c.name}
                    </option>
                ))}
       
        </select>
    </div>

    <div className="form-group">
        <label className="text-muted">Shipping</label>
        <select onChange={handleChange('shipping')} className="form-control">
            <option>Please select</option>
            <option value="0">No</option>
            <option value="1">Yes</option>
        </select>
    </div>

    <div className="form-group">
        <label className="text-muted">Quantity</label>
        <input onChange={handleChange('quantity')} type="number" className="form-control" value={quantity} />
    </div>

    <button className="btn btn-outline-primary">Create Product</button>
</form>
);

const showError = () => (
<div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
    {error}
</div>
);

const showSuccess = () => (
<div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
    <h2>{`${createdProduct}`} is created!</h2>
</div>
);

const showLoading = () =>
loading && (
    <div className="alert alert-success">
        <h2>Loading...</h2>
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
    <h5 className="text-white op-7 mb-2">This is your product page You can see the progress you've made with your work</h5>
    <div className="ml-md-auto py-2 py-md-0">
    </div>
  </div>
</div>
</div>

<div className="page-inner mt--5">
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
</div>
<div className="row mt--2">
  
  <div className="col-md-12">
    <div className="card">
      <div className="card-header">
        <div className="d-flex align-items-center">
          <h4 className="card-title">Add/Edit Product</h4>
          <Link to="addproduct" className="btn btn-primary btn-round ml-auto" >
            <i className="fa fa-plus" />
            Add New
          </Link>
        </div>
      </div>
      <div className="card-body" style={{backgroundColor: '#f7fafc', width: '100%'}}>
        
        <div className="modal fade col-md-12" id="addRowModal" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header no-bd">
                <h5 className="modal-title">
                  <span className="fw-mediumbold">
                    Add</span>
                  <span className="fw-light">
                    Product
                  </span>
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="small">Update a Product using this form, make sure you fill them all</p>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group form-group-default">
                        <input id="addName" type="text" className="form-control" placeholder="SKU" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-group-default">
                        <input id="addName" type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-group-default">
                        <input id="addName" type="number" className="form-control" placeholder="Price" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group form-group-default">
                        <input id="addName" type="text" className="form-control" placeholder="Weight" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group form-group-default">
                        <textarea id="addName" type="text" className="form-control" placeholder="Short Desc" defaultValue={""} />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group form-group-default" style={{height: 120}}>
                        <textarea id="addName" type="text" className="form-control" placeholder="Long Desc" defaultValue={""} />
                      </div>
                    </div> 
                    <style dangerouslySetInnerHTML={{__html: "\n                                      .thumb{margin: 10px 5px 0 0;width: 100px;}" }} />
                    <div className="col-sm-12">
                      <div className="form-group form-group-default">
                        <input type="file" id="file-input" multiple />
                        <input type="button" onclick="removeAllImage()" defaultValue="Remove All Image" clas="remove" /> 
                        <div id="thumb-output" /></div></div>
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
      {newPostForm()}
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div></div>


);
};
export default AddProduct;