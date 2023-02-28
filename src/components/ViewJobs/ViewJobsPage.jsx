import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function ViewJobsPage() {

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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'VIEW_JOBS',
        });
    }, [])

    return (
        <div>
            <h1> View Jobs </h1>
            
            {/* <LogOutButton className="btn" /> */}
        </div>
    )
}
export default ViewJobsPage;