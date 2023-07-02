import React from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'
import Home from './Home'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import styled from 'styled-components'

const ButtonStyle = styled.button`
  background-color: gray;
`

export default function Navbar () {
    return (
        <Stack spacing={2} direction={'row'}>
            <ButtonStyle>
                <Button
                    variant="text"
                    href="/"
                >
                    <Home/>Home
                </Button>
            </ButtonStyle>

            <ButtonStyle>
                <Button
                    variant="text"
                    href="/signin"
                >
                    <SignIn/>Sign in
                </Button>
            </ButtonStyle>

            <ButtonStyle>
                <Button
                    variant="text"
                    href="/signup"
                >
                    <SignUp/>Sign up
                </Button>
            </ButtonStyle>
        </Stack>
    )
}
