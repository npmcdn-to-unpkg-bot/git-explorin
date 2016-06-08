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
          }, (idx * 20) + 150)

          return (
            <li id={user.login} className={item} key={user.login}>
              <Link to={`/${user.login}`} >
                <p>{user.login}</p>
                <img alt={user.login} src={user.avatar_url}/>
              </Link>
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
