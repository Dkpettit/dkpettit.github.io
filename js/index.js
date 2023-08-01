// Select Elements
import data from '/resume.json' assert { type: 'json'};
const contentEL = document.querySelector(".content");
const json = JSON.stringify("resume.json");

// Render Products
function renderResume(){
      var jobsArr = data.jobs;
      var projArr = data.projects;
      var educationArr = data.education;
      var skillsArr = data.skills;
      var list;

      console.log(educationArr);
      contentEL.innerHTML += `<div class="center"><h3>Dave Pettit</h3></div>`
      contentEL.innerHTML += `<div class="center"><h4 class="resume-section-header">Experience</h4></div><hr>`
      
      jobsArr.forEach(element => {
        contentEL.innerHTML += `<section><div><a href=${element.company.website}><h3>${element.company.name}</h3></a></div>
        <span><strong>${element.positions[0].title}</strong></span><span><small>(${element.positions[0].duration})</small></span>
        <p>${element.description}</p><ul class="h" id="accomplishments-3"></ul></section>`

        list = `<li>${element.accomplishments.join("</li><li>")}</li>`;
      });
      document.getElementById("accomplishments-3").innerHTML = list;

      contentEL.innerHTML += `<section><div class="center"><h4 class="resume-section-header">Projects</h4></div><hr><div>`
      
      projArr.forEach(element =>{
        contentEL.innerHTML += `<div><h3>${element.name}</h3><p>${element.description}</p><a href="${element.code}">
        <span class="vertical-align">Check it out on Github</span></a></div>
        `
      })
      contentEL.innerHTML += `</div></section><section><div class="center"><h4 class="resume-section-header">Education</h4></div><hr>
      <div><h4>${educationArr.degree}</h4><p class="vertical-align">Graduated with Honours in 
      ${educationArr.graduated} from:</p><p class="center"><img src="./assets/fanshawe.png" alt=""></p></div></section>`;

      contentEL.innerHTML += `<section><div class="center"><h4 class="resume-section-header">Skills</h4></div><hr><div>
      <div class="skills-container"><div class="skills-element"><h5>Front End</h5><ul class="list-unstyled" id="frontend-list"></ul>
      </div><div class="skills-element"><h5>Back End</h5><ul class="list-unstyled" id="backend-list"></ul></div>
      <div class="skills-element"><h5>Tools</h5><ul class="list-unstyled" id="tools-list"></ul></div></div>`;

      var frontEndList = `<li>${skillsArr.Front_End.join("</li><li>")}</li>`;
     
      document.getElementById("frontend-list").innerHTML = frontEndList;

      var backEndList = `<li>${skillsArr.Back_End.join("</li><li>")}</li>`;
     
      document.getElementById("backend-list").innerHTML = backEndList;

      var toolsList = `<li>${skillsArr.Tools.join("</li><li>")}</li>`;
     
      document.getElementById("tools-list").innerHTML = toolsList;

}

$(document).ready(function(e){
    renderResume(); 
  });