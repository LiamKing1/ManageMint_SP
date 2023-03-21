import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ViewJobsPage() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.viewJobsReducer);
    const user = useSelector((store) => store.user);
    const history = useHistory();


    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    const handleDetails = (id) => {
        history.push(`/jobdetails/${id}`);
    };

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOB_VIEWS'
        });
    }, []);

    return (
        <div>
            <div className="greeting">
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> <u> Current Job </u> </h1>

            <section>
                {jobs.map(job => (
                    <div className="container" key={job.id}>
                        <h2> Job Name: <i><u> {job.jobname} </u></i> </h2>
                        <h2> Job Number: <i><u> {job.jobnum} </u></i> </h2>
                        <h2> Contact Name: <i><u> {job.contactname} </u></i> </h2>
                        <h2> Contact Number: <i><u> {job.contactnum} </u></i> </h2>
                        <br></br>
                        <button text="submit" className="buttons" onClick={() => handleDetails(job.id)}> View Details </button>
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
            </div>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
            </div>
        </div>
    );
}
export default ViewJobsPage;