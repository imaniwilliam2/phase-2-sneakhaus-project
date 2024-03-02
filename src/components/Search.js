import React from "react";

function Search({search, updateSearch}) {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Sneakers:</label>
            <input
            type="text"
            id="search"
            placeholder="Type name to find sneaker..."
            value={search} 
            onChange={updateSearch}
            />
        </div>
    )
}

export default Search