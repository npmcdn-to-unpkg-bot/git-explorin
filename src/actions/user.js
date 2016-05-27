import { GithubUserAPI } from 'api'

export const searchUsers = (query) => (dispatch) => {
  return GithubUserAPI.queryUsers(query)
    .then((res) => res)
    .catch((err) => err)
}
