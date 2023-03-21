import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function EditJob() {

    const history = useHistory();
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const { id } = useParams();
    // const job = useSelector((store) => store.viewJobsReducer);

    // const [userId, newUserId] = useState('');
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
    // const [status, setStatus] = useState('');

    const cancelEdit = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    const handleEdit = () => {
        dispatch({
            type: 'EDIT_A_JOB',
            payload: {
                jobname: jobName,
                jobnum: jobNumber,
                jobtype: jobType,
                start_date: startDate,
                start_time: startTime,
                duration: duration,
                contactname: contactName,
                contactnum: contactNumber,
                laborer: laborer,
                supervisor: supervisor,
                notes: notes,
                id: id
            }
        });
        pushComplete();
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
                    {/* <label htmlFor="user-id"> User Id: </label>
                    <input id="user-id" type="number" value={userId} onChange={(event) => { newUserId(event.target.value) }} />
                    <br></br> */}
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NAME', payload: event.target.value })} placeholder='Job Name' /> */}
                    <label htmlFor="job-name"> Job Name: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NAME', payload: event.target.value })} placeholder='Job Name' /> */}
                    <input id="job-name" type="text" value={jobName} onChange={(event) => { newJobName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-number"> Job Number: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NUMBER', payload: event.target.value })} placeholder='Job Number' /> */}
                    <input id="job-number" type="number" value={jobNumber} onChange={(event) => { newJobNumber(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-type"> Job type: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_TYPE', payload: event.target.value })} placeholder='Job type' /> */}
                    <input id="job-type" type="text" value={jobType} onChange={(event) => { newJobType(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-date"> Start Date: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'START_DATE', payload: event.target.value })} placeholder='Start Date' /> */}
                    <input id="job-date" type="date" value={startDate} onChange={(event) => { newStartDate(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-time"> Start Time: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'START_TIME', payload: event.target.value })} placeholder='Start Time' /> */}
                    <input id="job-time" type="time" value={startTime} onChange={(event) => { newStartTime(event.target.value) }} />
                    <br></br>
                    <label htmlFor="job-duration"> Job Duration: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'DURATION', payload: event.target.value })} placeholder='Job Duration' /> */}
                    <input id="job-duration" type="number" min="0" max="12" value={duration} onChange={(event) => { newDuration(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-name"> Contact Name: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'CON_NAME', payload: event.target.value })} placeholder='Contact Name' /> */}
                    <input id="con-name" type="text" value={contactName} onChange={(event) => { newContactName(event.target.value) }} />
                    <br></br>
                    <label htmlFor="con-number"> Contact Number: </label>
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'CON_NUM', payload: event.target.value })} placeholder='Contact Number' /> */}
                    <input id="con-number" type="tel" value={contactNumber} onChange={(event) => { newContactNumber(event.target.value) }} />
                    <br></br>
                    <label htmlFor="sup-name"> Supervisor Name: </label>
                    <input id="sup-name" type="text" value={supervisor} onChange={(event) => { newSupervisor(event.target.value) }} />
                    {/* <label htmlFor="sup-name"> Supervisor Name: </label>
                    <select>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { newSupervisor(event.target.value) }}> Supervisor #1 </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { newSupervisor(event.target.value) }}> Supervisor #2 </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { newSupervisor(event.target.value) }}> Supervisor #3 </option>
                        <option id="sup-name" value={newSupervisor} onChange={(event) => { newSupervisor(event.target.value) }}> Supervisor #4 </option>
                    </select> */}
                    <br></br>
                    <br></br>
                    <label htmlFor="laborer"> Laborer: </label>
                    <input id="laborer" type="text" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} />
                    {/* <fieldset>
                        <legend htmlFor="lab-name"> Laborers For This Job: </legend>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #1 <br></br>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #2 <br></br>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #3 <br></br>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #4 <br></br>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #5 <br></br>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #6 <br></br>
                        <input id="lab-name" type="checkbox" value={laborer} onChange={(event) => { newLaborer(event.target.value) }} /> Employee #7 <br></br>
                    </fieldset> */}
                    <br></br>
                    {/* <label htmlFor="job-notes"> Job Notes: </label> */}
                    {/* <input value={createJob} onChange={(event) => dispatch({ type: 'JOB_NOTES', payload: event.target.value })} placeholder='Job Notes' /> */}
                    <input id="job-notes" type="textarea" placeholder="Write your job notes" value={notes} onChange={(event) => { newNotes(event.target.value) }} />
                    <br></br>
                    {/* <label htmlFor="is-complete"> Is Complete: </label>
                    <input id="is-complete" type="radio" value={status} onChange={(event) => { setStatus(event.target.value) }} /> */}
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