import { Link } from "react-router-dom"

function Sneaker({sneaker}) {
    return(
        <article>
            <img src={sneaker.image} alt={sneaker.name}/>
            <h4>{sneaker.name}</h4>
            <Link to={`/sneaker/${sneaker.id}`}>View Details</Link>
        </article>
    )
}

export default Sneaker