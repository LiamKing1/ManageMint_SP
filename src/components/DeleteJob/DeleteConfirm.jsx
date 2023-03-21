import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function DeleteConfirmation() {

    const user = useSelector((store) => store.user);
    const history = useHistory();

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

            <h1 className="container"> Delete Request Successful </h1>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backHomeButton()}> Home Page </button>
                <button text="submit" className="buttons" onClick={() => createNew()}> Create New Job </button>
                <button text="submit" className="buttons" onClick={() => viewJobs()}> View Jobs </button>
            </div>
        </div>
    )
}

export default DeleteConfirmation;