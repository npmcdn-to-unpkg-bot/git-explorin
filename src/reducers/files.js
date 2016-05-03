import * as fileActions from '../actions/files'

const initialState = {
  files: {},
  active: [],
  current: '',
  code: '',
  loading: false,
}

export default function Files (state = initialState, action) {
  switch (action.type) {
    case fileActions.FETCHING :
      return {
        ...state,
        loading: true,
      }
    case fileActions.FETCH_SUCCESS :
      return {
        ...state,
        loading: false,
        files: action.files,
      }
    case fileActions.FETCH_FAILURE :
      return {
        ...state,
        loading: false,
        files: {},
      }
    case fileActions.ADD_ACTIVE_FILE :
      return {
        ...state,
        active: [...state.active, action.file],
      }
    case fileActions.SET_FILE_INACTIVE :
      return {
        ...state,
        active: action.active,
        current: action.current,
      }
    case fileActions.SET_CURRENT_FILE :
      return {
        ...state,
        current: action.file,
      }
    case fileActions.SET_CODE :
      return {
        ...state,
        code: action.code,
      }
    default :
      return state
  }
}
