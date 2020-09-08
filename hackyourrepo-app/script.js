"use strict";

function app() {
  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  const body = document.body;
  const rootElement = document.createElement("div");
  const header = document.createElement("header");
  const pHeader = document.createElement("p");
  const selectMenu = document.createElement("select");
  const mainContainer = document.createElement("main");
  const sectionContainer = document.createElement("section");
  const repoContent = document.createElement("div");
  const contributorsSection = document.createElement("section");
  const paragraphContributors = document.createElement("p");
  const conttributorsContent = document.createElement("div")

  rootElement.classList.add("root");
  header.classList.add("header");
  selectMenu.classList.add("selectMenu");
  mainContainer.classList.add("main-container");
  sectionContainer.classList.add("repo-container");
  repoContent.classList.add("repo-content");
  contributorsSection.classList.add("contributors-container")

  pHeader.textContent = "HYF Repositories";
  paragraphContributors.textContent = "Contributors";

  body.appendChild(rootElement);
  rootElement.appendChild(header);
  rootElement.appendChild(mainContainer);
  header.appendChild(pHeader);
  header.appendChild(selectMenu);
  mainContainer.appendChild(sectionContainer);
  mainContainer.appendChild(contributorsSection);
  sectionContainer.appendChild(repoContent);
  contributorsSection.appendChild(paragraphContributors);
  contributorsSection.appendChild(conttributorsContent);

  function fetchReposName() {
    axios(url)
      .then(res => {
        res.data.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
          if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
          return 0;
        });
        res.data.forEach(repo => {
          selectMenu.innerHTML += `<option >${repo.name}</option>`
          if (repo.name === selectMenu.value) {
            addElementToRepoContent(repo);
            addContributors(repo)
          };
        });
      })
      .catch(error => {
        mainContainer.innerHTML = `<p class="error">Network request failed</p>`
      })
  };

  fetchReposName();

  selectMenu.addEventListener("change", fetchRepoDetails);

  function fetchRepoDetails() {
    axios(url)
      .then(res => {
        const data = res.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === selectMenu.value) {
            addElementToRepoContent(data[i])
            addContributors(data[i])
          };
        };
      })
      .catch(error => console.log(error))
  };

  function addElementToRepoContent(obj) {
    const description = obj.description ? obj.description : "";
    repoContent.innerHTML =
      `<p><strong>Repository:</strong><a href="${obj.clone_url}" target="_blank"><span>${obj.name}</span></a></p>
         <p><strong>Description:</strong><span>${description}</span></p>
         <p><strong>Forks:</strong><span>${obj.forks}</span></p>
         <p><strong>Updated:</strong><span>${obj.updated_at.replace(/[ tz]/gi, ' ')}</span></p>`;
  };

  function addContributors(obj) {
    let content = "";
    axios(obj.contributors_url)
      .then(res => {
        res.data.forEach((contributor) => {
          content +=
            `<div class="contributors-card">
          <img src="${contributor.avatar_url}" alt="${contributor.login}s avatar">
          <a href="${contributor.html_url}" class="userName" target="_blank">${contributor.login}</a>
          <p >${contributor.contributions}</p>
          </div>`;
        });
        conttributorsContent.innerHTML = content;
      })
      .catch(error => console.log(error))
  }

}
app();