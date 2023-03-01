import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const viewJobsButton = () => {
    history.push('/viewjobs');
  };

  const createJobButton = () => {
    history.push('/createjob');
  };

  const advisorybButton = () => {
    history.push('/safetyadvisory');
  };

  const viewOtButton = () => {
    history.push('/overtime');
  };

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <img></img>
      <p>Your ID is: {user.id}</p>

      <h1> View Jobs </h1>
      <button text="submit" className="view_jobs" onClick={() => viewJobsButton()}> View Jobs </button>

      <h1> Create Job </h1>
      <button text="submit" className="create_job" onClick={() => createJobButton()}> View Jobs </button>

      <h1> Create Safety Advisory </h1>
      <button text="submit" className="create_advisory" onClick={() => advisorybButton()}> View Jobs </button>

      <h1> View OT Requests </h1>
      <button text="submit" className="view_ot" onClick={() => viewOtButton()}> View Jobs </button>

      {/* <LogOutButton className="btn" /> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
