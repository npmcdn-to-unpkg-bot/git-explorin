const initialState = {
  usersLoading: false,
  profileLoading: true,
  users: [],
}

const Users = (state = initialState, action) => {
  switch (action.type) {
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
    case 'PROFILE_LOADING':
      return {
        ...state,
        profileLoading: true,
      }
    case 'PROFILE_LOADED':
      return {
        ...state,
        profileLoading: false,
      }
    default:
      return state
  }
}

export default Users
