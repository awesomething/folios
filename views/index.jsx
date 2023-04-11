const React = require('react')
const Default = require('./layouts/Default')

function Index ({projects, title}) {
    return (
      <Default title={title}>
        {/* This is a JSX comment */}
        <div className="newButton">
          <a href="/projects/new"><button>Add a new project</button></a>
        </div>

        <main className="container override">
        {
          projects.map((project, index)=> {
            return (
              <section className="card" key={index}>
              <a href={`/projects/${index}`}>
                 <img src={project.image} alt={project.name} />
                 <p>{project.name}</p>
               </a>
              </section>
            )
          })
        }
        </main>
      </Default>
    )
}

module.exports = Index
