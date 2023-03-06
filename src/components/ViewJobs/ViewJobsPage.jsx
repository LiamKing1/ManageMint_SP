import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DetailsPage from '../JobDetails/jobdetails';
// import LogOutButton from '../LogOutButton/LogOutButton';

function ViewJobsPage() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.viewJobsReducer);
    const user = useSelector((store) => store.user);

    const history = useHistory();


    const backHomeButton = () => {
        history.push('/user');
    };

    const handleDetails = () => {
        history.push('/jobdetails/:id');
    };


    useEffect(() => {
        dispatch({
            type: 'FETCH_JOB_VIEWS'
        });
    }, []);

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> Current Job </h1>

            <section className="table">
                {jobs.map(job => (
                    <div className="jobs" key={job.id}>
                        <h2> Job Name: {job.jobname} </h2>
                        <h2> Job Number: {job.jobnum} </h2>
                        <h2> Contact Name: {job.contactname} </h2>
                        <h2> Contact Number: {job.contactnum} </h2>
                        <h2> Supervisor: {job.supervisor} </h2>
                        <br></br>
                        {/* <button text="submit" className="buttons" onClick={() => handleEdit()}> Edit Job </button>
                        <button text="submit" className="buttons" onClick={() => handleDelete()}> Delete Job </button>
                        <button text="submit" className="buttons" onClick={() => jobCompleteButton()}> Job Complete </button> */}
                        <button text="submit" className="buttons" onClick={() => handleDetails()}> View Details </button>
                    </div>
                ))}
            </section>

            <br></br>
            <br></br>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
            </div>
            
            <div className="prev-sect">
                <h1 className="table"> Previous Jobs </h1>
                {/* <h3> <DetailsPage complete={jobCompleteButton} /> </h3> */}
                <h3> STRETCH GOAL </h3>
            </div>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
            </div>
        </div>
    );
}
export default ViewJobsPage;