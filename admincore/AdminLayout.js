import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuthenticated} from '../auth';
import AdminMenu from './AdminMenu';


const AdminLayout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <div className={className}>{children}</div>
          </div>
    
);





export default AdminLayout;
