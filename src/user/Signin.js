import React, {useState} from 'react';
import Layout from '../core/Layout';
import { signin, authenticate, isAuthenticated } from "../auth";

import {Link, Redirect} from 'react-router-dom';

const Signin = () => {
    const [values, setValues] = useState({
        email: '1@gmail.com',
        password: '1@gmail.com',
        error: '',
        loading: false,
        redirectToReferrer: false
    });

const { email, password, loading, error, redirectToReferrer } = values;

const {user} = isAuthenticated();

const handleChange = email => event => {
    setValues({...values, error: false, [email]: event.target.value});

};




// clicksubmit event

const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading:true });
    signin({ email, password }).then(data => {
        if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
        } else {
            authenticate(data, () => {
                setValues({
                    ...values,
                    redirectToReferrer: true
                });
            
                
            });
        }
    });
};



    const signInForm = () => (
       
       <form>

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
    const showLoading = () =>
        loading && (
            <div className="alert alert-info">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if(redirectToReferrer){
            if(user && user.role === 1) {
                return <Redirect to="/admin/admindashboard" />;
            }else{
                return<Redirect to="/user/dashboard" />;
            }

        }
        if(isAuthenticated()) {
            return <Redirect to="/" />;
        }
    };



   return (
    <Layout
        title="Signin"
        description="Signin to Homestead E-commerce App"
        className="container col-lg-5  col-md-offset-3" >
            <br></br><br></br>
            {showLoading()}
            {showError()} 
            {signInForm()}
           {redirectUser()}
        

    </Layout>
);
};

export default Signin;