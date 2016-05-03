import { experience } from "isaiahgrey"
import { startup, devtools } from "silicon-valley"
import { COMPANY_NAME, COMPANY_DESC, JOB_TITLE, JOB_DESC, JOB_TIME } from "stamplay"

function Stamplay (state = {}, action) {
  switch (action.type) {
    case COMPANY_NAME :
      return {
        ...state,
        company_name: "Stamplay",
      }
    case COMPANY_DESC :
      return {
        ...state,
        company_desc: "BaaS enabling developers to use API's as building blocks. Parse meets Heroku meets IFTTT.",
      }
    case JOB_TITLE :
      return {
        ...state,
        job_title: "Developer Evangelist",
      }
    case JOB_DESC :
      return {
        ...state,
        job_desc: "Community engagement through content generation, workshops, attending conferences and providing one on one and group support.",
      }
    case JOB_TIME :
      return {
        job_time: "September 2015 - Present",
      }
    default :
      return state
  }
}

export default Stamplay
