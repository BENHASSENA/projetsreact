import React, { useState, useEffect } from 'react'
import './App.scss';
import Tours from './components/Tours';


const url = 'https://course-api.com/react-tours-project'

function App() {

  // declaration use state pour l'array tours
  const [tours, setTours] = useState([])

  // declaration  de la fonction fecth tous qui permet de récupérer les données depuis l'api
  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours);
    } catch (error) {
      console.log(error)
    }   
  }
  useEffect(() =>{
    fetchTours()
  },[])

  // affichage de l'appli
  if(tours.length === 0) {
    return (
      <div className="App">
      <div className="container">
      <h2>There are no tours left, </h2>
      <button onClick={()=>fetchTours()}>Refresh</button>
      </div>
      </div>
    )
  }else{
    return (
      <div className="App">
      <div className="container">
      <Tours tours={tours}/>
      </div>
    </div>
    )
  }
}
export default App;

















