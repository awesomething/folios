const React = require('react')

function Form(props) {
  let {title, index=0, project, action, method } = props
  console.log('foooorrrm');
  if (!project) {
    project = {}
    console.log('dis is project', project);
  }
  if (!project.experiences) {
    project.experiences = [""]
  }
  if (!project.skills) {
    project.skills = [""]
  }
  console.log('dis is project', project);
  if (!project.info) {
    project.info = {}
  }
  return (
    <div className="container form-container">
      <form
        action={action}
        method={method}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={project.name}
        />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          id="rating"
          min="1"
          max="5"
          step="1"
          defaultValue={project.rating}
        />
        <label htmlFor="yourName">Your Name</label>
        <input
          type="text"
          name="yourName"
          id="yourName"
          defaultValue={project.yourName}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          id="image"
          defaultValue={project.image}
        />
        <label htmlFor="prepTime">Prep Days</label>
        <input
          type="number"
          name="prepTime"
          id="prepTime"
          defaultValue={project.info.prepTime}
        />
        <label htmlFor="codeTime">Code Days</label>
        <input
          type="number"
          name="codeTime"
          id="codeTime"
          defaultValue={project.info.codeTime}
        />
        <label htmlFor="totalTime">Total Work Days</label>
        <input
          type="number"
          name="totalTime"
          id="totalTime"
          defaultValue={project.info.totalTime}
        />
        <label htmlFor="languages">Languages</label>
        <input
          type="number"
          name="languages"
          id="languages"
          defaultValue={project.info.languages}
        />
        <label htmlFor="links">Repo Link</label>
        <input
          type="text"
          name="links"
          id="links"
          defaultValue={project.info.links}
        />
        <fieldset>
          <label htmlFor="skills">Skills</label>
          {
            project.skills
            ? project.skills.map(skill => {
              return (
                <>
                  <input
                    type="text"
                    name="experiences"
                    id="experiences"
                    defaultValue={skill}
                  />

                </>
              )
            })
          : <>
              <input
                  type="text"
                  name="skills"
                  id="skills"
                  defaultValue={""}
                />
                <br />
                <input
                    type="text"
                    name="skills"
                    id="skills"
                    defaultValue={""}
                  />
                  <br />
                  <input
                      type="text"
                      name="skills"
                      id="skills"
                      defaultValue={""}
                    />
          </>
          }
        </fieldset>
        <fieldset>
          <label htmlFor="experiences">Experiences</label>
          {
            project.experiences
            ? project.experiences.map(experience => {
              return (
                <>
                  <textarea
                    type="text"
                    name="experiences"
                    id="experiences"
                    defaultValue={experience}
                  />
                  <br />
                </>
              )
            })
            : (
              <div>
                <textarea
                  type="text"
                  name="experiences"
                  id="experiences"
                  defaultValue={""}
                ></textarea>
                <br />
                <textarea
                  type="text"
                  name="experiences"
                  id="experiences"
                  defaultValue={" "}
                ></textarea>
                <br />
                <textarea
                  type="text"
                  name="experiences"
                  id="experiences"
                  defaultValue={"  "}
                ></textarea>
              </div>
            )

          }
        </fieldset>

        <label htmlFor="hasDatabase">App Has Database?</label>
        <input
          type="checkbox"
          name="hasDatabase"
          id="hasDatabase"
          defaultChecked={project.hasDatabase || true}
        />
        <br />
        <input type="submit"/>
      </form>
    </div>
  )
}

module.exports = Form
