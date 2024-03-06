import App from "./components/App";
import Home from "./components/Home";
import SneakerDetails from "./components/SneakerDetails";
import SneakerForm from "./components/SneakerForm";
import Haus from "./components/Haus"
import ErrorPage from "./components/ErrorPage"

const routes = [
    {
        path:"/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />

            },
            {
                path:"/add-sneak",
                element: <SneakerForm />
            },
            {
                path:"/my-haus",
                element: <Haus />
            },
            {
                path:"/sneaker/:id",
                element:<SneakerDetails/>
            }
        ]

    }
]


export default routes