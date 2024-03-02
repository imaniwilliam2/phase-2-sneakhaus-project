import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {

  const [sneakers, setSneakers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/sneakers')
    .then(res => res.json())
    .then(sneakerData => setSneakers(sneakerData))
  }, [])




  return (
    <div className="App">
      <Header />
      <NavBar />
      <Outlet context={{sneakers: sneakers}}/>
      
    </div>
  );
}

export default App;
