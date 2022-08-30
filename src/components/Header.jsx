import moonRegular from '../assets/img/moon-regular.svg' 
import moonSolid from '../assets/img/moon-solid.svg' 
export default function Header(){
    let darkmode = false;
    return(
        <header>
        <div className="heading"><h1>Where in the world?</h1></div>
        <div onClick={()=>{
            darkmode = !darkmode
            console.log(darkmode)
        }} 
        className="darkmode"><img src={darkmode?moonSolid:moonRegular} alt="moon"/> 
            <p>Dark Mode</p>
        </div>
    </header>
    )
}