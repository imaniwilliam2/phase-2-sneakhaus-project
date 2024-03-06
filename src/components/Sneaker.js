import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Sneaker({ sneakers, sneaker, deleteSneaker, addToHaus, setSneakers}) {

    // Like Button State
    const [isHeartClicked, setIsHeartClicked] = useState(sneaker.liked)

    const navigate = useNavigate()


    // Handles Like Button
    function toggleHeart() {
        console.log(sneaker)

        fetch(`http://localhost:3000/sneakers/${sneaker.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 
                liked: !isHeartClicked }) 
        })
        .then(res => res.json())
        .then(data => {
            setSneakers(sneakers, data);
        })

        setIsHeartClicked(!isHeartClicked)
    }
    
    

    // Handles Delete
    function handleBuyButton(){
        deleteSneaker(sneaker.id)
    }

    // Handles Add to Haus
    function handleAddToHaus() {
        addToHaus(sneaker)
        navigate('/my-haus')
    }
  

    // Like Button
    const likeButton = isHeartClicked ? <button className="like-button" onClick={toggleHeart}>❤️</button> : <button className="like-button" onClick={toggleHeart}>♡</button> ;

    return(
        <article className="sneakers">
            <img className="sneaker-img" src={sneaker.image} alt={sneaker.name}/>
            <h4>{sneaker.name}</h4>
            <div className="sneaker-buttons">
            {likeButton}
            <Link className="details-link" to={`/sneaker/${sneaker.id}`}>View Details</Link>
            <button className="add-button" onClick={handleAddToHaus}>Add To My Haus</button> <button className="buy-button" onClick={handleBuyButton}>Buy Sneaker</button>
            </div>
        </article>
    )
}

export default Sneaker