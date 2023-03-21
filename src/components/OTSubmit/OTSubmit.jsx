import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function OverTimeReview() {

    const history = useHistory();
    const user = useSelector((store) => store.user);

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    const creatJobWith = () => {
        history.push('/createjob');
        window.location.reload(true);
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>
            <div className="container">
                <h1> This is where laborers who submitted for OT will show! </h1>
                <br></br>
                <button text="submit" className="buttons" onClick={() => creatJobWith()}> Create OT Job </button>
            </div>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
            </div>
        </div>
    )
}

export default OverTimeReview;