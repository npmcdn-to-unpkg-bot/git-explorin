import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserActionCreators } from 'actions'
import { UserSearchResults } from 'components'
import { container, search } from './styles.scss'
let debounceSearch = false

class UserSearch extends Component {

  constructor (props) {
    super(props)

    this.state = {
      query : props.query || ''
    }
  }

  componentDidMount = () => {
    this.props.searchUsers(this.state.query)
  }

  handleUserSearch = (e) => {
    e.persist()

    this.setState({
      query: e.target.value
    })

    if (e.target.value.length === 0) {
      this.context.router.push('/')
    } else {
      this.context.router.push({
        pathname: '/',
        query: {
          q : e.target.value
        }
      })
    }

    if (debounceSearch !== false) clearTimeout(debounceSearch)
    debounceSearch = setTimeout(() => {
      this.props.searchUsers(e.target.value)
    }, 500)
  }

  render () {
    return (
      <div className={container}>
        <input
          value={this.state.query}
          className={search}
          onChange={this.handleUserSearch}
          placeholder='Search Github Users' />
      </div>
    )
  }
}

UserSearch.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

UserSearch.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({}),
  (dispatch) => (
    bindActionCreators(UserActionCreators, dispatch)
  )
  )(UserSearch)
