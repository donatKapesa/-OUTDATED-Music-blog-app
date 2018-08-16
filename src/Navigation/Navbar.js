import React from 'react';
// import logo from '../assets/images/bootstrap-logo.png';

const navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="#tohome">
                {/* <img src={logo} width="30" height="30" alt=""></img> */}
            </a>
            <form id="search-form" className="form-inline">
                <div className="input-group">
                <input id="search-bar" type="text" className="form-control" placeholder="Search..." aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
            </form>
        </div>
    </nav>
);

export default navbar