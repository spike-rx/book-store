import { useRouteError } from 'react-router-dom'
import React from 'react'

export default function ErrorPage () {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
            <i>{error.message}</i>
        </p>
    </div>
  )
}
