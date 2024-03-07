import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";

function App() {

  // Sneakers State
  const [sneakers, setSneakers] = useState([])
  // Haus State
  const [hausSneakers, setHausSneakers] = useState([])


  // Home Display Request 
  useEffect(() => {
    fetch('http://localhost:3000/sneakers')
    .then(res => res.json())
    .then(sneakerData => setSneakers(sneakerData))
  }, [])


  // Haus Display Request
  useEffect(() => {
    fetch('http://localhost:3000/haus')
    .then(res => res.json())
    .then(hausData => setHausSneakers(hausData))
  }, [])

  

  // Add A Sneaker to Server Request
  function addSneaker(newSneaker) {
    fetch('http://localhost:3000/sneakers', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSneaker)
    })
    .then(res => res.json())
    .then(newSneakerData => setSneakers(sneaker => [...sneaker, newSneakerData]))
  }


  // Delete A Sneaker from Server Request
  function deleteSneaker(id) {
    fetch(`http://localhost:3000/sneakers/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok){
        setSneakers((sneakers) => sneakers.filter(sneaker => {
          return sneaker.id !== id
        }))
      } else {
        alert("Error: Unable To Delete Sneaker!")
      }
    })
  }

  // Add Sneaker to Haus Request
  function addToHaus(sneaker){
    fetch(`http://localhost:3000/haus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sneaker)
    })
    .then(res => res.json())
    .then(hausDetails => setHausSneakers(haus => [...haus, hausDetails]))
  }

  function deleteFromHaus(id) {
    fetch(`http://localhost:3000/haus/${id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        setHausSneakers((hausSneakers) => hausSneakers.filter(sneakers => {
          return sneakers.id !== id
        }))
      }else {
        alert("Error: Unable To Delete Sneaker!")
      }
    })
  }

  


  return (
    <div className="App">
      <Header />
      <Outlet context={
        {sneakers: sneakers, 
        addSneaker: addSneaker, 
        deleteSneaker: deleteSneaker, 
        hausSneakers: hausSneakers, 
        addToHaus: addToHaus, 
        deleteFromHaus: deleteFromHaus, 
        setSneakers: setSneakers}}
        />
    </div>
  );
}

export default App;
