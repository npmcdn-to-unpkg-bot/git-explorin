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
    }
  }

  componentDidMount = () => {
    this.props.fetchUser(this.props.params.username)
  }

  render () {
    return (
      <div>
        <ProfileHeader
          loading={this.props.loading}
          name={this.props.profile.name}
          login={this.props.profile.login}
          avatar={this.props.profile.avatar_url} />
      </div>
    )
  }
}

ProfileContainer.propTypes = {
  params: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
}

export default connect(
  (state) => ({
    profile: state.Users.profile,
    loading: state.Users.profileLoading,
  }),
  (dispatch) => (bindActionCreators(UserActionCreators, dispatch))
  )(ProfileContainer)
