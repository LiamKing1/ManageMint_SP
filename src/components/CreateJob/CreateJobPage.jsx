import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';


function CreateJobPage() {

    const createJob = useSelector((store) => store.jobCreationReducer);
    const user = useSelector((store) => store.user);

    const [userId, newUserId] = useState('');
    const [newJobName, setNewJobName] = useState('');
    const [newJobNumber, setNewJobNumber] = useState('');
    const [newJobType, setNewJobType] = useState('');
    const [newStartDate, setNewStartDate] = useState('');
    const [newStartTime, setNewStartTime] = useState('');
    const [newDuration, setNewDuration] = useState('');
    const [newContactName, setNewContactName] = useState('');
    const [newContactNumber, setNewContactNumber] = useState('');
    const [newLaborer, setNewLaborer] = useState('');
    const [newSupervisor, setNewSupervisor] = useState('');
    const [newNotes, setNewNotes] = useState('');
    // const [status, setStatus] = useState('');



    const dispatch = useDispatch();
    const history = useHistory();

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
                user_id: Number(userId),
                jobname: newJobName,
                jobnum: Number(newJobNumber),
                jobtype: newJobType,
                start_date: newStartDate,
                start_time: newStartTime,
                duration: Number(newDuration),
                contactname: newContactName,
                contactnum: newContactNumber,
                laborer: newLaborer,
                supervisor: newSupervisor,
                notes: newNotes
                // is_complete: status
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

            <h1 className="title"> Create Job </h1>

            <div className="container">
                <form onSubmit={handleCreateJob}>
                    {/* <label htmlFor="user-id"> User Id: </label>
                    <input id="user-id" type="number" value={userId} onChange={(event) => { newUserId(event.target.value) }} />
                    <br></br> */}
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NAME', payload: event.target.value })} placeholder='Job Name' /> */}
                    <label htmlFor="job-name"> Job Name: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NAME', payload: event.target.value })} placeholder='Job Name' /> */}
                    <input id="job-name" type="text" value={newJobName} onChange={(event) => { setNewJobName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-number"> Job Number: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NUMBER', payload: event.target.value })} placeholder='Job Number' /> */}
                    <input id="job-number" type="number" value={newJobNumber} onChange={(event) => { setNewJobNumber(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-type"> Job type: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_TYPE', payload: event.target.value })} placeholder='Job type' /> */}
                    <input id="job-type" type="text" value={newJobType} onChange={(event) => { setNewJobType(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-date"> Start Date: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'START_DATE', payload: event.target.value })} placeholder='Start Date' /> */}
                    <input id="job-date" type="date" value={newStartDate} onChange={(event) => { setNewStartDate(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-time"> Start Time: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'START_TIME', payload: event.target.value })} placeholder='Start Time' /> */}
                    <input id="job-time" type="time" value={newStartTime} onChange={(event) => { setNewStartTime(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-duration"> Job Duration: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'DURATION', payload: event.target.value })} placeholder='Job Duration' /> */}
                    <input id="job-duration" type="number" min="0" max="12" value={newDuration} onChange={(event) => { setNewDuration(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-name"> Contact Name: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'CON_NAME', payload: event.target.value })} placeholder='Contact Name' /> */}
                    <input id="con-name" type="text" value={newContactName} onChange={(event) => { setNewContactName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-number"> Contact Number: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'CON_NUM', payload: event.target.value })} placeholder='Contact Number' /> */}
                    <input id="con-number" type="tel" value={newContactNumber} onChange={(event) => { setNewContactNumber(event.target.value) }} />
                    <br></br>
                    <label htmlFor="sup-name"> Supervisor Name: </label>
                    {/* <input id="sup-name" type="text" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }} /> */}
                    <select>
                        <option id="sup-name" > Select Supervisor </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Lonny Levi </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Shorty Larz </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Deputy Dan </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Cory Shortwing </option>
                    </select>
                    <br></br>
                    <br></br>
                    <label htmlFor="laborer"> Laborer </label>
                    {/* <input id="laborer" type="text" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> */}
                    <fieldset>
                        <legend htmlFor="lab-name"> Laborers For This Job: </legend>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Mo Isla <br></br>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Martin Jewel <br></br>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Jordan Doy <br></br>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Micheal Mitten <br></br>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Tony Anz <br></br>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Billy Gene <br></br>
                        <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Tory Blaine <br></br>
                    </fieldset>
                    <br></br>
                    {/* <label htmlFor="job-notes"> Job Notes: </label> */}
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NOTES', payload: event.target.value })} placeholder='Job Notes' /> */}
                    <input id="job-notes" type="textarea" placeholder="Write your job notes" value={newNotes} onChange={(event) => { setNewNotes(event.target.value) }} />
                    {/* <br></br>
                    <label htmlFor="is-complete"> Job Status Incomplete: </label>
                    <input id="is-complete" type="radio" value={status} onChange={(event) => { setStatus(event.target.value) }} /> */}
                    <br></br>
                    <button text="submit" className="buttons" > Create Job </button>
                </form>
            </div>
            {/* <button text="submit" className="create_job" onClick={() => createJobButton()}> Create Job </button> */}

            <br></br>
            <br></br>
            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backButton()}> Back to Home Page </button>
            </div>

        </div>
    )
}
export default CreateJobPage;