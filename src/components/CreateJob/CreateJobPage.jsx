import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';


function CreateJobPage() {

    // const [userId, newUserId] = useState([]);
    // const [newJobName, setNewJobName] = useState([]);
    // const [newJonNumber, setNewJobNumber] = useState([]);
    // const [newJobType, setNewJobType] = useState([]);
    // const [newStartDate, setNewStartDate] = useState([]);
    // const [newStartTime, setNewStartTime] = useState([]);
    // const [newDuration, setNewDuration] = useState([]);
    // const [newContactName, setNewContactName] = useState([]);
    // const [newContactNumber, setNewContactNumber] = useState([]);
    // const [newLaborer, setNewLaborer] = useState([]);
    // const [newSupervisor, setNewSupervisor] = useState([]);
    // const [newNotes, setNewNotes] = useState([]);

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
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Supervisor Name: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
                <br></br>
                <label htmlFor="job-name"> Job Notes: </label>
                <input id="job-name" required // value={newJobname} onChange={(event) => setNewJobName(event.target.value)}
                />
            </form>

            {/* <LogOutButton className="btn" /> */}
        </div>
    )
}
export default CreateJobPage;