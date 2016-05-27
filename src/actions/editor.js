import {
  GithubFileAPI,
  GithubRepoAPI,
} from 'api'
import _ from 'lodash'

export const repositoryLoading = () => ({ type: 'REPOSITORY_LOADING' })

export const repositoryLoadSuccess = (files) => ({ type: 'REPOSITORY_LOAD_COMPLETE', files })

export const repositoryLoadFailure = () => ({ type: 'REPOSITORY_LOAD_FAILURE' })

export const setFileAsActive = (active) => ({ type: 'SET_FILE_AS_ACTIVE', active })

export const setFileAsInactive = (active) => ({ type: 'SET_FILE_AS_INACTIVE', active })

export const setFileAsCurrent = (file) => ({ type: 'SET_FILE_AS_CURRENT', file })

export const fetchRepo = (user, repo, branch) => (dispatch) => {
  dispatch(repositoryLoading())
  return GithubRepoAPI.fetchRepoDir(user, repo, branch)
    .then((res) => dispatch(repositoryLoadSuccess(res)))
    .catch((err) => {
      dispatch(repositoryLoadFailure())
      console.error(err)
    })
}

export const fetchFile = (file) => (dispatch) => {
  return GithubFileAPI.fetchFileSource(file)
    .then((res) => dispatch(setFileAsCurrent({ ...file, source: res.data })))
    .catch((err) => console.error(err))
}

export const setActive = (file) => (dispatch, getState) => {
  let { active, current } = getState().Files
  if (current.path === file.path) return
  dispatch(setFileAsActive({ ...active, [file.path]: file }))
  dispatch(fetchFile(file))
}

export const setInactive = (file) => (dispatch, getState) => {
  let { active } = getState().Files
  active = _.omit(active, [file.path])
  dispatch(setFileAsInactive(active))
  if (_.keys(active).length >= 1) dispatch(fetchFile(active[_.keys(active)[0]]))
  else dispatch(setFileAsCurrent({ source: '', path: '' }))
}
