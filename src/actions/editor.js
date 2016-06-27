import { GithubFileAPI, GithubRepoAPI } from 'api'
import { all, spread } from 'axios'
import _ from 'lodash'


const repositoryLoaded = (files, branches) => ({
  type: 'REPOSITORY_LOADED',
  files,
  branches,
})

const fileLoading = (status) => ({
  type: 'FILE_LOADING',
  status,
})

const setFileAsActive = (active) => ({
  type: 'SET_FILE_AS_ACTIVE',
  active,
})

const setFileAsInactive = (active) => ({
  type: 'SET_FILE_AS_INACTIVE',
  active,
})

const setFileAsCurrent = (file) => ({
  type: 'SET_FILE_AS_CURRENT',
  file,
})

export const fetchRepo = ({ username, repo, branch = 'master' }) => (dispatch) => {
  return all([
    GithubRepoAPI.fetchRepoDir(username, repo, branch),
    GithubRepoAPI.fetchRepoBranches(username, repo),
  ])
  .then(spread((files, branches) => {
    dispatch(repositoryLoaded(files, branches))
  }))
  .catch((err) => err)
}

export const setActive = (file) => (dispatch, getState) => {
  let { active, current } = getState().Editor
  let filepath = file.path.split('.')
  if (current.path === file.path) return

  dispatch(fileLoading(true))
  return GithubFileAPI.fetchFileSource(file)
    .then(({ data }) => dispatch([
      fileLoading(false),
      setFileAsActive({ ...active, [file.path]: file }),
      setFileAsCurrent({
        ...file,
        source: data,
        extension: filepath[filepath.length - 1],
      }),
    ]))
    .catch((err) => err)
}

export const addActive = (file) => (dispatch, getState) => {
  let current = _.get(getState().Editor.files, file.split('/'))
  return dispatch(setActive(current.__ref))
}

export const setInactive = (file) => (dispatch, getState) => {
  let { active, current } = getState().Editor
  active = _.omit(active, [file.path])
  dispatch([
    fileLoading(true),
    setFileAsInactive(active),
  ])

  if (file.path !== current.path) dispatch(fileLoading(false))
  else if (_.keys(active).length >= 1) dispatch(setActive(active[_.keys(active)[0]]))
  else {
    dispatch([
      fileLoading(false),
      setFileAsCurrent({ source: '', path: '', extension: '' }),
    ])
  }
}
