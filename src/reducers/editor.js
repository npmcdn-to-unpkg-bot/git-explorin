const initialState = {
  files: {},
  branches: [],
  active: {},
  current: {
    source: '',
    path: '',
    extension: '',
  },
  repoLoading: false,
  fileLoading: false,
}

export default function Editor (state = initialState, action) {
  switch (action.type) {
    case 'REPOSITORY_LOADED' :
      return {
        ...state,
        files: action.files,
        branches: action.branches,
        current: initialState.current,
        active: initialState.active,
      }
    case 'FILE_LOADING' :
      return {
        ...state,
        fileLoading: action.status,
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
        current: action.file,
      }
    default :
      return state
  }
}
