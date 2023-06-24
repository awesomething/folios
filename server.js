// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const path  = require('path')
//const __dirname = path.resolve()
//const buildPath = path.join(__dirname, "/views");

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT||5000
const app = express()
// console.log(process.env.NODE_ENV)

// MIDDLEWARE
app.set('view engine', 'jsx')
app.set('view engine', __dirname + '/views')
//app.use(express.static(buildPath))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.engine('jsx', require('express-react-views').createEngine())

// ROUTES
// app.get("/*", function(req, res){

//   res.sendFile(
//       path.join(__dirname, "/views"),
//     );

// })

app.get('/', (req, res) => {
  res.redirect('/projects')
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
