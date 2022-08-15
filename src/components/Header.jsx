import moonRegular from '../assets/img/moon-regular.svg' 
export default function Header(){
    return(
        <header>
        <div className="heading"><h1>Where in the world?</h1></div>
        <div className="darkmode"><img src={moonRegular} alt="moon"/> 
            <p>Dark Mode</p>
        </div>
    </header>
    )
}