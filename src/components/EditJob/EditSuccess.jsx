import { useHistory } from "react-router-dom";

function EditSuccess() {

    const history = useHistory();

    const backButton = () => {
        history.push('/viewjobs');
        window.location.reload(true);
    };

    return (
        <div>
            <h1 className="container"> You have successfully updated Job information </h1>

            <div className="back-btns">
                <button text="submit" className="buttons" onClick={() => backButton()}> View All Jobs </button>

            </div>
        </div>
    )
}

export default EditSuccess;