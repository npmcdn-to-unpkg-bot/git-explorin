const initialState = {
  usersLoading:false,
  users:[],
}

const Users = (state = initialState, action) => {
  switch(action.type) {
    case 'USERS_LOADING':
      return {
        ...state,
        usersLoading: true,
      }
    case 'USERS_LOADED':
      return {
        ...state,
        usersLoading: false,
        users: action.users,
      }
    default:
      return state
  }
}

export default Users