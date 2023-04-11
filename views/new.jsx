const React = require('react')
const Default = require('./layouts/Default')
const ProjectForm = require('./components/projectForm')

function Edit ({project, index, title}) {
    return (
      <Default title={title}>
        <ProjectForm
          action={`/projects`}
          method="POST"
          title={title}
          project={project}
          index={index}
      />
      </Default>
    )
}

module.exports = Edit
