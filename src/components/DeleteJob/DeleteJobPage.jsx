import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


function DeleteJob() {

    const history = useHistory();
    const user = useSelector((store) => store.user);
    const deleteJobById = useSelector((store) => store.deleteJobReducer);
    const jobs = useSelector((store) => store.viewJobsReducer);
    const dispatch = useDispatch();
    const {id} = useParams;

    const yesDelete = () => {
        dispatch({
            type: 'DELETE_A_JOB',
            payload: jobs.id,
        });
        console.log('aiucbsudhc jkdbciusjndc', jobs.id)
        history.push('/deleteconfirmation');
    };

    const noGoBack = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="container"> Are You sure You want to delete this job? </h1>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => yesDelete()}> Yes Delete </button>
                <button text="submit" className="buttons" onClick={() => noGoBack()}> No Go Back </button>
            </div>
        </div>
    )
}

export default DeleteJob;