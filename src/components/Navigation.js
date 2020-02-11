import React from 'react';
import { NavLink } from "react-router-dom";
import imgSC from '../graphic/prg/joeC.png';

//  d-md-none

const Navigation = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-md">
            <NavLink className="navbar-brand d-block navbar-toggler" to="/developer">
                <img alt='' src={imgSC} className="d-inline-block align-center mr-2" style={{ width: 60 + 'px' }}/>
                joeComponent
            </NavLink>

            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/developer">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/developer/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/developer/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;