import { useNavigate } from "react-router-dom";
export default function(){
    const navigate = useNavigate();
    const goBack = function(){
        navigate("/");
    }
    return(
        <button onClick={goBack} className="back-button">
           Back
        </button>
    )
}