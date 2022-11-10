import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Details from "../../Pages/Details/Details";
import AllServices from "../../Pages/Home/AllServices/AllServices";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/allservices',
                element: <AllServices></AllServices>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://service-review-server-side-orcin.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',

                // loader: () => fetch('https://service-review-server-side-orcin.vercel.app/services'),
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
        ]

    }
]);
export default router;
