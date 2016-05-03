import { experience } from "isaiahgrey"
import { bootcamp } from "companies"

class Codercamps extends bootcamp {
  constructor (job) {
    super (job)
  }

  describeCompany = (e) => {
    return "Codercamps runs hands-on coding 'boot camps' focused on teaching motivated students the programming skills needed to be successful in a developer role."
  }

  render () {
    return (
      <div>
        <h3>{"Job title: Instructor"}</h3>
        <div>
          <p>
            {"Description: Taught full stack JavaScript, software best practices, version control, agile development."}
          </p>
        </div>
        <div>
          <p>{"Time: Feburary 2015 - October 2015"}</p>
        </div>
      </div>
    )
  }

}

export default Codercamps