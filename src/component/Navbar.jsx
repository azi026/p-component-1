import React from 'react'

const NavBar = props =>{
    
    return(
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">{""}
        <span className="primary" >{props.totalCounters}</span>
        </a>
        
        </nav>
    );
};
export default NavBar;