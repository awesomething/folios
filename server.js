// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT||5000
const app = express()
// console.log(process.env.NODE_ENV)

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
app.get('/projects', (req, res) => {
  res.send('Welcome!')
})

// Projects
const projectsController = require('./controllers/projects_controller.js')
app.use('/projects', projectsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

// LISTEN
app.listen(5000, () => {
  console.log('creating at port 5000', PORT);
})

// process.exit(0)
