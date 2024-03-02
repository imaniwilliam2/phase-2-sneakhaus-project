import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-sneak">Add A Sneaker</NavLink>
            <NavLink to="/my-haus">My Haus</NavLink>
        </nav>
    )
}

export default NavBar