import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate  } from 'react-router-dom';
import { withRouter } from './withRouter';

const Navbar = () => {

    const [isOpen, setOpen] = useState(false);
    const navigate = useNavigate();
    const isAuth = !!localStorage.getItem("token");

    const loginUser = () => {
      localStorage.setItem("token", "some-login-token");
      navigate("/profile/Vijit");
    };
  
    const logoutUser = () => {
      localStorage.removeItem("token");
      navigate("/");
    };

    return ( 
        <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger burger ${isOpen && "is-active"}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
            {/* ... */}
            <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <NavLink className="navbar-item"  to="/">
              Home
            </NavLink>

            <NavLink
              className="navbar-item"
           
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className="navbar-item"
            
              to={`/profile/bethoven`}
              
            >
              Profile
            </NavLink>
          </div>

          

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <button className="button is-white" onClick={loginUser}>
                    Log in
                  </button>
                ) : (
                  <button className="button is-black" onClick={logoutUser}>
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
    );
   };


   export default withRouter(Navbar);