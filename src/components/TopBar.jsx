export default function TopBar(){
    return(
        <div className="top-bar">
            <div className="search">
                <input type="text" name="" id="" placeholder="Search For a Country" />
            </div>
            <div className="filter">
                <select name="filter" id="cars">
                    <option value="region">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                  </select>
            </div>
        </div>
    )
}