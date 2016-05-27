import { GithubUserAPI } from 'api'

export function searchUsers (query) {
  return function(dispatch) {
    return GithubUserAPI.queryUsers(query)
      .then((res) => res)
      .catch((err) => err)
  }
}
