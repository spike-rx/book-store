import { useMemo } from 'react'
import React, { createTheme, ThemeProvider } from '@mui/material/styles'
import { themeSettings } from './theme'
import {useAppSelector} from './store/storeHooks';
import Header from './components/Header';
import {router} from './router/router';
import {RouterProvider} from "react-router-dom"
import './App.css'
function App () {
    const mode = useAppSelector(state => state.theme.mode)

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return (
        <div className='App'>
            <ThemeProvider theme={theme}>
                <Header/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </div>
    )
}

export default App
