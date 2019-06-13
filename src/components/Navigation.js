import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <NavLink className="navbar-brand d-block d-md-none" to="/">WebSiteName</NavLink>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
                {/* <ul class="navbar-nav"> */}
                    {/* <li class="nav-item"> */}
                        {/* <a class="nav-link" href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a> */}
                    {/* </li> */}
                    {/* <li class="nav-item"> */}
                        {/* <a class="nav-link" href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a> */}
                    {/* </li> */}
                {/* </ul> */}
            </div>
        </nav>
    );
};

export default Navigation;