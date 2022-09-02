import React from 'react';
import './assets/style/style.css'
import Header from './components/Header'
import TopBar from './components/TopBar'
import CountriesContainer from './components/CountriesContainer'
import Country from './components/Country'
import data from './data.js';
export default function App() {
  let country =[]
data.map((i)=>{
  country.push(<Country 
  key = {data.indexOf(i)}  
  flags= {i.flags}
  name = {i.name.common}
  population = {i.population}
  region = {i.region}
  capital = {i.capital} 
  />)
})
// console.log(country)
const [darkMode, setDarkMode] = React.useState(true)

const toggleDarkMode = ()=>{
  setDarkMode((prev)=>!prev)
  document.body.classList.toggle('darkmode')
}




 
// let card;
//  async function countries() {
//  let res = await data();
// //  console.log(res[48])
//   res.map((i)=>{
//     country.push(`<Country name = {i.name.official} />`)   
//   })
//   // console.log(country)
//   return country;
// }
// countries();


  return (
    <>
    <Header darkMode ={darkMode} toggleDarkMode={toggleDarkMode} />
    <TopBar/>
    <CountriesContainer country ={country} />
       
    </>
  )
}
