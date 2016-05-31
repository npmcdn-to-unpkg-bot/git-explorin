import axios from 'axios'
let credentials = 'client_id=fb454ec74924b5f8fbe5&client_secret=ec40732e8b66dff25332ba22b72d0b9ad445f80c'

export function fetchFileSource ({ url }) {
  return axios({
    url: `${url}?${credentials}`,
    method: 'get',
    transformResponse: function (data) {
      let contentStr = JSON.parse(data).content
      return atob(contentStr.replace(/\s/g, ''))
    },
  })
}
