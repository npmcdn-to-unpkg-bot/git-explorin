import axios from 'axios'
import _ from 'lodash'
let credentials = 'client_id=fb454ec74924b5f8fbe5&client_secret=ec40732e8b66dff25332ba22b72d0b9ad445f80c'


export const fetchRepoDir = (user, repo, branch) => {
  let directory = {}
  return new Promise((resolve, reject) => {
    axios(`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1&${credentials}`)
      .then(({data}) => data.tree.map((item) => _.set(directory, item.path.split('/').concat(['__ref']), item)))
      .then(() => {
        resolve(directory)
      })
      .catch((err) => reject(err))
  })
}

export const fetchUserRepos = (username) => {
  return axios(`https://api.github.com/users/${username}/repos?${credentials}`)
}


export const fetchRepoBranches = (user, repo) => {
  return axios(`https://api.github.com/repos/${user}/${repo}/branches?${credentials}`)
    .then((res) => res.data.map((branch) => branch.name))
    .catch((err) => console.log(err))
}

  // .then((res) => this.setState({
  //   ...this.state,
  //   branches: res.data.map((branch) => branch.name)
  // }))
  // .catch((err) => console.log(err))