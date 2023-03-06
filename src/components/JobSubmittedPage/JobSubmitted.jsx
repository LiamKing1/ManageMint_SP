import { useHistory } from "react-router-dom"

function SubmitPage() {

    const history = useHistory();

    const viewJobs = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    return (
        <div>
            <div className="back-btns">
                <h1> Congratulations, job has been created  </h1>
                <button text="submit" className="view_jobs" onClick={() => viewJobs()}> View Jobs </button>
            </div>
        </div>
    )
};

export default SubmitPage;