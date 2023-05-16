import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../style/style.scss';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="head-icon">
          <li className="">
            <Link to="/">
              <img className="icon" src={logo} alt="logo" />
            </Link>
          </li>
          <h2> Space Travelers Hub </h2>
        </div>
        <ul className="links">
          <li>
            <NavLink to="/" className="link">
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/Missions" className="link">
              Missions
            </NavLink>
          </li>
          <span className="horizontal-divider"> </span>
          <li>
            <NavLink to="/Profile" className="link">
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
