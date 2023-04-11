// DEPENDENCIES
const express = require('express')
const projects = express.Router()
const Project = require('../models/project.js')


// Routes
// INDEX 1/7
projects.get('/', (req, res) => {
    res.render('Index',
      {
        projects: Project,
        title: 'Index Page'
      }
    )
})

// NEW 2/7
projects.get('/new', (req, res) => {
    res.render('new', {
      title: 'New Page'
    })
})

// EDIT 3/7
projects.get('/:index/edit', (req, res) => {
    res.render('edit', {
      project: Project[req.params.index],
      index: req.params.index,
      title: 'Edit Page'
    })
})

// SHOW 4/7
projects.get('/:arrayIndex', (req, res) => {
  if (Project[req.params.arrayIndex]) {
    res.render('Show', {
      project:Project[req.params.arrayIndex],
      index: req.params.arrayIndex,
      title: 'Show Page'
    })
  } else {
    res.render('404')
  }
})

// CREATE 5/7
projects.post('/', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://res.cloudinary.com/dgouuphubs/image/upload/v1661721157/YelpCamp/ic3cfy1c1im3rg1zfn9r.png'
  }
  if(req.body.hasDatabase === 'on') {
    req.body.hasDatabase = 'true'
  } else {
    req.body.hasDatabase = 'false'
  }
  if (!Array.isArray(req.body.experiences)) {
    req.body.experiences = [req.body.experiences]
  }
  req.body.info = {}
  req.body.info.prepTime = req.body.prepTime
  req.body.info.codeTime = req.body.codeTime
  req.body.info.totalTime = req.body.totalTime
  req.body.info.languages = req.body.languages
  req.body.info.links = req.body.links
  delete req.body.prepTime
  delete req.body.codeTime
  delete req.body.totalTime
  delete req.body.languages
  delete req.body.links
  Project.push(req.body)
  res.redirect('/projects')
})

// UPDATE 6/7
projects.put('/:index', (req, res) => {
  if (!req.body.image) {
    req.body.image = 'https://res.cloudinary.com/dgouuphubs/image/upload/v1661721157/YelpCamp/ic3cfy1c1im3rg1zfn9r.png'
  }
  if(req.body.hasDatabase === 'on'){
    req.body.hasDatabase = true
  } else {
    req.body.hasDatabase = false
  }
  Project[req.params.index] = Object.assign(Project[req.params.index], req.body)
  res.redirect(`/projects/${req.params.index}`)
})

// DELETE 7/7
projects.delete('/:index', (req, res) => {
  Project.splice(req.params.index, 1)
  res.status(303).redirect('/projects')
})

module.exports = projects
