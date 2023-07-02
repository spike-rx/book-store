import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import React, { createTheme, ThemeProvider } from '@mui/material/styles'
import Square from './components/square/Square'
import Header from './components/Header'
import { themeSettings } from './theme'

function App () {
    const mode = useSelector((state: any) => state.theme.mode)

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <Square />
            </ThemeProvider>
        </>
    )
}

export default App
