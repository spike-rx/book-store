import { useSelector } from 'react-redux'
import { useState, useMemo } from 'react'

import React, { createTheme, ThemeProvider } from '@mui/material/styles'

import Square from './components/square/Square'

const getDesignTokens = (mode: any) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#fffbeb'
          },
          divider: '#fde68a',
          background: {
            default: '#fbbf24',
            paper: '#fbbf24'
          },
          text: {
            primary: '#000',
            secondary: '#27272a'
          }
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#dbf4ff'
          },
          divider: '#004282',
          background: {
            default: '#000e21',
            paper: '#000e21'
          },
          text: {
            primary: '#fff',
            secondary: '#71717a'
          }
        })
  }
})

function App () {
  const [mode, setMode] = useState('light')
  const darkMode: boolean = useSelector((state: any) => state.theme.darkMode)

  useMemo(() => {
    if (darkMode) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [darkMode])

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <ThemeProvider theme={theme}>
      <Square />
    </ThemeProvider>
  )
}

export default App
