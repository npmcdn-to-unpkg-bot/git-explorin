import React, { PropTypes } from 'react'
import { list, item, username, avatar, fadeIn } from './styles.scss'
import { Link } from 'react-router'

function UserSearchResults (props) {
  return (
    <div className={list}>
      {
        props.results.map((user, idx) => {
          setTimeout(() => {
            let el = document.getElementById(user.login)
            if (el === null) return
            el.className = `${item} ${fadeIn}`
          }, (idx * 50) + 200)
          return (
            <Link
              to={`/${user.login}`}
              id={user.login}
              key={user.login}
              className={item}>
              <img
                alt={user.login}
                src={user.avatar_url}
                className={avatar} />
              <div className={username}>{user.login}</div>
            </Link>
          )
        })
      }
    </div>
  )
}

UserSearchResults.propTypes = {
  results: PropTypes.array.isRequired,

}

export default UserSearchResults
