const React = require('react')
const Default = require('./layouts/Default')

function NotFound () {
    return (
      <Default title="404">
        <h1>Uh oh! There isn't a page here!</h1>
        <h2><a href="/projects">Go back to projects</a></h2>
      </Default>
    )
}

module.exports = NotFound
