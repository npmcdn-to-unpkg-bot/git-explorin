import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserActionCreators } from 'actions'
import { SearchResults } from 'components'
import { container, search } from './styles.scss'
let debounceSearch = false

class GithubSearch extends Component {

  constructor (props) {
    super(props)

    this.state = {
      query: props.query || ''
    }
  }

  componentDidMount = () => {
    this.props.handleQuery(this.state.query)
  }

  componentWillReceiveProps = (nextProps, prevProps) => {
    this.setState({
      ...this.state,
      query: nextProps.query || ''
    }, () => this.props.handleQuery(this.state.query))
  }

  handleQuery = (query) => {
    this.props.handleQuery(query)
  }

  handleInputChange = (e) => {
    e.persist()

    this.setState({
      ...this.state,
      query: e.target.value
    })

    if (debounceSearch !== false) clearTimeout(debounceSearch)
    debounceSearch = setTimeout(() => {
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
    }, 800)
  }

  render () {
    return (
      <div className={container}>
        <input
          className={search}
          value={this.state.query}
          onChange={this.handleInputChange}
          placeholder='search github users and orgs' />
      </div>
    )
  }
}

GithubSearch.propTypes = {
  searchUsers: PropTypes.func.isRequired,
}

GithubSearch.contextTypes = {
  router: PropTypes.object.isRequired,
}

export default connect(
  (state) => ({}),
  (dispatch) => (
    bindActionCreators(UserActionCreators, dispatch)
  )
  )(GithubSearch)
