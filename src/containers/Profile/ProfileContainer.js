import React, { Component, PropTypes } from 'react'
import { ProfileHeader } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { UserActionCreators } from 'actions'

class ProfileContainer extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
      profile: false,
    }
  }

  componentDidMount = () => {
    this.props.fetchUser(this.props.params.username)
      .then((user) => {
        this.setState({
          profile: user,
          loading: false,
        })
      })
  }

  render () {
    return (
      <div>
        <ProfileHeader
          loading={this.state.loading}
          name={this.state.profile.name}
          login={this.state.profile.login}
          avatar={this.state.profile.avatar_url} />
      </div>
    )
  }
}

ProfileContainer.propTypes = {
  params: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({}),
  (dispatch) => (bindActionCreators(UserActionCreators, dispatch))
  )(ProfileContainer)
