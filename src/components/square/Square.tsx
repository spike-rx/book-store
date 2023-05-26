import { useSelector, useDispatch } from 'react-redux'
import { Typography, Box, IconButton } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { toggleTheme } from '../../store/reducers/themeSlice'

export default function Square () {
  const dispatch = useDispatch()
  const darkMode: boolean = useSelector((state: any) => state.theme.darkMode)

  const theme = useTheme()

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '300px',
          height: '300px',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          p: 3
        }}
      >
        <Typography>{darkMode ? 'Dark' : 'Light'} Mode</Typography>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => dispatch(toggleTheme())}
          color='inherit'
        >
          { theme.palette.mode === 'dark'
            ? (
              <Brightness7Icon />
              )
            : (
              <Brightness4Icon />
              )}
        </IconButton>
      </Box>
    </>
  )
}
