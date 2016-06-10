import React, { PropTypes } from 'react'
import { list, item, fadeIn } from './styles.scss'
import { Link } from 'react-router'

const GithubSearchResults = (props) => {
  return (
    <ul className={list}>
      {
        props.results.map((result, idx) => {
          setTimeout(() => {
            let el = document.getElementById(result.login)
            if (el === null) return
            else el.className = fadeIn
          }, (idx * 20) + 150)

          return (
            <li id={result.login} className={item} key={result.login}>
              <Link to={`/${result.login}`} >
                <p>{result.login}</p>
                <img alt={result.login} src={result.avatar_url}/>
              </Link>
            </li>
          )
        })
      }
    </ul>
  )
}

GithubSearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

export default GithubSearchResults
