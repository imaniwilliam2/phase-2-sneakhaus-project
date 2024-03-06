import { useOutletContext } from "react-router-dom";

function Haus() {

    const { hausSneakers, deleteFromHaus } = useOutletContext()

    // Handles Delete from Haus Dom
    function handleDelete(id){
        deleteFromHaus(id)
    }

    return(
        <>
        <div className="haus-container">
            <ul className="haus-list">
                {hausSneakers.map((sneaker) => (
                    <li className="haus-sneakers" key={sneaker.id}>
                        <img className="haus-img" src={sneaker.image} alt={sneaker.name}/>
                        <h1>{sneaker.name}</h1>
                        <button className="remove-button" onClick={() => handleDelete(sneaker.id)}>Remove From My Haus</button>
                    </li>
                ))}
            </ul>
        </div>
        <footer>
           <p>Copyright &#169; 2024 Sneaker Haus. All Rights Reserved.</p>
        </footer>
       </>
    )
}

export default Haus