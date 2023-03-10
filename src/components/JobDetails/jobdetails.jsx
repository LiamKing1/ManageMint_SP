import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function DetailsPage() {

    const dispatch = useDispatch();
    const job = useSelector((store) => store.viewJobsReducer);
    const user = useSelector((store) => store.user);
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        dispatch({
            type: 'GET_A_DETAIL',
            payload: id
        });
    }, []);

    const handleEdit = () => {
        history.push(`/editjob/${id}`);
    };

    const handleDelete = () => {
        dispatch({
            type: 'DELETE_JOB',
            payload: job.id
        })
        history.push(`/deletejob/:id`);
    };

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    const backButton = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    const jobCompleteButton = () => {

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
                    <h2> Job Name: <i><u> {job.jobname} </u></i> </h2>
                    <h4> Job Number: <i><u> {job.jobnum} </u></i> </h4>
                    <h4> Job Type: <i><u> {job.jobtype} </u></i> </h4>
                    <h4> Start Date: <i><u> {job.start_date} </u></i> </h4>
                    <h4> Start Time: <i><u> {job.start_time} </u></i> </h4>
                    <h4> Duration: <i><u> {job.duration} hours </u></i> </h4>
                    <h4> Contact Name: <i><u> {job.contactname} </u></i> </h4>
                    <h4> Contact Number: <i><u> {job.contactnum} </u></i> </h4>
                    <h4> Laborer/s: <i><u> {job.laborer} </u></i> </h4>
                    <h4> Supervisor: <i><u> {job.supervisor} </u></i> </h4>
                    <h4> Job Notes: <i><u> {job.notes} </u></i> </h4>
                    <br></br>
                    <button text="submit" className="buttons" onClick={() => handleEdit(job.id)}> Edit Job </button>
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