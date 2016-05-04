import { experience } from "isaiahgrey"

const SET_JOB_TITLE = "SET_JOB_TITLE"
const SET_COMPANY = "SET_JOB_TITLE"
const SET_DESC = "SET_DESC"
const SET_TIME = "SET_DESC"

function setTime () {
  return {
    type: SET_TIME,
    time: "September 2015 - March 2016",
  }
}

function setCompany () {
  return {
    type: SET_COMPANY,
    time: "Spero",
  }
}

function setJobTitle () {
  return {
    type: SET_JOB_TITLE,
    time: "Lead Engineer",
  }
}

function setJobDesc () {
  return {
    type: SET_DESC,
    time: "Develop and design a benevolent community platform for fundraising with a cause. Ecommerce meets GoFundMe.",
  }
}

export default function setProfileData () {
  return function (dispatch, getState) {
    dispatch(setTime())
    dispatch(setCompany())
    dispatch(setJobTitle())
    dispatch(setJobDesc())
  }
}
