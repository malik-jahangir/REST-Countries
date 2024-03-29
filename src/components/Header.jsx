import moonRegular from '../assets/img/moon-regular.svg' 
import moonSolid from '../assets/img/moon-solid.svg'
export default function Header(comp){
    return(
        <header>
        <div
         className="heading"><h1>Where in the world?</h1></div>
        <div onClick={comp.toggleDarkMode} className="btn-darkmode"><img src={comp.darkMode?moonSolid:moonRegular} alt="moon"/> 
            <p>Dark Mode</p>
        </div>
    </header>
    )
}