import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";


async function mainLoader() {
    const [reviews, jobList, categories] = await Promise.all([
        fetch("/review.json").then(r => r.json()),
        fetch("/jobList.json").then(r => r.json()),
        fetch("/availableJobCategory.json").then(r => r.json())
    ]);

    return { reviews, jobList, categories };
}


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                loader: mainLoader,
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