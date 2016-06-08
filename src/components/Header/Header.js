import React from 'react'
import { header, avatar, basic, name } from './styles.scss'

function Header (props) {
  return (
    <div className={header}>

      <div className={basic}>
        <p className={name}>{props.name || ''}</p>
        <p>{props.loading ? '' : `@${props.login}` }</p>
      </div>
    </div>
  )
}

export default Header