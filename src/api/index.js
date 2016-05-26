import axios from 'axios'
import _ from 'lodash'
let credentials = 'client_id=fb454ec74924b5f8fbe5&client_secret=ec40732e8b66dff25332ba22b72d0b9ad445f80c'
let directory = {}

export function fetchRepoDir (user, repo, branch) {
  return new Promise((resolve, reject) => {
    axios(`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1&${credentials}`)
      .then(({data}) => data.tree.map((item) => _.set(directory, item.path.split('/').concat(['__ref']), item)))
      .then(() => resolve(directory))
      .catch((err) => reject(err))
  })
}

export function fetchFileSource (uri) {
  return axios({
    url: `${uri}?${credentials}`,
    method: 'get',
    transformResponse: function (data) {
      return atob(JSON.parse(data).content)
    },
  })
}
