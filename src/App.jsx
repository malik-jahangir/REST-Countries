import './assets/style/style.css'
import Header from './components/Header'
function App() {

  return (
    <>
    <Header/>
    <section>
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
        <div className="countries-container">
            <div className="country">
                <div className="flag"></div>
                <div className="discription">
                    <h2></h2>
                    <div className="dis">
                        <p>Population:<span className="light-text"></span></p>
                        <p>Region:<span className="light-text"></span></p>
                        <p>Capital:<span className="light-text"></span></p>
                    </div>
                </div>
            </div>
            

        </div>
    </section>
    </>
  )
}

export default App
