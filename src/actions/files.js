import { fetchAllFiles, getFile } from '../api'

export const FETCHING = 'FETCHING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'
export const ADD_ACTIVE_FILE = 'ADD_ACTIVE_FILE'
export const SET_FILE_INACTIVE = 'SET_FILE_INACTIVE'
export const SET_CURRENT_FILE = 'SET_CURRENT_FILE'

function fetching () {
  return {
    type: FETCHING,
  }
}

function fetchSuccess (files) {
  return {
    type: FETCH_SUCCESS,
    files: files,
  }
}

function fetchFailure () {
  return {
    type: FETCH_FAILURE,
  }
}

function addActive (file) {
  return {
    type: ADD_ACTIVE_FILE,
    file,
  }
}

function setCurrent (file, code) {
  return {
    type: SET_CURRENT_FILE,
    file,
    code,
  }
}

function setInactive (active, current, code) {
  return {
    type: SET_FILE_INACTIVE,
    active,
    current,
    code,
  }
}

export function fetchFiles () {
  return function (dispatch) {
    dispatch(fetching())
    return fetchAllFiles()
      .then((res) => {
        setTimeout(() => {
          dispatch(fetchSuccess(res))
        }, 100)
      })
      .catch(() => {
        dispatch(fetchFailure())
      })
  }
}

export function setActiveFile (file) {
  return function (dispatch, getState) {
    const currentState = getState().Files
    if (currentState.active.indexOf(file) < 0) dispatch(addActive(file))
    if (currentState.current !== file) {
      document.title = `${file} - isaiah grey`
      return getFile(file).then((res) => {
        dispatch(setCurrent(file, res.data))
      })
    }
  }
}

export function setFileInactive (file) {
  return function (dispatch, getState) {
    const activeFiles = getState().Files.active
    let code = ''
    let current = getState().Files.current
    let idx = activeFiles.indexOf(file)
    let files = [...activeFiles.slice(0, idx), ...activeFiles.slice(idx + 1, activeFiles.length)]
    current = files[0] !== undefined ? files[0] : ''
    if (current !== '') {
      return getFile(current).then((res) => {
        document.title = `${current} - isaiah grey`
        dispatch(setInactive(files, current, res.data))
      })
    } else {
      document.title = 'isaiah grey'
      dispatch(setInactive(files, current, code))
    }
  }
}
