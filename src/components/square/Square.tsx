import { useDispatch } from 'react-redux'
import { IconButton } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { setMode } from '../../store/reducers/themeSlice'

export default function Square () {
    const dispatch = useDispatch()

    const theme = useTheme()

    return (
        <>
            <IconButton
                onClick={() => {
                    dispatch(setMode())
                }}
                sx={{ ml: 1 }}
                color='inherit'>
                {theme.palette.mode === 'dark'
                    ? (
                        <Brightness7Icon/>
                    )
                    : (
                        <Brightness4Icon/>
                    )}
            </IconButton>
        </>
    )
}
