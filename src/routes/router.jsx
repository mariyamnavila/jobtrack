import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import HomeLayout from "../Layouts/HomeLayout";
import CompanyJobList from "../Pages/CompanyJobList";
import Loading from "../Components/Loading";
import AppliedJobs from "../Pages/AppliedJobs";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import ProfilePage from "../Pages/ProfilePage";
import UpdateProfile from "../Pages/UpdateProfile";
import BlogLayout from "../Layouts/BlogLayout";
import BlogPage from "../Pages/BlogPage";


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
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/company/:id',
                element: <CompanyJobList></CompanyJobList>,
                loader: () => fetch('/jobList.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/statistics',
                element: <p>statistics</p>
            },
            {
                path: '/appliedJobs',
                element: <PrivateRoute>
                    <AppliedJobs></AppliedJobs>
                </PrivateRoute>,
                loader: () => fetch('/jobList.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <ProfilePage></ProfilePage>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/updateProfile',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/blog',
        element: <BlogLayout></BlogLayout>,
        children: [
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            },
        ]
    },
    {
        path: '*',
        element: <p>Error</p>
    },
])

export default router;