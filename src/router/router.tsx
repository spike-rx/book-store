import { createBrowserRouter } from 'react-router-dom'
import Home from '../features/Home';
import Login from '../features/Login';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    }
])
