import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <img></img>
      <p>Your ID is: {user.id}</p>

      <h1> View Jobs </h1>

      <h1> Create Job </h1>

      <h1> Create Safety Advisory </h1>

      <h1> View OT Requests </h1>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
