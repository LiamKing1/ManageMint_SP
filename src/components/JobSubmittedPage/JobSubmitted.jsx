import { useHistory } from "react-router-dom"

function SubmitPage() {

    const history = useHistory();

    const viewJobs = () => {
        history.push('/viewjobs');
    }

    return (
        <div>

            <h1> Congratulations, job has been created  </h1>
            <button text="submit" className="view_jobs" onClick={() => viewJobs()}> View Jobs </button>

        </div>
    )
};

export default SubmitPage;