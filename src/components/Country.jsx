
export default function(props){
    
        
    return(
        <div className="country">
            <div className="flag">
                <img loading="lazy" src={props.flags.png} alt={`${props.name} flag`} />
            </div>
            <div className="description">
                <h2>{props.name}</h2>
                <div className="dis">
                <p>Population: <span className="light-text">{props.population}</span></p>
                    <p>Region: <span className="light-text">{props.region}</span></p>
                    <p>Capital: <span className="light-text">{props.capital}</span></p>               
                </div>
            </div>
        </div> 
    )
}