import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';

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
        // window.location.reload(true);
    };

    // const jobCompleteButton = () => {
    //     let prevJob = [];
    //     if (is_complete[0]) {
    //         is_complete.push(prevJob);
    //     }
    // };


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

            <section>
                {jobs.map(job => (
                    <div className="container" key={job.id}>
                        <h2> Job Name: <i><u> {job.jobname} </u></i> </h2>
                        <h2> Job Number: <i><u> {job.jobnum} </u></i> </h2>
                        <h2> Contact Name: <i><u> {job.contactname} </u></i> </h2>
                        <h2> Contact Number: <i><u> {job.contactnum} </u></i> </h2>
                        <h2> Supervisor: <i><u> {job.supervisor} </u></i> </h2>
                        <br></br>
                        {/* <button text="submit" className="buttons" onClick={() => handleEdit()}> Edit Job </button>
                        <button text="submit" className="buttons" onClick={() => handleDelete()}> Delete Job </button>
                        <button text="submit" className="buttons" onClick={() => jobCompleteButton()}> Job Complete </button> */}
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
                {/* <h3> <DetailsPage complete={jobCompleteButton} /> </h3> */}
                {/* <h1> {jobs.forEach(element => {
                    element.push(prevJob[0]);
                })}; </h1> */}
            </div>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
            </div>
        </div>
    );
}
export default ViewJobsPage;