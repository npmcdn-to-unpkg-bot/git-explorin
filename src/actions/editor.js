import {
  GithubFileAPI,
  GithubRepoAPI,
} from 'api'

import _ from 'lodash'

const repositoryLoading = () => ({
  type: 'REPOSITORY_LOADING',
})

const repositoryLoaded = (files) => ({
  type: 'REPOSITORY_LOADED',
  files,
})

const fileLoading = (status) => ({
  type: 'FILE_LOADING',
  status,
})

const setFileAsActive = (active) => ({
  type: 'SET_FILE_AS_ACTIVE',
  active
})

const setFileAsInactive = (active) => ({
  type: 'SET_FILE_AS_INACTIVE',
  active
})

const setFileAsCurrent = (file) => ({
  type: 'SET_FILE_AS_CURRENT',
  file
})

export const fetchRepo = ({ username, repo, branch }) => (dispatch) => {
  dispatch(repositoryLoading(true))
  return GithubRepoAPI.fetchRepoDir(username, repo, branch)
    .then((files) => {
      dispatch(repositoryLoaded(files))
    })
    .catch((err) => console.error(err))
}

export const fetchFile = (file) => (dispatch) => {
  let filepath = file.path.split('.')
  return GithubFileAPI.fetchFileSource(file)
    .then(({ data }) => {
      dispatch(setFileAsCurrent({
        ...file,
        source: data,
        extension: filepath[filepath.length - 1],
      }))
      dispatch(fileLoading(false))
    })
    .catch(() => dispatch(fileLoading(false)))
}

export const setActive = (file) => (dispatch, getState) => {
  let { active, current } = getState().Editor
  if (current.path === file.path) return
  dispatch(fileLoading(true))
  dispatch(setFileAsActive({ ...active, [file.path]: file }))
  dispatch(fetchFile(file))
}

export const addActive = (file) => (dispatch, getState) => {
  let current = _.get(getState().Editor.files, file.split('/'))
  return dispatch(setActive(current.__ref))
}

export const setInactive = (file) => (dispatch, getState) => {
  dispatch(fileLoading(true))
  let { active, current } = getState().Editor
  active = _.omit(active, [file.path])
  dispatch(setFileAsInactive(active))
  if (file.path !== current.path) return
  else if (_.keys(active).length >= 1) dispatch(fetchFile(active[_.keys(active)[0]]))
  else {
    dispatch(setFileAsCurrent({ source: '', path: '', extension: '' }))
    dispatch(fileLoading(false))
  }
}
