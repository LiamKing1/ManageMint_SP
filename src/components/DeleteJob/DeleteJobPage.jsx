import { useHistory } from "react-router-dom";


function DeleteJob() {

    const history = useHistory();

    const yesDelete = () => {
        console.log('More code needed to complete users Deletion')
    };
    
    const noGoBack = () => {
        history.push('/viewjobs');
    };

    return (
        <div>
            <h1> Are you sure you want to delete this job?</h1>

            <button text="submit" className="yes_delete" onClick={() => yesDelete()}> Yes Delete </button>
            <button text="submit" className="no_go_back" onClick={() => noGoBack()}> No Go Back </button>

        </div>
    )
}

export default DeleteJob;