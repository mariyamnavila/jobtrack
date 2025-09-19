import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/auth',
                element: <p>Auth</p>,
            },
            {
                path: '/blog',
                element: <p>blog</p>
            },
            {
                path: '/statistics',
                element: <p>statistics</p>
            },
        ]
    },
    {
        path: '*',
        element: <p>Error</p>
    },
])

export default router;