import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {store} from './store/store'
import {Provider} from 'react-redux'
import {router} from './router/router';
import {RouterProvider} from "react-router-dom"

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)
