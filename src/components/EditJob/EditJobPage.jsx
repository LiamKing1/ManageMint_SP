import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function EditJob(prop) {

    const history = useHistory();
    const user = useSelector((store) => store.user);
    const job = useSelector((store) => store.viewJobsReducer);
    const edits = useSelector((store) => store.editJobReducer);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [userId, newUserId] = useState('');
    const [jobName, newJobName] = useState('');
    const [jobNumber, newJobNumber] = useState('');
    const [jobType, newJobType] = useState('');
    const [startDate, newStartDate] = useState('');
    const [startTime, newStartTime] = useState('');
    const [duration, newDuration] = useState('');
    const [contactName, newContactName] = useState('');
    const [contactNumber, newContactNumber] = useState('');
    const [laborer, newLaborer] = useState('');
    const [supervisor, newSupervisor] = useState('');
    const [notes, newNotes] = useState('');

    const cancelEdit = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'EDIT_A_JOB',
            payload: edits
        })
        history.push('/editsuccessful');
    }

    const handleEdit = () => {
        dispatch({
            type: 'EDIT_A_JOB',
            payload: {
                user_id: userId,
                jobname: jobName,
                jobnum: Number (jobNumber),
                jobtype: jobType,
                start_date: startDate,
                start_time: startTime,
                duration: Number (duration),
                contactname: contactName,
                contactnum: contactNumber,
                laborer: laborer,
                supervisor: supervisor,
                notes: notes
            }
        });
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> Edit Job </h1>
            <section>

                <form className="container" onSubmit={handleSubmit}>
                    <label htmlFor="user-id"> User Id: </label>
                    <input id="user-id" type="number" value={userId} onChange={(event) => newUserId(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-name"> Job Name: </label>
                    <input id="job-name" type="text" value={jobName} onChange={(event) => newJobName(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-number"> Job Number: </label>
                    <input id="job-number" type="number" value={jobNumber} onChange={(event) => newJobNumber(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-type"> Job type: </label>
                    <input id="job-type" type="text" value={jobType} onChange={(event) => newJobType(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-date"> Start Date: </label>
                    <input id="job-date" type="date" value={startDate} onChange={(event) => newStartDate(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-time"> Start Time: </label>
                    <input id="job-time" type="time" value={startTime} onChange={(event) => newStartTime(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-duration"> Job Duration: </label>
                    <input id="job-duration" type="number" min="0" max="12" value={duration} onChange={(event) => newDuration(event.target.value) } />
                    <br></br>
                    <label htmlFor="con-name"> Contact Name: </label>
                    <input id="con-name" type="text" value={contactName} onChange={(event) => newContactName(event.target.value) } />
                    <br></br>
                    <label htmlFor="con-number"> Contact Number: </label>
                    <input id="con-number" type="tel" value={contactNumber} onChange={(event) => newContactNumber(event.target.value) } />
                    <br></br>
                    <label htmlFor="lab-name"> Laborer Names: </label>
                    <input id="lab-name" type="text" value={laborer} onChange={(event) => newLaborer(event.target.value) } />
                    <br></br>
                    <br></br>
                    <label htmlFor="sup-name"> Supervisor Name: </label>
                    <input id="sup-name" type="text" value={supervisor} onChange={(event) => newSupervisor(event.target.value) } />
                    <br></br>
                    <label htmlFor="job-notes"> Job Notes: </label>
                    <input id="job-notes" type="text" value={notes} onChange={(event) => newNotes(event.target.value) } />
                    <br></br>
                    <button text="submit" className="buttons" > Submit Edit </button>
                </form>
                <div className="back-btns">
                    {/* <button text="submit" className="buttons" onClick={() => submitEdit()}> Submit Edit </button> */}
                    <button text="submit" className="buttons" onClick={() => cancelEdit()} > Cancel Edit </button>
                </div>
            </section>

        </div>
    )
};

export default EditJob;