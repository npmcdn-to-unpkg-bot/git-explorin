import { GithubUserAPI } from 'api'

const usersLoading = () => ({
  type: 'USERS_LOADING',
})

const usersLoaded = (users = []) => ({
  type: 'USERS_LOADED',
  users,
})

const profileLoading = () => ({
  type: 'PROFILE_LOADING'
})

const profileLoaded = (user) => ({
  type: 'PROFILE_LOADED',
  user,
})

export const searchUsers = (query) => (dispatch) => {
  if(query.length === 0) return dispatch(usersLoaded())
  else dispatch(usersLoading())
  return GithubUserAPI.queryUsers(query)
    .then(({ data: { items }}) => dispatch(usersLoaded(items)))
    .catch((err) => dispatch(usersLoaded()))
}

export const fetchUser = (username) => (dispatch) => {
  return GithubUserAPI.fetchUser(username)
    .then(({ data }) => data)
    .catch((err) => err)
}