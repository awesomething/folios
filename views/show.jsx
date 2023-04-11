const React = require('react')
const Default = require('./layouts/Default')

function Show ({project, index, title}) {
    return (
      <Default title={title}>

        <div className="show-container">

          <div className="image-container">
            <div className="image">
              <img src={project.image} alt={project.name}/>
            </div>
            <h4>
            {

              [...Array(5)].map((star, i) => {
                return (
                  (project.rating ) >  i
                  ? <span>{String.fromCodePoint(9733)}</span>
                  : <span>{String.fromCodePoint(9734)}</span>
                )
              })
            }
            </h4>
            <div className="recipe-info">
              <table>
                <tr><td>Prep Days:</td><td>{project.info.prepTime}</td></tr>
                <tr><td>Code Days:</td><td>{project.info.codeTime}</td></tr>
                <tr><td>Total Days:</td><td>{project.info.totalTime}</td></tr>
                <tr><td>Languages:</td><td>{project.info.languages}</td></tr>
                <tr><td>Repo Links:</td><td>{project.info.links}</td></tr>
              </table>
            </div>
          </div>
          <div className="info">
            <h3>{project.name} Project</h3>

            <h4>Is made by {project.yourName}</h4>
            <p>
              and it
              {
                project.hasDatabase
                ? <span> does </span>
                : <span> does NOT </span>
              }
              have a database.
            </p>
            <div className="recipe-container">
              <div className="skills">
                <ul>
                  {
                    project.skills.map(skill => {
                    return <li key={skill}>{skill}</li>
                    })
                  }
                </ul>
              </div>
              <section className="experiences">
                <article>
                  {
                    project.experiences.map(experience => {
                      return <p key={experience}>{experience}</p>
                    })
                  }
                </article>
            </section>
            </div>
           <div className="actions">
              <form action={`/projects/${index}\?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE"/>
              </form>
              <a href={`/projects/${index}/edit`}><button>edit</button></a>
            </div>
              <a href="/projects">Back to Index</a>
          </div>
        </div>
      </Default>
    )
}

module.exports = Show
