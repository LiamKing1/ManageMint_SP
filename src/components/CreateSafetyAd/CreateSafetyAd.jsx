import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SafetyAdvisory() {

    const history = useHistory();
    const dispatch = useDispatch();
    const Advisories = useSelector((store) => store.viewSafetyAd);

    const [newAdvisory, setNewAdvisory] = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_ADVISORIES'
        });
    }, []);

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    const handleCreateAdvisory = (event) => {
        event.preventDefault();
        dispatch({
            type: 'CREATE_NEW_ADVISORY',
            payload: {
                advisory: newAdvisory
            }
        })
        window.location.reload(true);
    };

    // const createAdButton = () => {
    //     dispatch({
    //         type: ,
    //     })
    //     window.location.reload(true);
    // };

    return (
        <div>
            <div className="container">
                <h1> <u> Advisories </u> </h1>
                {Advisories.map(Ads => (
                    <div key={Ads.id}>
                        <ul>
                            <li>
                                <h2>
                                    <i> {Ads.advisory} </i>
                                </h2>
                            </li>
                        </ul>
                    </div>
                ))}
                {/* <ol>
                    <li> Make sure we're placing out respirators inside a ziploc of some sort. <br></br>
                        -Says OSHA
                    </li>
                </ol> */}
            </div>

            <div className="container">
                <form onSubmit={handleCreateAdvisory}>
                    <label htmlFor="advisory"> <h2> NEW ADVISORY </h2> </label>
                    <input id="advisory" type="text" value={newAdvisory} onChange={(event) => { setNewAdvisory(event.target.value) }} />
                    <br></br>
                    <button text="submit" className="buttons" > Create Advisory </button>
                </form>
            </div>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
                {/* <button text="submit" className="buttons" onClick={() => createAdButton()}> Create Safety Advisory </button> */}
            </div>
        </div>
    )
}

export default SafetyAdvisory;