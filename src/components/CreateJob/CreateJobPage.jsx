import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function CreateJobPage() {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();


    const [newUser, setNewUser] = useState('');
    const [newJobName, setNewJobName] = useState('');
    const [newJobNumber, setNewJobNumber] = useState('');
    const [newJobType, setNewJobType] = useState('');
    const [newStartDate, setNewStartDate] = useState('');
    const [newStartTime, setNewStartTime] = useState('');
    const [newDuration, setNewDuration] = useState('');
    const [newContactName, setNewContactName] = useState('');
    const [newContactNumber, setNewContactNumber] = useState('');
    const [newNotes, setNewNotes] = useState('');

    const [today, setToday] = useState(new Date().toJSON().slice(0, 10));


    const backButton = () => {
        console.log('I want to make this go back to whatever page it just left');
        history.push('/user');
        window.location.reload(true);
    };

    const handleCreateJob = (event) => {
        event.preventDefault();
        dispatch({
            type: 'CREATE_NEW_JOB',
            payload: {
                user_id: newUser,
                jobname: newJobName,
                jobnum: Number(newJobNumber),
                jobtype: newJobType,
                start_date: newStartDate,
                start_time: newStartTime,
                duration: Number(newDuration),
                contactname: newContactName,
                contactnum: newContactNumber,
                notes: newNotes
            }
        });
        history.push('/jobsubmitted');
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> <u> Create Job </u> </h1>

            <div className="container">
                <form onSubmit={handleCreateJob}>
                    <label htmlFor="job-name"> {user.username}'s User Id': </label>
                    <input id="job-name" type="text" value={newUser} onChange={(event) => { setNewUser(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-name"> Job Name: </label>
                    <input id="job-name" type="text" value={newJobName} onChange={(event) => { setNewJobName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-number"> Job Number: </label>
                    <input id="job-number" type="number" value={newJobNumber} onChange={(event) => { setNewJobNumber(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-type"> Job type: </label>
                    <input id="job-type" type="text" value={newJobType} onChange={(event) => { setNewJobType(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-date"> Start Date: </label>
                    <input id="job-date" type="date" min={today} value={newStartDate} onChange={(event) => { setNewStartDate(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-time"> Start Time: </label>
                    <input id="job-time" type="time" value={newStartTime} onChange={(event) => { setNewStartTime(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-duration"> Job Duration: </label>
                    <input id="job-duration" type="number" min="0" max="12" value={newDuration} onChange={(event) => { setNewDuration(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-name"> Contact Name: </label>
                    <input id="con-name" type="text" value={newContactName} onChange={(event) => { setNewContactName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-number"> Contact Number: </label>
                    <input id="con-number" type="tel" value={newContactNumber} onChange={(event) => { setNewContactNumber(event.target.value) }} />
                    <br></br>
                    <input id="job-notes" type="textarea" placeholder="Write your job notes" value={newNotes} onChange={(event) => { setNewNotes(event.target.value) }} />
                    <br></br>
                    <button text="submit" className="buttons" > Create Job </button>
                </form>
            </div>
            <br></br>
            <br></br>
            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backButton()}> Back to Home Page </button>
            </div>

        </div>
    )
}
export default CreateJobPage;