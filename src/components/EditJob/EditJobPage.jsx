import { useHistory } from "react-router-dom";

function EditJob() {

    const history = useHistory();

    const cancelEdit = () => {
        history.push('/viewjobs')
    };

    const submitEdit = () => {
        console.log('More code needed to submit user/s edit');
    };

    return (
        <div>
            <h1> This is where user edits </h1>

            <button text="submit" className="submit_edits" onClick={() => submitEdit()}> Submit Edit </button>
            <button text="submit" className="no_go_back" onClick={() => cancelEdit()}> Cancel Edit </button>
        </div>
    )
};

export default EditJob;