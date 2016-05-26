import { fetchRepoDir, fetchFileSource } from '../api'
import _ from 'lodash'

function repositoryLoading () {
  return {
    type: 'REPOSITORY_LOADING',
  }
}

function repositoryLoadSuccess (files) {
  return {
    type: 'REPOSITORY_LOAD_COMPLETE',
    files,
  }
}

function repositoryLoadFailure () {
  return {
    type: 'REPOSITORY_LOAD_FAILURE',
  }
}

function setFileAsActive (active) {
  return {
    type: 'SET_FILE_AS_ACTIVE',
    active,
  }
}

function setFileAsInactive (active) {
  return {
    type: 'SET_FILE_AS_INACTIVE',
    active,
  }
}

function setFileAsCurrent (file = {}) {
  return {
    type: 'SET_FILE_AS_CURRENT',
    file,
  }
}

export function fetchRepo (user, repo, branch = 'master') {
  return function (dispatch) {
    dispatch(repositoryLoading())
    return fetchRepoDir(user, repo, branch)
      .then((res) => dispatch(repositoryLoadSuccess(res)))
      .catch(() => dispatch(repositoryLoadFailure()))
  }
}

export function fetchFile (file) {
  return function (dispatch) {
    return fetchFileSource(file.url)
      .then(({ data }) => {
        file.source = data
        return dispatch(setFileAsCurrent(file))
      })
      .catch((err) => console.error(err))
  }
}

export function setActive (file) {
  return function (dispatch, getState) {
    let current = getState().Files.current
    if (current.path === file.path) return
    dispatch(setFileAsActive({
      ...getState().Files.active,
      [file.path]: file,
    }))
    dispatch(fetchFile(file))
  }
}

export function setInactive (file) {
  return function (dispatch, getState) {
    let { active } = getState().Files
    delete active[file.path]
    dispatch(setFileAsInactive({
      ...getState().Files.active,
      ...active,
    }))
    if (_.keys(active).length >= 1) {
      dispatch(setFileAsCurrent(active[_.keys(active)[0]]))
    } else {
      dispatch(setFileAsCurrent({ source: '', path: '' }))
    }
  }
}
