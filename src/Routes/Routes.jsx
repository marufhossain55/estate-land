import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import ErrorElementPage from '../layouts/ErrorElementPage';
import Home from '../components/Home';
import UpdateProfile from '../components/UpdateProfile';
import UserProfile from '../components/UserProfile';
import Login from '../components/Login';
import Register from '../components/Register';
import LandDetails from '../components/LandDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorElementPage></ErrorElementPage>,
    children: [
      { path: '/', element: <Home></Home>, loader: () => fetch('/lands.json') },
      {
        path: '/land/:id',
        element: (
          <PrivateRoute>
            <LandDetails></LandDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/lands.json'),
      },
      {
        path: '/updateprofile',
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: '/userprofile',
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      { path: '/login', element: <Login></Login> },
      { path: '/Register', element: <Register></Register> },
    ],
  },
]);
