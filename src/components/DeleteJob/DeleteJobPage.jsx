import { useHistory } from "react-router-dom";


function DeleteJob() {

    const history = useHistory();
    const user = useSelector((store) => store.user);

    const yesDelete = () => {
        console.log('More code needed to complete users Deletion');
        window.location.reload(true);
    };
    
    const noGoBack = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    return (
        <div>
            <h2>User, {user.username}!</h2>
            <p>Your ID is: {user.id}</p>
            <h1 className="title"> Current Job </h1>

            <h1> Are you sure you want to delete this job?</h1>

            <button text="submit" className="yes_delete" onClick={() => yesDelete()}> Yes Delete </button>
            <button text="submit" className="no_go_back" onClick={() => noGoBack()}> No Go Back </button>

        </div>
    )
}

export default DeleteJob;