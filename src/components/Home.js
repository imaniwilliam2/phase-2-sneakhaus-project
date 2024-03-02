import { useOutletContext } from "react-router-dom";
import Sneaker from "./Sneaker";
import { useState } from "react";
import Search from "./Search";

function Home(){
    
    const [search, setSearch] = useState("")

    

    const {sneakers} = useOutletContext()


    const filteredSneakers = sneakers.filter(sneaker => {
        if(search === "") return true
        return sneaker.name.toUpperCase().includes(search.toUpperCase())
    })

    function updateSearch(e) {
        setSearch(e.target.value)
    }


    return(
        <>
        <Search updateSearch={updateSearch} search={search}/>
        <ul>
            {filteredSneakers.map((sneaker) => (
                <li key={sneaker.id}><Sneaker sneaker={sneaker} /></li>
            ))}
        </ul>
        </>
    )
}

export default Home