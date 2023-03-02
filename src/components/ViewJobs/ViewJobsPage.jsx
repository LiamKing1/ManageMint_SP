import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';

function ViewJobsPage() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.viewJobsReducer);

    const history = useHistory();

    // const pushToPrevious = () => {
    //     let prevJobArray = [];
    //     for (let i = 0; i > .length; i++) {
    //         if (array[i]) {
    //             prevJobArray.push(prevJobArray);
    //         }
    //         return ;
    //     }
    // };

    const backButton = () => {
        history.push('/user');
    };

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOB_VIEWS'
        });
    }, []);

    // if (!jobs) {
    //     return <p> Loading </p>;
    // }

    // console.log(jobs);
    return (
        <div>
            <h1> Current Job </h1>

            <section className="jobs">
                {jobs.map(job => (
                    <div key={job.id}>
                        <h4> Job Name: {job.jobname} </h4>
                        <h4> Job Number: {job.jobnum} </h4>
                        <h4> Job Type: {job.Jobtype} </h4>
                        <h4> Start Date: {job.start_date} </h4>
                        <h4> Start Time: {job.start_time} </h4>
                        <h4> Duration: {job.duration} </h4>
                        <h4> Contact Name: {job.contactname} </h4>
                        <h4> Contact Number: {job.contactnum} </h4>
                        <h4> Laborer/s: {job.laborer} </h4>
                        <h4> Supervisor {job.supervisor} </h4>
                        <h4> Job Notes: {job.notes} </h4>
                    </div>
                ))}
            </section>
            <button text="submit" className="create_job" onClick={() => pushToPrevious()}> Edit Job </button>
            <button text="submit" className="create_job" onClick={() => change()}> Delete Job </button>
            <button text="submit" className="create_job" onClick={() => change()}> Job Complete </button>
            <button text="submit" className="create_job" onClick={() => change()}> View Job Details </button>

            <br></br>
            <br></br>

            <button text="submit" className="view_jobs" onClick={() => backButton()}> Back to Home Page </button>

            <h1> Previous Jobs </h1>
            <h3> STRETCH GOAL </h3>

            <br></br>
            <br></br>

            <button text="submit" className="view_jobs" onClick={() => backButton()}> Back to Home Page </button>

            {/* <LogOutButton className="btn" /> */}
        </div>
    );
}
export default ViewJobsPage;