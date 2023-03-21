import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

function DeleteSafetyAd() {

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const { id } = useParams();
    const deleteAd = useSelector((store) => store.deleteAdvisoryReducer);

    const deleteEdit = () => {
        dispatch({
            type: 'DELETE_AN_ADVISORY',
            payload: deleteAd.id
        });
        history.push('/deleteconfirmation');
        // window.location.reload(true);
    };

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    const backToAdvisories = () => {
        history.push('/safetyadv');
        window.location.reload(true);
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>
            <div className="container">
                <h1> Are you sure you want to DELETE this Advisory PERMINANTLY? </h1>
                <button text="submit" className="buttons" onClick={() => deleteEdit()}> Delete Edit </button>
            </div>
            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
                <button text="submit" className="buttons" onClick={() => backToAdvisories()}> Back to Advisories </button>
            </div>
        </div>
    )
}

export default DeleteSafetyAd;