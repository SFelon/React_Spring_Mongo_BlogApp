import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container">
            <Link className="navbar-brand" to="/">React-Spring-Mongo BlogApp</Link>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item px-2">
                <a href="index.html" className="nav-link active">
                  Dashboard
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="posts.html" className="nav-link">
                  Post
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="categories.html" className="nav-link">
                  Categories
                </a>
              </li>
              <li className="nav-item px-2">
                <a href="users.html" className="nav-link">
                  Users
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown mr-3">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <i className="fas fa-user" /> Welcome Sebastian
                </a>
                <div className="dropdown-menu">
                  <a href="profile.html" className="dropdown-item">
                    <i className="fas fa-user-circle" /> Profile
                  </a>
                  <a href="settings.html" className="dropdown-item">
                    <i className="fas fa-cog" /> Settings
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="login.html" className="nav-link">
                  <i className="fas fa-user-times" /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

/*
import React from 'react';
  import { Link } from 'react-router';

  export default class Nav extends React.Component {
    render() {    
      return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
              <img src="logo.svg" className="Nav__logo" />
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path1">Link 1</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path2">Link 2</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path3">Link 3</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  }

  */
