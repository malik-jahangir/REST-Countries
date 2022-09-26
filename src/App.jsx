import React from "react";
import "./assets/style/style.css";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import CountriesContainer from "./components/CountriesContainer";
import Country from "./components/Country";
import CountryPage from "./components/CountryPage"
import { Route, Routes } from "react-router-dom";
// import data from "./data.js";
export default function App() {
  ///render country
  const [allCountryData, setAllCountryData] = React.useState();
  const [allCountry, setAllCountry] = React.useState([]);
  const [country, setCountry] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      // console.log('async function')
      // console.log(data)
      setAllCountryData(()=>data)
      const allCountriesData = data.map((i) => (<Country
        key={data.indexOf(i)}
        flags={i.flags}
        name={i.name.common}
        population={i.population}
        region={i.region}
        capital={i.capital}
      />
    ))
      setAllCountry(() => allCountriesData)
      setCountry(()=>allCountriesData)
        
    }
    fetchData();
  }, []);


  ///////////

  /////darkmode
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("darkmode");
  };
  /////////

  //////////filter
  const options = [
    { value: "all", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  // console.log(country)
  const [filterValue, setFilterValue] = React.useState(options[0]);
  const handelChange = function (selectedOption) {
    setFilterValue(() => selectedOption);
    setCountry(() => {
      if (selectedOption.value == "all") {
        return allCountry;
      } else {
        let newCountry = [];
        allCountry.forEach((i) => {
          i.props.region === selectedOption.value && newCountry.push(i);
        });
        return newCountry;
      }
    });
  };
  //////////////
  ////////country search
  const [search, setSearch] = React.useState("");
  const handelSearch = function (e) {
    setSearch(() => e.target.value);
    setCountry(() => {
      const searchedCountry = [];
      // console.log(e.target.value)
      if (filterValue.value == options[0].value) {
        allCountry.forEach((n) => {
          n.props.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
            searchedCountry.push(n);
        });
      } else {
        allCountry.forEach((n) => {
          if (
            n.props.name.toLowerCase().includes(e.target.value) &&
            n.props.region == filterValue.value
          ) {
            searchedCountry.push(n);
          }
        });
      }

      // console.log(searchedCountry)
      return searchedCountry;
    });
  };

  return (
    <>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    <Routes>  
      <Route path="/" element={
        <>
            <TopBar
            search={search}
            handelSearch={handelSearch}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
            handelChange={handelChange}
            options={options}
            darkMode={darkMode}
          />
          <CountriesContainer country={country} />
          </>
      }/>

      <Route path="/:id" element={
        <CountryPage countries={allCountryData} />
        } />


      </Routes>
    </>
  );
}
