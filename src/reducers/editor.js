const initialState = {
  directory: {},
  active: {},
  current: {
    source: '',
    path: '',
    extension: '',
  },
  editorLoading: true,
  fileLoading: false,
}

export default function Editor (state = initialState, action) {
  switch (action.type) {
    case 'REPOSITORY_LOADING' :
      return {
        ...state,
        editorLoading: true,
      }
    case 'REPOSITORY_LOAD_COMPLETE' :
      return {
        ...state,
        editorLoading: false,
        directory: action.files,
      }
    case 'REPOSITORY_LOAD_FAILURE' :
      return {
        ...state,
        editorLoading: false,
      }
    case 'FILE_LOADING_START' :
      return {
        ...state,
        fileLoading: true,
      }
    case 'FILE_LOAD_COMPLETE' :
      return {
        ...state,
        fileLoading: false,
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
    case 'SET_CODE' :
      return {
        ...state,
        code: action.code,
      }
    default :
      return state
  }
}
