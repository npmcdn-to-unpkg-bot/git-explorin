import React from 'react'
import { list, item, username, avatar, fadeIn } from './styles.scss'
import { Link } from 'react-router'

function UserSearchResults ({ results }) {
  let animations = []
  return (
    <div className={list}>
      {
        results.map((user, idx) => {
          setTimeout(() => {
            let el = document.getElementById(user.login)
            if (el === null) return
            el.className = `${item} ${fadeIn}`
          }, (idx * 50) + 200)
          return (
            <Link to={`/${user.login}`} id={user.login} key={user.login} className={item}>
              <img src={user.avatar_url} className={avatar}/>
              <div className={username}>{user.login}</div>
            </Link>
          )  
        })
      }
    </div>
  )
}

export default UserSearchResults