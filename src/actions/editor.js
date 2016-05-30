import {
  GithubFileAPI,
  GithubRepoAPI,
} from 'api'
import _ from 'lodash'

export const repositoryLoading = () => ({ type: 'REPOSITORY_LOADING' })

export const loadingFile = () => ({ type: 'FILE_LOADING_START' })

export const fileLoaded = () => ({ type: 'FILE_LOAD_COMPLETE' })

export const repositoryLoadSuccess = (files) => ({ type: 'REPOSITORY_LOAD_COMPLETE', files })

export const repositoryLoadFailure = () => ({ type: 'REPOSITORY_LOAD_FAILURE' })

export const setFileAsActive = (active) => ({ type: 'SET_FILE_AS_ACTIVE', active })

export const setFileAsInactive = (active) => ({ type: 'SET_FILE_AS_INACTIVE', active })

export const setFileAsCurrent = (file) => ({ type: 'SET_FILE_AS_CURRENT', file })

export const fetchRepo = ({ username, repo, branch }) => (dispatch) => {
  dispatch(repositoryLoading())
  return GithubRepoAPI.fetchRepoDir(username, repo, branch)
    .then((res) => dispatch(repositoryLoadSuccess(res)))
    .catch((err) => {
      dispatch(repositoryLoadFailure())
      console.error(err)
    })
}

export const fetchFile = (file) => (dispatch) => {
  let filepath = file.path.split('.')
  return GithubFileAPI.fetchFileSource(file)
    .then((res) => {
      dispatch(setFileAsCurrent({
        ...file,
        source: res.data,
        extension: filepath[filepath.length - 1],
      }))
      dispatch(fileLoaded())
    })
    .catch((err) => console.error(err))
}

export const setActive = (file) => (dispatch, getState) => {
  let { active, current } = getState().Editor
  if (current.path === file.path) return
  dispatch(loadingFile())
  dispatch(setFileAsActive({ ...active, [file.path]: file }))
  dispatch(fetchFile(file))
}

export const addActive = (file) => (dispatch, getState) => {
  let current = _.get(getState().Editor.directory, file.split('/'))
  return dispatch(setActive(current.__ref))
}

export const setInactive = (file) => (dispatch, getState) => {
  dispatch(loadingFile())
  let { active, current } = getState().Editor
  active = _.omit(active, [file.path])
  dispatch(setFileAsInactive(active))
  if (file.path !== current.path) return
  else if (_.keys(active).length >= 1) dispatch(fetchFile(active[_.keys(active)[0]]))
  else {
    dispatch(setFileAsCurrent({ source: '', path: '', extension: '' }))
    dispatch(fileLoaded())
  }
}
