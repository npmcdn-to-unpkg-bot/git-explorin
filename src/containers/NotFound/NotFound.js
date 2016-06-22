import React from 'react'
import { container, button } from './style.scss'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className={container}>
      <Link to='/' className={button} />
    </div>
  )
}

export default NotFound
