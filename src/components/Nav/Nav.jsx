import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title"> ManageMint </h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="nav-title" to="/user">
              Home
            </Link>

            <Link className="nav-title" to="/info">
              Info
            </Link>
          </>
        )}

        <Link className="nav-title" to="/about">
          About
        </Link>

        {user.id && (
        <>
          <LogOutButton className="nav-title" />
        </>
        )}

      </div>
    </div>
  );
}

export default Nav;
