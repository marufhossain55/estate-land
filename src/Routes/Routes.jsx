import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import ErrorElementPage from '../layouts/ErrorElementPage';
import Home from '../components/Home';
import UpdateProfile from '../components/UpdateProfile';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';
import Register from '../components/Register';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorElementPage></ErrorElementPage>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/updateprofile', element: <UpdateProfile></UpdateProfile> },
      { path: '/userprofile', element: <UserProfile></UserProfile> },
      { path: '/login', element: <Login></Login> },
      { path: '/Register', element: <Register></Register> },
    ],
  },
]);
