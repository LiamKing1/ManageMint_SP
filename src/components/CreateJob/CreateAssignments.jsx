import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function JobAssignments() {

    const user = useSelector((store) => store.user);
    const history = useHistory();
    const laborers = useSelector((store) => store.laborerReducer);
    const [newLaborer, setNewLaborer] = useState('');
    const [newSupervisor, setNewSupervisor] = useState('');


    const submitSend = () => {
        console.log('I want to make this go back to whatever page it just left');
        history.push('/user');
        window.location.reload(true);
    };

    const createNew = () => {
        history.push('/createjob');
        window.location.reload(true);
    };

    const viewJobs = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>
            <form className="container">
                <label htmlFor="sup-name"> Supervisor Name: </label>
                <select>
                    <option id="sup-name" > Select Supervisor </option>
                    <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Lonny Levi </option>
                    <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Shorty Larz </option>
                    <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Deputy Dan </option>
                    <option id="sup-name" value={newSupervisor} onChange={(event) => { setNewSupervisor(event.target.value) }}> Cory Shortwing </option>
                </select>
                <br></br>
                <br></br>
                <fieldset>
                    <legend htmlFor="lab-name"> Laborers Assignment: </legend>
                    <input id="lab-name" type="checkbox" /> {laborers[0]} Mo Isla <br></br>
                    <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Martin Jewel <br></br>
                    <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Jordan Doy <br></br>
                    <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Micheal Mitten <br></br>
                    <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Tony Anz <br></br>
                    <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Billy Gene <br></br>
                    <input id="lab-name" type="checkbox" value={newLaborer} onChange={(event) => { setNewLaborer(event.target.value) }} /> Tory Blaine <br></br>
                </fieldset>
                <button text="submit" className="buttons" onClick={() => submitSend()}> Submit & Send Assignments</button>
            </form>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Home Page </button>
                <button text="submit" className="buttons" onClick={() => createNew()}> Create New Job </button>
                <button text="submit" className="buttons" onClick={() => viewJobs()}> View Jobs </button>
            </div>
        </div>
    )
}
export default JobAssignments;