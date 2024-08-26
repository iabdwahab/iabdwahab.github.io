import { projects } from "./projects.js";

const projectsContainerEl = document.querySelector(".projects");

let html = "";

projects.forEach(project => {
  html += `
      <div  class="project-card">
        <img src="${project.projectImage}" alt="img" class="project-card__img" />
        <div class="project-card__info">
          <h3>
            <a href="${project.projectDemo}" target="_blank" class="project-card__title">
              ${project.projectName}
            </a>
          </h3>
          <p class="project-card__summary">${project.projectSummary}</p>
          <p class="project-card__technologies">${project.projectTechnologies.join(" - ")}.</p>
          <div class="project-card-info__links">
            <a href="${project.projectCode}" target="_blank">
              <img src="assets/icons/icon-github.png" alt="logo" class="project-card-info__link-icon" />
            </a>
            <a href="${project.projectDemo}" target="_blank">
              <img src="assets/icons/icon-external-link.png" alt="logo" class="project-card-info__link-icon" />
            </a>
          </div>
        </div>
      </div>
  `;
});

projectsContainerEl.innerHTML = html;