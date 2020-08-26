"use strict";

const placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

function app() {
  const selectMenu = document.getElementById("selectMenu");
  const repoContent = document.getElementById("repo-content");

  placeholderRepos.forEach(repo => {
    selectMenu.innerHTML += `<option >${repo.name}</option>`
    if (repo.name === selectMenu.value) {
      addElementToRepoContent(repo);
    }
  });

  selectMenu.addEventListener("input", () => {
    for (let i = 0; i < placeholderRepos.length; i++) {
      if (placeholderRepos[i].name === selectMenu.value) {
        addElementToRepoContent(placeholderRepos[i])
      };
    };
  });

  function addElementToRepoContent(obj) {
    repoContent.innerHTML =
      `<p><strong>Repository:</strong><a href="#"><span>${obj.name}</span></a></p>
         <p><strong>Description:</strong><span>${obj.description}</span></p>
         <p><strong>Forks:</strong><span>${obj.forks}</span></p>
         <p><strong>Updated:</strong><span>${obj.updated}</span></p>`
  }
}



app();