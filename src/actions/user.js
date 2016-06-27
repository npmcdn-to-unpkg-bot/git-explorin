import { GithubUserAPI } from 'api'

const usersLoading = () => ({
  type: 'USERS_LOADING',
})

const usersLoaded = (users = []) => ({
  type: 'USERS_LOADED',
  users,
})

const profileLoading = () => ({
  type: 'PROFILE_LOADING',
})

const profileLoaded = (profile) => ({
  type: 'PROFILE_LOADED',
  profile,
})

export const searchUsers = (query) => (dispatch) => {
  if (query.length === 0) return dispatch(usersLoaded())
  else dispatch(usersLoading())
  return GithubUserAPI.queryUsers(query)
    .then(({ data: { items } }) => dispatch(usersLoaded(items)))
    .catch(() => dispatch(usersLoaded()))
}

export const fetchUser = (username) => (dispatch) => {
  dispatch(profileLoading())
  return GithubUserAPI.fetchUser(username)
    .then(({ data }) => dispatch(profileLoaded(data)))
    .catch(() => dispatch(profileLoaded({})))
}
