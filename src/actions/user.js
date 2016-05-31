import { GithubUserAPI } from 'api'

const usersLoading = () => {
  return {
    type: 'USERS_LOADING',
  }
}

const usersLoaded = (users = []) => {
  return {
    type: 'USERS_LOADED',
    users,
  }
}

export const searchUsers = (query) => (dispatch) => {
  if(query.length === 0) return dispatch(usersLoaded())
  else dispatch(usersLoading())
  return GithubUserAPI.queryUsers(query)
    .then(({ data: { items }}) => dispatch(usersLoaded(items)))
    .catch((err) => dispatch(usersLoaded()))
}
