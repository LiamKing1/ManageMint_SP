import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SafetyAdvisory() {

    const history = useHistory();

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    return (
        <div>
            <div className="container">
                <ol>
                    <li> Make sure we're placing out respirators inside a ziploc of some sort. <br></br>
                        -Says OSHA
                    </li>
                </ol>
            </div>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
            </div>
        </div>
    )
}

export default SafetyAdvisory;