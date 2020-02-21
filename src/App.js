import React, { useState, useEffect } from "react";
import axios from "axios";
import Component from "./Components/Component";
import "./App.css";


function App() {


  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }, []);


  return (
    <div className="App">
      <h1>
        Astronomy Picture of the Day
      </h1>
      <Component 
      img={data.hdurl}
      title={data.title}
      description={data.explanation}
      date={data.date} 
      /> 
    </div>
  );
}

export default App;
