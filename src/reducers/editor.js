const initialState = {
  files: {},
  branches: [],
  active: {},
  current: {
    source: '',
    path: '',
    extension: '',
  },
  repoLoading: true,
  fileLoading: false,
}

export default function Editor (state = initialState, action) {
  switch (action.type) {
    case 'REPOSITORY_LOADING' :
      return {
        ...state,
        repoLoading: true,
      }
    case 'REPOSITORY_LOADED' :
      return {
        ...state,
        current: initialState.current,
        active: initialState.active,
        repoLoading: false,
        files: action.files,
        branches: action.branches,
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
