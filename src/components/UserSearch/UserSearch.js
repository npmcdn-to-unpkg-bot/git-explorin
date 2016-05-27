import React, { Component } from 'react'
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
      results : [],
    }
  }

  handleUserSearch = (e) => {
    // persist event for time delayed action
    e.persist()

    // clear queued search if any already queued
    if(debounceSearch !== false) clearTimeout(debounceSearch)

    // add new search to queue
    debounceSearch = setTimeout(() => {
      
      // reset results on empty input and cancel queued
      if(e.target.value.length === 0) {
        return this.setState({
          ...this.state,
          results: [],
        })
      }

      // perform search
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
            placeholder='Github Username'
            onChange={this.handleUserSearch}
            className={search} />
        </div>
        <UserSearchResults results={this.state.results}/>
      </div>
    )
  }
}
export default connect(
  (state) => ({}),
  (dispatch) => (
    bindActionCreators(UserActionCreators, dispatch)
  )
  )(UserSearch)