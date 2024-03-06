import { useOutletContext } from "react-router-dom";
import Sneaker from "./Sneaker";
import { useState } from "react";
import Search from "./Search";

function Home(){
    
    // Search State
    const [search, setSearch] = useState("")

    const {sneakers, deleteSneaker, addToHaus, setSneakers} = useOutletContext()


    // Filter Function 
    const filteredSneakers = sneakers.filter(sneaker => {
        if(search === "") return true
        return sneaker.name.toUpperCase().includes(search.toUpperCase())
    })

    // Control/Update Search Input Function
    function updateSearch(e) {
        setSearch(e.target.value)
    }





    return(
        <div className="sneakers-container">
        <Search updateSearch={updateSearch} search={search}/>
        <ul className="sneakers-list">
            {/* List of Sneakers */}
            {filteredSneakers.map((sneaker) => (
                <li key={sneaker.id}><Sneaker sneakers={sneakers} sneaker={sneaker} deleteSneaker={deleteSneaker} addToHaus={addToHaus} setSneakers={setSneakers}/></li>
            ))}
        </ul>
        <footer>
           <p>Copyright &#169; 2024 Sneaker Haus. All Rights Reserved.</p>
        </footer>
        </div>
    )
}

export default Home