import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserActionCreators } from 'actions'
import { UserSearchResults } from 'components'
import { container, search } from './styles.scss'
let debounceSearch = false

class UserSearch extends Component {

  constructor () {
    super()
    this.state = {
      results: [],
    }
  }

  handleUserSearch = (e) => {
    e.persist()

    if (debounceSearch !== false) clearTimeout(debounceSearch)

    debounceSearch = setTimeout(() => {
      if (e.target.value.length === 0) {
        return this.setState({
          ...this.state,
          results: [],
        })
      }

      this.props.searchUsers(e.target.value)
        .then(({ data }) => {
          this.setState({
            ...this.state,
            results: data.items,
          })
        })
        .catch((err) => console.error(err))
    }, 500)
  }

  render () {
    return (
      <div>
        <div className={container}>
          <input
            placeholder='Search Github Users and Organizations'
            onChange={this.handleUserSearch}
            className={search} />
        </div>
        <UserSearchResults results={this.state.results} />
      </div>
    )
  }
}

UserSearch.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({}),
  (dispatch) => (
    bindActionCreators(UserActionCreators, dispatch)
  )
  )(UserSearch)
