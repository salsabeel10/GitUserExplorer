import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Oops... Page Not Found</h1>
        <Link to={'/'}>Go To Home</Link>
    </div>
  )
}

export default NotFound