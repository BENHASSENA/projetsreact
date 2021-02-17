import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.scss';
import Tours from './components/Tours';



const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setTours(tours);
      console.log(tours)
      
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="App">
      <div className="container">
        <h1>Hello</h1>
        <button onClick={() => fetchTours()}> fetch it !</button>
       <Tours tours={tours}/>
      </div>
    </div>
  );
}

export default App;
