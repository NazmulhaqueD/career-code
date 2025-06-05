import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signUp/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import ApplyForm from "../pages/home/apply/ApplyForm";
import MyApplications from "../pages/Applications/MyApplications";

const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/jobDetails/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
                hydrateFallbackElement: <p>loading........</p>,
                element: <JobDetails></JobDetails>
            },
            {
                path: '/apply/:id',
                element: <PrivateRoute><ApplyForm></ApplyForm></PrivateRoute>
            },
            {
                path: '/myApplications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/signIn',
                Component: SignIn,
            }
        ]
    }
])

export default router;