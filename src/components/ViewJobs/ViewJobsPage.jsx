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

    const editButton = () => {
        history.push('/editjob');
        console.log('More code needed to take user to the PUT request for edits, it might not need this history.push.');
    };

    const deleteButton = () => {
        history.push('/deletejob');
    };

    const jobCompleteButton = () => {
        console.log('The goal is to created a way to drop completed jobs down to the previous jobs section');
    };

    const backButton = () => {
        history.push('/user');
    };

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOB_VIEWS'
        });
    }, []);

    return (
        <div>
            <h1> Current Job </h1>

            <section className="jobs">
                {jobs.map(job => (
                    <div key={job.id}>
                        <h4> Job Name: {job.jobname} </h4>
                        <h4> Job Number: {job.jobnum} </h4>
                        <h4> Job Type: {job.jobtype} </h4>
                        <h4> Start Date: {job.start_date} </h4>
                        <h4> Start Time: {job.start_time} </h4>
                        <h4> Duration: {job.duration} hours </h4>
                        <h4> Contact Name: {job.contactname} </h4>
                        <h4> Contact Number: {job.contactnum} </h4>
                        <h4> Laborer/s: {job.laborer} </h4>
                        <h4> Supervisor: {job.supervisor} </h4>
                        <h4> Job Notes: {job.notes} </h4>
                    </div>
                ))}
            </section>
            <button text="submit" className="edit_job" onClick={() => editButton()}> Edit Job </button>
            <button text="submit" className="delete_job" onClick={() => deleteButton()}> Delete Job </button>
            <button text="submit" className="job_complete" onClick={() => jobCompleteButton()}> Job Complete </button>
            {/* <button text="submit" className="create_job" onClick={() => change()}> View Job Details </button> */}

            <br></br>
            <br></br>

            <button text="submit" className="back_home" onClick={() => backButton()}> Back to Home Page </button>

            <h1> Previous Jobs </h1>
            <h3> STRETCH GOAL </h3>

            <br></br>
            <br></br>

            <button text="submit" className="back_home" onClick={() => backButton()}> Back to Home Page </button>

            {/* <LogOutButton className="btn" /> */}
        </div>
    );
}
export default ViewJobsPage;