(()=>{var e={791:(e,a,s)=>{const t=s(860).Router(),o=s(238);t.get("/",((e,a)=>{a.render("Index",{projects:o,title:"Index Page"})})),t.get("/new",((e,a)=>{a.render("new",{title:"New Page"})})),t.get("/:index/edit",((e,a)=>{a.render("edit",{project:o[e.params.index],index:e.params.index,title:"Edit Page"})})),t.get("/:arrayIndex",((e,a)=>{o[e.params.arrayIndex]?a.render("Show",{project:o[e.params.arrayIndex],index:e.params.arrayIndex,title:"Show Page"}):a.render("404")})),t.post("/",((e,a)=>{e.body.image||(e.body.image="https://res.cloudinary.com/dgouuphubs/image/upload/v1661721157/YelpCamp/ic3cfy1c1im3rg1zfn9r.png"),"on"===e.body.hasDatabase?e.body.hasDatabase="true":e.body.hasDatabase="false",Array.isArray(e.body.experiences)||(e.body.experiences=[e.body.experiences]),e.body.info={},e.body.info.prepTime=e.body.prepTime,e.body.info.codeTime=e.body.codeTime,e.body.info.totalTime=e.body.totalTime,e.body.info.languages=e.body.languages,e.body.info.links=e.body.links,delete e.body.prepTime,delete e.body.codeTime,delete e.body.totalTime,delete e.body.languages,delete e.body.links,o.push(e.body),a.redirect("/projects")})),t.put("/:index",((e,a)=>{e.body.image||(e.body.image="https://res.cloudinary.com/dgouuphubs/image/upload/v1661721157/YelpCamp/ic3cfy1c1im3rg1zfn9r.png"),"on"===e.body.hasDatabase?e.body.hasDatabase=!0:e.body.hasDatabase=!1,o[e.params.index]=Object.assign(o[e.params.index],e.body),a.redirect(`/projects/${e.params.index}`)})),t.delete("/:index",((e,a)=>{o.splice(e.params.index,1),a.status(303).redirect("/projects")})),e.exports=t},238:e=>{e.exports=[{name:"Amazon Clone",hasDatabase:!0,yourName:"James King",rating:5,image:"https://links.papareact.com/dyz",skills:["Redux","MERN stack","Html/Css/Js","Typescript","PostgreSql","Cybersecurity","Python","Agile fundamentals","MongoDB"],experiences:["SOFTWARE ENGINEERING SPECIALIST - Accenture:","Developed a mobile chat app that helps people request, apply for and withdraw a loan with no human interference","Built using Amazon Lex, Angular, JavaScript and NodeJs with a team of developers, testers, tech archs and designers.","Review code developed by other developers and offer feedback to ensure best practises before merging it to master.","Created multipurpose digital tax forms using MERN stack, json and NextJs as well as Jenkins and AWS to deploy","Build forms using ReactJs and 3rd party libraries like formik, tailwindcss, react-spinners and more.","Got some AWS experience using services like LAMBDA, API Gateway, Cloudwatch and so on.","LEAD FULLSTACK INSTRUCTOR - California State University:","Work with an instructor to teach HTML/CSS/JS, ReactJs and MERN stack, to students three times a week via zoom.","Give feedback to students, debugging errors as they build their projects and grade them using github and slack"],info:{prepTime:"3 days",codeTime:"7 days",totalTime:"10",languages:"4 languages",links:"www.github.com"}},{name:"Hobby Match",hasDatabase:!0,yourName:"Rainbow Hayes",rating:5,image:"https://hobbydutch.com/static/media/possibility.7e2c077f.png",skills:["Redux","MERN stack","Html/Css/Js","Typescript","PostgreSql","Cybersecurity","Python","Agile fundamentals","MongoDB"],experiences:["SOFTWARE ENGINEER - Ada Academy:","Developed a mobile chat app that helps people request, apply for and withdraw a loan with no human interference","Built using Amazon Lex, Angular, JavaScript and NodeJs with a team of developers, testers, tech archs and designers.","Review code developed by other developers and offer feedback to ensure best practises before merging it to master.","Created multipurpose digital tax forms using MERN stack, json and NextJs as well as Jenkins and AWS to deploy","Build forms using ReactJs and 3rd party libraries like formik, tailwindcss, react-spinners and more.","Got some AWS experience using services like LAMBDA, API Gateway, Cloudwatch and so on."],info:{prepTime:"4 days",codeTime:"17 days",totalTime:"10",languages:"4 languages",links:"www.github.com"}},{name:"Join Unity",hasDatabase:!0,yourName:"Layi Rogers",rating:5,image:"https://res.cloudinary.com/dgouuphubs/image/upload/v1661721157/YelpCamp/ic3cfy1c1im3rg1zfn9r.png",skills:["Redux","MERN stack","Html/Css/Js","Typescript","PostgreSql","Cybersecurity","Python","Agile fundamentals","MongoDB"],experiences:["FULL-STACK ENGINEER - Mongo:","Developed a mobile chat app that helps people request, apply for and withdraw a loan with no human interference","Built using Amazon Lex, Angular, JavaScript and NodeJs with a team of developers, testers, tech archs and designers.","Review code developed by other developers and offer feedback to ensure best practises before merging it to master.","Created multipurpose digital tax forms using MERN stack, json and NextJs as well as Jenkins and AWS to deploy","Build forms using ReactJs and 3rd party libraries like formik, tailwindcss, react-spinners and more.","Got some AWS experience using services like LAMBDA, API Gateway, Cloudwatch and so on."],info:{prepTime:"4 days",codeTime:"17 days",totalTime:"10",languages:"4 languages",links:"www.github.com"}}]},142:e=>{"use strict";e.exports=require("dotenv")},860:e=>{"use strict";e.exports=require("express")},705:e=>{"use strict";e.exports=require("express-react-views")},567:e=>{"use strict";e.exports=require("method-override")}},a={};function s(t){var o=a[t];if(void 0!==o)return o.exports;var r=a[t]={exports:{}};return e[t](r,r.exports,s),r.exports}(()=>{const e=s(860),a=s(567);s(142).config();const t=process.env.PORT,o=e();console.log("production"),o.use(a("_method")),o.use(e.urlencoded({extended:!0})),o.use(e.static("public")),o.set("view engine","jsx"),o.engine("jsx",s(705).createEngine()),o.get("/",((e,a)=>{a.send("Welcome!")}));const r=s(791);o.use("/projects",r),o.get("*",((e,a)=>{a.send("404")})),o.listen(t,(()=>{console.log("creating at port",t)})),process.exit(0)})()})();
//# sourceMappingURL=index.js.map