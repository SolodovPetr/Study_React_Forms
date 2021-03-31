import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="d-flex flex-column flex-md-row align-items-center px-md-4 bg-white border-bottom">
        <h5 className="my-0 mr-md-auto font-weight-normal">Forms</h5>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-nav">
                <NavLink className="nav-item nav-link p-2 " to="/" exact>Form One</NavLink>
                <NavLink className="nav-item nav-link p-2 " to="/formtwo">Form Two</NavLink>
                <NavLink className="nav-item nav-link p-2 " to="/formthree">Form Three</NavLink>
                <NavLink className="nav-item nav-link p-2 " to="/formfour">Form Four</NavLink>
            </div>
        </nav>
    </div>
);

export default Header;
