import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signUp/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import ApplyForm from "../pages/home/apply/ApplyForm";
import MyApplications from "../pages/Applications/MyApplications";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyPostedJobs from "../pages/MyPostedJob/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";

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
                path: '/addJobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: '/viewApplications/:_id',
                loader: ({ params }) => fetch(`http://localhost:5000/applications/job/${params._id}`),
                element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>
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