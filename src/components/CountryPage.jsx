import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
export default function (props) {
  const { id } = useParams();
  let country;
  props.countries &&
    props.countries.forEach((element) => {
      element.name.common == id && (country = element);
    });

  return (

    <div className="country-page">
        <BackButton/>
      {country && (
        <div className="inner-country-page">

        

          <div className="country-page-flag">
            <img
              loading="lazy"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
          </div>
          <div className="country-page-details">
            <h1>{country.name.common}</h1>
            <div className="inner-country-details">

            
            <div className="col1">
              <p>
                <span className="bold">Native Name: </span>
                {country.name.common}
              </p>
              <p>
                <span className="bold">Population: </span>
                {country.population}
              </p>
              <p>
                <span className="bold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="bold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="bold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="col2">
              <p>
                <span className="bold">Top Level Domain: </span>
                {country.tld[0]}
              </p>
              <p>
                <span className="bold">Currencies: </span>
                {Object.values(country.currencies)[0].name}
              </p>
              <p>
                <span className="bold">Languages: </span>
                {Object.values(country.languages)[0]}
              </p>
            </div>
            </div>
          </div>
          </div>
      )}
    </div>
  );
}
