import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ViewJobsPage() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.viewJobsReducer);

    useEffect(() => {
        dispatch({
            type: 'FETCH_JOBVIEWS',
        });
    }, [])

    return (
        <div>
            <h1> View Jobs </h1>

            <section className="jobs">
                {jobs.map(job => {
                    return (
                        <div key={job.id}>
                            <h3> Job Name: {job.JobName} </h3>
                            <h3> Job Number: {job.JobNumber} </h3>
                            <h3> Job Type: {job.JobType} </h3>
                            <h3> Start Date: {job.StartDate} </h3>
                            <h3> Start Time: {job.StartTime} </h3>
                            <h3> Duration: {job.Duration} </h3>
                            <h3> Contact Name: {job.ContactName} </h3>
                            <h3> Contact Number: {job.ContactNumber} </h3>
                            <h3> Laborer/s: {job.Laborer} </h3>
                            <h3> Supervisor: {job.Supervisor} </h3>
                            <h3> Job Notes: {job.Notes} </h3>
                        </div>
                    );
                })}
            </section>






            {/* <LogOutButton className="btn" /> */}
        </div>
    )
}
export default ViewJobsPage;