import axios from 'axios'
let credentials = 'client_id=fb454ec74924b5f8fbe5&client_secret=ec40732e8b66dff25332ba22b72d0b9ad445f80c'

export function queryUsers (query) {
  return axios(`https://api.github.com/search/users?q=${query}+in:login&${credentials}`)
}
