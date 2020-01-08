import React, {useState} from 'react';
import Layout from '../core/Layout';
import { signup } from "../auth";

import {Link, withRouter} from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

const { firstname, lastname, email, password, success, error } = values;

const handleChange = firstname => event => {
    setValues({...values, error: false, [firstname]: event.target.value});

};




// clicksubmit event

const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ firstname, lastname, email, password }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error, success: false });
        } else {
            setValues({
                ...values,
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                error: '',
                success: true
            });
        }
    });
};



    const signUpForm = () => (
       
       <form>
            <div className="form-group">
                <label className="text-muted">First Name</label>
                <input onChange={handleChange('firstname')} type="text" className="form-control" value={firstname} />
            </div>
            <div className="form-group">
                <label className="text-muted">Last Name</label>
                <input onChange={handleChange('lastname')} type="text" className="form-control" value={lastname} />
            </div>
       <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} type="email" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>
            <center> <button onClick={clickSubmit} className="btn btn-md btn-primary">
                Submit
            </button></center>
        </form>
    );

// show error
    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    // show success
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            New account is created. Please <Link to="/signin">Signin</Link>
        </div>
    );




   return (
    <Layout
        title="Signup"
        description="Signup to Homestead E-commerce App"
        className="container col-lg-5  col-md-offset-3" >
            <br></br><br></br>
            {showSuccess()}
            {showError()}
            <br></br>
        {signUpForm()}
        

    </Layout>
);
};

export default Signup;