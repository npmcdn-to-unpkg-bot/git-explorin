import { GithubUserAPI } from 'api'

const usersLoading = () => ({
  type: 'USERS_LOADING',
})

const usersLoaded = (users = []) => ({
  type: 'USERS_LOADED',
  users,
})

export const searchUsers = (query) => (dispatch) => {
  if (query.length === 0) return dispatch(usersLoaded())
  else dispatch(usersLoading())
  return GithubUserAPI.queryUsers(query)
    .then(({ data: { items } }) => dispatch(usersLoaded(items)))
    .catch(() => dispatch(usersLoaded()))
}

export const fetchUser = (username) => (dispatch) => {
  return GithubUserAPI.fetchUser(username)
    .then(({ data }) => data)
    .catch((err) => err)
}
