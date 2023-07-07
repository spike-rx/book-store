import { useMemo } from 'react'
import React, { createTheme, ThemeProvider } from '@mui/material/styles'
import { themeSettings } from './theme'
import {useAppSelector} from './store/storeHooks';

function App () {
    const mode = useAppSelector(state => state.theme.mode)

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return (
        <>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </>
    )
}

export default App
