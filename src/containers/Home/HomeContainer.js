import React, { Component, PropTypes } from 'react'
import { GithubSearch, GithubSearchResults, HomeHero } from 'components'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { UserActionCreators } from 'actions'
import { container, header, title, main, footer } from './styles.scss'

class HomeContainer extends Component {

  handleQuery = (query) => {
    this.props.searchUsers(query)
  }

  render () {
    return (
      <div className={container}>
        <div className={header}>
          <Link to='/' className={title}>{'GitExplorin\''}</Link>
          <GithubSearch handleQuery={this.handleQuery} query={this.props.location.query.q} />
        </div>
        <div className={main}>
          {
            this.props.location.query.q !== undefined
            ? <GithubSearchResults query={this.props.location.query.q} results={this.props.users} />
            : <HomeHero />
          }
        </div>
        <div className={footer}></div>
      </div>
    )
  }
}

HomeContainer.contextTypes = {
  router: PropTypes.object.isRequired,
}

HomeContainer.propTypes = {
  location: PropTypes.object,
  users: PropTypes.array,
  searchUsers: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({ users: state.Users.users }),
  (dispatch) => (bindActionCreators(UserActionCreators, dispatch))
)(HomeContainer)
