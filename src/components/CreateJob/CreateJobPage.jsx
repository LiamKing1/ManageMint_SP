import React from 'react';
import {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';


function CreateJobPage() {

    const [userId, newUserId] = useState([]);
    const [newJobName, setNewJobName] = useState([]);
    const [newJobNumber, setNewJobNumber] = useState([]);
    const [newJobType, setNewJobType] = useState([]);
    const [newStartDate, setNewStartDate] = useState([]);
    const [newStartTime, setNewStartTime] = useState([]);
    const [newDuration, setNewDuration] = useState([]);
    const [newContactName, setNewContactName] = useState([]);
    const [newContactNumber, setNewContactNumber] = useState([]);
    const [newLaborer, setNewLaborer] = useState([]);
    const [newSupervisor, setNewSupervisor] = useState([]);
    const [newNotes, setNewNotes] = useState([]);

    const history = useHistory();

    const backButton = () => {
        history.push('/user');
    };

    // useEffect(() => {
    //     dispatch({
    //         type: ''
    //     });
    // }, []);

    const createJobButton = () => {
        history.push('/viewjobs');
    };

    return (
        <div>
            <h1> Create Job </h1>

            <form>
                <label htmlFor="job-name"> Job Name: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Job Number: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Job type: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Start Date: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Start Time: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Job Duration: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Contact Name: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Contact Number: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Laborer Names: </label>
                <select>
                            <option value="employee-one" > Employee #1 </option>
                            <option value="employee-two" > Employee #2 </option>
                            <option value="employee-three"> Employee #3 </option>
                            <option value="employee-four" > Employee #4 </option>
                            <option value="employee-five" > Employee #5 </option>
                            <option value="employee-six" > Employee #6 </option>
                            <option value="employee-seven"> Employee #7 </option>
                            <option value="employee-eight" > Employee #8 </option>
                        </select>
                {/* <input id="job-name" required value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                /> */}
                <br></br>
                <br></br>
                <label htmlFor="job-name"> Supervisor Name: </label>
                <select>
                            <option value="supervisor-one" > Supervisor #1 </option>
                            <option value="supervisor-two" > Supervisor #2 </option>
                            <option value="supervisor-three"> Supervisor #3 </option>
                            <option value="supervisor-four" > Supervisor #4 </option>
                        </select>
                {/* <input id="job-name" required value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                /> */}
                <br></br>
                <label htmlFor="job-name"> Job Notes: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
            </form>

            <button text="submit" className="create_job" onSubmit={() => {}}> Create Job </button>

            <br></br>
            <br></br>

            <button text="submit" className="view_jobs" onClick={() => backButton()}> Back to Home Page </button>


            {/* <LogOutButton className="btn" /> */}
        </div>
    )
}
export default CreateJobPage;