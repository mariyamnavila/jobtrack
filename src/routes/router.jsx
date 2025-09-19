import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <HomeLayout/>,
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
        path: '/auth',
        element: <p>Auth</p>,
    },
    {
        path: '*',
        element: <p>Error</p>
    },
])

export default router;