import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function EditSafetyAd() {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const [newAdvisory, setNewAdvisory] = useState('');
    const { id } = useParams();

    const handleEdit = () => {
        dispatch({
            type: 'EDIT_AN_ADVISORY',
            payload: {
                advisory: newAdvisory,
                id: id
            }
        });
        history.push(`/safetyadv`);
        window.location.reload(true);
    };

    const goBack = () => {
        history.push(`/safetyadv`);
        window.location.reload(true);
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>
            <div>
                <form className="container" onSubmit={handleEdit}>
                    <label htmlFor="advisory"> <h2> Edit Advisory </h2> </label>
                    <input id="advisory" type="text" value={newAdvisory} onChange={(event) => { setNewAdvisory(event.target.value) }} />
                    <br></br>
                    <button text="submit" className="buttons" > Submit Edit </button>
                </form>
            </div>
            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => goBack()}> Go Back </button>
            </div>
        </div>
    )
}

export default EditSafetyAd;