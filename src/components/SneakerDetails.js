import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SneakerDetails() {
    // Sneaker Details State
    const [sneakerDets, setSneakerDets]= useState({})
    const params = useParams()
    const sneakerId = params.id

    // Get Request for Sneaker Details
    useEffect(() => {
        fetch(`http://localhost:3000/sneakers/${sneakerId}`)
        .then(res => res.json())
        .then(details =>
            setSneakerDets(details))
    }, [sneakerId])


    
    return (
        <>
        <main className="details">
            <img className="details-img" src={sneakerDets.image} alt={sneakerDets.name}/>
            <h1>{sneakerDets.name} </h1>
            <h2>Size: {sneakerDets.size}</h2>
            <h2>Price: {sneakerDets.price} US</h2>
            <h2>Year Released: {sneakerDets.year}</h2>
        </main>
        <footer>
           <p>Copyright &#169; 2024 Sneaker Haus. All Rights Reserved.</p>
        </footer>
        </>
    )

}

export default SneakerDetails
