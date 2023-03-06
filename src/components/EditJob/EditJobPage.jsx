import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function EditJob() {

    const history = useHistory();
    const user = useSelector((store) => store.user);

    const cancelEdit = () => {
        history.push('/viewjobs')
    };

    const submitEdit = () => {
        console.log('More code needed to submit user/s edit');
    };

    return (
        <div>
            <div className="greeting" >
                <h2>User, {user.username}!</h2>
                <p>Your ID is: {user.id}</p>
            </div>

            <h1 className="title"> Current Job </h1>

            <h1> This is where user edits </h1>
            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => submitEdit()}> Submit Edit </button>
                <button text="submit" className="buttons" onClick={() => cancelEdit()}> Cancel Edit </button>
            </div>
        </div>
    )
};

export default EditJob;