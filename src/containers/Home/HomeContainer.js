import React, { PropTypes } from 'react'
import { UserSearch, UserSearchResults } from 'components'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { container, header, headerTitle, hero, heroTitle, section } from './styles.scss'

function HomeContainer (props) {
  return (
    <div className={container}>
      <div className={header}>
        <Link to='/' className={headerTitle}>{'GitExplorin\''}</Link>
        <UserSearch query={props.location.query.q}/>
      </div>
      <div>
        {
          (props.users.length > 0 || props.location.query.q !== undefined)
          ? (
              <UserSearchResults results={props.users} />
            )
          : (
            <div>
              <div className={hero}>
                <h1 className={heroTitle}>A familiar way to explore Github repositories.</h1>
              </div>
              <div className={section}>
                <div style={{ maxWidth:'600px', width: '100%'}}>
                  <img style={{width:'100%'}} src='../../assets/images/editor_screenshot.png' />
                </div>
              </div>
            </div>
            )
        }
      </div>
    </div>
  )
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({ users: state.Users.users })
)(HomeContainer)
