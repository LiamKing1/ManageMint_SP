import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DetailsPage() {

    const dispatch = useDispatch();

    const job = useSelector((store) => store.viewJobsReducer);
    const user = useSelector((store) => store.user);
    const {id} = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'GET_A_DETAIL',
            payload: id
        });
    }, []);

    const handleEdit = () => {
        history.push('/editjob');
        // console.log('More code needed to take user to the PUT request for edits, it might not need this history.push.');
    };

    const handleDelete = () => {
        const deleteJob = {
            // id,
            // jobname,
            // jobnum,
            // jobtype,
            // start_date,
            // start_time,
            // duration,
            // contactname,
            // contactnum,
            // laborer,
            // supervisor,
            // notes
        }
        dispatch({
            tpye: 'DELETE_A_JOB',
            payload: deleteJob,
        })
        history.push('/deletejob');
    };

    const backHomeButton = () => {
        history.push('/user');
    };

    const backButton = () => {
        history.push('/viewjobs');
    };

    const jobCompleteButton = () => {
        // const pushToPrevious = () => {
        //     let prevJobArray = [];
        //     for (let i = 0; i > prevJobArray.length; i++) {
        //         if (array[i]) {
        //             prevJobArray.push(prevJobArray){
        //                 {prevJobArray.map(prevJobs => 

        //                     )}

        //             }
        //         }
        //         return ;
        //     }
        // };
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> Current Job </h1>

            <section className="table">
                
                    <div className="jobs" key={job.id}>
                        <h2> Job Name: {job.jobname} </h2>
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
                        <br></br>
                        <button text="submit" className="buttons" onClick={() => handleEdit()}> Edit Job </button>
                        <button text="submit" className="buttons" onClick={() => handleDelete()}> Delete Job </button>
                        <button text="submit" className="buttons" onClick={() => jobCompleteButton()}> Job Complete </button>
                    </div>

            </section>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
                <button text="submit" className="buttons" onClick={() => backButton()}> Back Button </button>
            </div>

        </div>
    )

}

export default DetailsPage;