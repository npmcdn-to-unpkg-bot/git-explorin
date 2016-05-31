import React, { PropTypes } from 'react'
import { list, item, fadeIn } from './styles.scss'
import { Link } from 'react-router'

const UserSearchResults = (props) => {
  return (
    <ul className={list}>
      {
        props.results.map((user, idx) => {
          setTimeout(() => {
            let el = document.getElementById(user.login)
            if (el === null) return
            else el.className = fadeIn
          }, (idx * 20) + 200)

          return (
            <li id={user.login} key={user.login} className={item}>
              <img alt={user.login} src={user.avatar_url}/>
              <p>{user.login}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

UserSearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

export default UserSearchResults
