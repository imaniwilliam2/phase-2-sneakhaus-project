import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SneakerDetails() {
    const [sneakerDets, setSneakerDets]= useState({})
    const params = useParams()
    const sneakerId = params.id

    useEffect(() => {
        fetch(`http://localhost:3000/sneakers/${sneakerId}`)
        .then(res => res.json())
        .then(details =>
            setSneakerDets(details))
    }, [sneakerId])


    return (
        <main>
            <img src={sneakerDets.image} alt={sneakerDets.name}/>
            <h1>{sneakerDets.name} </h1>
            <h2>Size: {sneakerDets.size}</h2>
            <h2>Price: {sneakerDets.price} US</h2>
            <h2>Year Released: {sneakerDets.year}</h2>
        </main>
    )

}

export default SneakerDetails
