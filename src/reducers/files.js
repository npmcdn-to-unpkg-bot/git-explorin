import * as fileActions from '../actions/files'

const initialState = {
  directory: {},
  active: {},
  current: {},
  code: '',
  loading: true,
}

export default function Files (state = initialState, action) {
  switch (action.type) {
    case 'REPOSITORY_LOADING' :
      return {
        ...state,
        loading: true,
      }
    case 'REPOSITORY_LOAD_COMPLETE' :
      return {
        ...state,
        loading: false,
        directory: action.files,
      }
    case 'REPOSITORY_LOAD_FAILURE' :
      return {
        ...state,
        loading: false,
      }
    case 'SET_FILE_AS_ACTIVE' :
      return {
        ...state,
        active: action.active,
      }
    case 'SET_FILE_AS_INACTIVE' :
      return {
        ...state,
        active: action.active,
      }
    case 'SET_FILE_AS_CURRENT' :
      return {
        ...state,
        current: action.file
      }
    case 'SET_CODE' :
      return {
        ...state,
        code: action.code,
      }
    default :
      return state
  }
}
