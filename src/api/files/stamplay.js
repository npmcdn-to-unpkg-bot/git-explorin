import { experience } from 'isaiahgrey'
import { startup, devtools } from 'silicon-valley'
import { COMPANY_NAME, JOB_TITLE, JOB_DESC, JOB_TIME } from 'stamplay'

function Stamplay (state = {}, action) {
  switch (action.type) {
    case COMPANY_NAME :
      return {
        ...state,
        company: 'Stamplay',
      }
    case JOB_TITLE :
      return {
        ...state,
        title: 'Developer Evangelist',
      }
    case JOB_DESC :
      return {
        ...state,
        desc: 'Community engagement through content generation, workshops, attending conferences and providing one on one and group support.',
      }
    case JOB_TIME :
      return {
        time: 'September 2015 - Present',
      }
    default :
      return state
  }
}

export default Stamplay
