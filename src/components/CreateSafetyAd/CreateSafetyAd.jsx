import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SafetyAdvisory(props) {

    const history = useHistory();
    const dispatch = useDispatch();
    const Advisories = useSelector((store) => store.viewSafetyAd);
    const user = useSelector((store) => store.user);
    const { id, adv } = props;
    const [newAdvisory, setNewAdvisory] = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_ADVISORIES',
        });
        
        dispatch({
            type: 'GET_AD_DETAIL',
        });

        // const timer = setTimeout(() => {
        //     // Call a function to delete the post after 30 days
        //     deletePost(id);
        // }, 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds

        // return () => clearTimeout(timer);
    }, [id]);


    // function deletePost(id) {
    //     // Call an API or perform other logic to delete the post
    //     console.log(`Deleting post ${id}`);
    // }


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

    const backHomeButton = () => {
        history.push('/user');
        window.location.reload(true);
    };

    const goToEdit = (id) => {
        history.push(`/editAd/${id}`);
        window.location.reload(true);
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>
            <h1 className="title"> <u> Advisories </u> </h1>
            <div className="container">
                <form onSubmit={handleCreateAdvisory}>
                    <label htmlFor="advisory"> <h2> NEW ADVISORY </h2> </label>
                    <input id="advisory" type="text" value={newAdvisory} onChange={(event) => { setNewAdvisory(event.target.value) }} />
                    <br></br>
                    <button text="submit" className="buttons" > Create Advisory </button>
                </form>
            </div>

            <section>
                {Advisories.map(Ads => (
                    <div className="container" key={Ads.id}>
                        <h2>
                            <i> {Ads.advisory} </i>
                        </h2>
                        <button text="submit" className="buttons" onClick={() => goToEdit(Ads.id)}> Edit Advisory </button>
                        <h3>
                            {/* {adv} */}
                        </h3>
                        {/* <button text="submit" className="buttons" onClick={() => goToDelete()}> Delete Advisory </button> */}

                    </div>
                ))}
            </section>


            {/* <div className="container">
                <form onSubmit={handleEdit}>
                    <label htmlFor="advisory"> <h2> Edit Advisory </h2> </label>
                    <input id="advisory" type="text" value={newAdvisory} onChange={(event) => { setNewAdvisory(event.target.value) }} />
                    <br></br>
                    <button text="submit" className="buttons" > Edit Advisory </button>
                </form>
            </div> */}

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Back to Home Page </button>
                {/* <button text="submit" className="buttons" onClick={() => createAdButton()}> Create Safety Advisory </button> */}
            </div>
        </div>
    )
}

export default SafetyAdvisory;