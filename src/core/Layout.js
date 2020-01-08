import React from "react";
import Menu from './Menu';


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <div className="home">
    <div className="home_container flex-column  justify-content-end">
      <center> <div className="home_content text-center">
          <div className="home_title">{ title }</div>
          <div className="breadcrumbs flex-column  justify-content-center">
            <ul className="flex-row  justify-content-start text-center">
              <li><a href="#">Home</a> / { description }</li>
            </ul>
          </div>
          </div>
          </center>
          </div></div>


        <div className={className}>{children}</div>
          </div>
    
);





export default Layout;
