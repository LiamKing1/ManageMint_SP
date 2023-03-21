import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function EditJob() {

    const history = useHistory();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [newUser, setNewUser] = useState('');
    const [jobName, newJobName] = useState('');
    const [jobNumber, newJobNumber] = useState('');
    const [jobType, newJobType] = useState('');
    const [startDate, newStartDate] = useState('');
    const [startTime, newStartTime] = useState('');
    const [duration, newDuration] = useState('');
    const [contactName, newContactName] = useState('');
    const [contactNumber, newContactNumber] = useState('');
    const [notes, newNotes] = useState('');
    // const [status, setStatus] = useState('');

    const [today, setToday] = useState(new Date().toJSON().slice(0, 10));

    
    const handleEdit = () => {
        dispatch({
            type: 'EDIT_A_JOB',
            payload: {
                user_id: newUser,
                jobname: jobName,
                jobnum: jobNumber,
                jobtype: jobType,
                start_date: startDate,
                start_time: startTime,
                duration: duration,
                contactname: contactName,
                contactnum: contactNumber,
                notes: notes,
                id: id
            }
        });
        pushComplete();
    };
    
    const cancelEdit = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };
    
    const pushComplete = () => {
        history.push('/editsuccessful');
    }

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> <u> Edit Job </u> </h1>
            <section>

                <form className="container" onSubmit={handleEdit}>
                    <label htmlFor="job-name"> {user.username}'s User Id': </label>
                    <input id="job-name" type="text" value={newUser} onChange={(event) => { setNewUser(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-name"> Job Name: </label>
                    <input id="job-name" type="text" value={jobName} onChange={(event) => { newJobName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-number"> Job Number: </label>
                    <input id="job-number" type="number" value={jobNumber} onChange={(event) => { newJobNumber(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-type"> Job type: </label>
                    <input id="job-type" type="text" value={jobType} onChange={(event) => { newJobType(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-date"> Start Date: </label>
                    <input id="job-date" type="date" value={startDate} onChange={(event) => { newStartDate(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-time"> Start Time: </label>
                    <input id="job-time" type="time" value={startTime} onChange={(event) => { newStartTime(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-duration"> Job Duration: </label>
                    <input id="job-duration" type="number" min="0" max="12" value={duration} onChange={(event) => { newDuration(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-name"> Contact Name: </label>
                    <input id="con-name" type="text" value={contactName} onChange={(event) => { newContactName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-number"> Contact Number: </label>
                    <input id="con-number" type="tel" value={contactNumber} onChange={(event) => { newContactNumber(event.target.value) }} />
                    <br></br>
                    <input id="job-notes" type="textarea" placeholder="Write your job notes" value={notes} onChange={(event) => { newNotes(event.target.value) }} />
                    <br></br>
                    <br></br>
                    <button text="submit" className="buttons" > Submit Edit </button>
                </form>
                <div className="back-btns">
                    <button text="submit" className="buttons" onClick={() => cancelEdit()} > Cancel Edit </button>
                </div>
            </section>

        </div>
    )
};

export default EditJob;