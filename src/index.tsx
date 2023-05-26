import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './store/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './error-page'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
