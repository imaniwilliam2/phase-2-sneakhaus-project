import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function SneakerForm() {

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        size: "",
        year: "",
        image: ""

    })

    const {addSneaker} = useOutletContext()
    const navigate = useNavigate()


    // Handles Submit Button
    function handleSubmit(e) {
        e.preventDefault()

        addSneaker(formData)

        setFormData("")

        navigate("/")
    }


    // Control/Update Form Input
    function updateFormData(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return(
        <div className="form">
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Sneaker name..." onChange={updateFormData} required/>
            <br/>
            <input type="text" name="price" placeholder="Price..." onChange={updateFormData} required/>
            <br/>
            <input type="text" name="size" placeholder="Size..." onChange={updateFormData} required/>
            <br/>
            <input type="text" name="year" placeholder="Year Released..." onChange={updateFormData} required/>
            <br/>
            <input type="text" name="image" placeholder="Image..." onChange={updateFormData} required/>
            <br/>
            <button className="form-button"type="submit">Add To Haus</button>
        </form>
        <footer>
           <p>Copyright &#169; 2024 Sneaker Haus. All Rights Reserved.</p>
        </footer>
        </div>
    )

}

export default SneakerForm