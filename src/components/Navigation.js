import React from 'react';
import { NavLink } from "react-router-dom";
import imgSC from '../graphic/prg/SC.png';

//  d-md-none

const Navigation = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <NavLink className="navbar-brand d-block navbar-toggler" to="/">
                <img alt='' src={imgSC} className="d-inline-block align-center mr-2" style={{ width: 60 + 'px' }}/>
                WebSiteName
            </NavLink>

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