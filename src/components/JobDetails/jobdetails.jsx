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
        history.push(`/deletejob/${id}`);
    };

    const createAssignment = () => {
        history.push(`/assignjob/${id}`);
        window.location.reload(true);
    };

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };
    

    const backButton = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };


    // const jobCompleteButton = () => {
    //     let prevJob = [];
    //     if (is_complete[0]) {
    //         is_complete.push(prevJob);
    //     }
    // };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> Current Job </h1>

            <section className="table">

                <div className="container" key={job.id}>
                    <h2> Job Name: <i><u> {job.jobname} </u></i> </h2>
                    <h2> Job Number: <i><u> {job.jobnum} </u></i> </h2>
                    <h2> Job Type: <i><u> {job.jobtype} </u></i> </h2>
                    <h2> Start Date: <i><u> {job.start_date} </u></i> </h2>
                    <h2> Start Time: <i><u> {job.start_time} </u></i> </h2>
                    <h2> Duration: <i><u> {job.duration} hours </u></i> </h2>
                    <h2> Contact Name: <i><u> {job.contactname} </u></i> </h2>
                    <h2> Contact Number: <i><u> {job.contactnum} </u></i> </h2>
                    <h2> Job Notes: <i><u> {job.notes} </u></i> </h2>
                    <br></br>
                    <button text="submit" className="buttons" onClick={() => handleEdit(job.id)}> Edit Job </button>
                    <button text="submit" className="buttons" onClick={() => handleDelete(job.id)}> Delete Job </button>
                    <button text="submit" className="buttons" onClick={() => jobCompleteButton()}> Job Complete </button>
                    <button text="submit" className="buttons" onClick={() => createAssignment()}> Create Job Assignment </button>
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