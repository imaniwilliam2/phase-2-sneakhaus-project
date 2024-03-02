import App from "./components/App";
import Home from "./components/Home";
import SneakerDetails from "./components/SneakerDetails";

const routes = [
    {
        path:"/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path:"/add-sneak",
                element: <h1>Add A Sneaker Here</h1>
            },
            {
                path:"/my-haus",
                element: <h1>Collect Your Favorites Here</h1>
            },
            {
                path:"/sneaker/:id",
                element:<SneakerDetails/>
            }
        ]

    }
]


export default routes