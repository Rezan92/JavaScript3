"use strict";
import addDataToDom from "./util/contributorsAndDetails.js";
import createAndAppendElement from "./util/createAndAppend.js"

function app() {
  const URL = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  const body = document.body;
  const rootElement = createAndAppendElement("div", body, "root", false);
  const header = createAndAppendElement("header", rootElement, "header", false);
  const pHeader = createAndAppendElement("p", header, false, "HYF Repositories");
  const selectMenu = createAndAppendElement("select", header, "selectMenu");
  const mainContainer = createAndAppendElement("main", rootElement, "main-container");
  const sectionContainer = createAndAppendElement("section", mainContainer, "repo-container");
  const repoDetails = createAndAppendElement("div", sectionContainer, "repo-content");
  const contributorsSection = createAndAppendElement("section", mainContainer, "contributors-container");
  const paragraphContributors = createAndAppendElement("p", contributorsSection, false, "Contributors");
  const conttributorsContent = createAndAppendElement("div", contributorsSection);
  const btnContainer = createAndAppendElement("p", contributorsSection, "pagination");

  async function fetchReposName() {
    try {
      const res = await axios(URL);
      sortData(res.data);
      addDataToDom(res.data, selectMenu, true, repoDetails, conttributorsContent, btnContainer);
    } catch (error) {
      console.log(error)
      mainContainer.innerHTML = `<p class="error">${error}</p>`;
    };
  };

  selectMenu.addEventListener("change", fetchRepoDetails);

  async function fetchRepoDetails() {
    try {
      const res = await axios(URL);
      addDataToDom(res.data, selectMenu, false, repoDetails, conttributorsContent, btnContainer);
    } catch (error) {
      console.log(error)
      repoDetails.innerHTML = `<p class="error">${error}</p>`;
    };
  };

  function sortData(arr) {
    arr.sort(function (a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
      if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
      return 0;
    });
  };

  fetchReposName();
}
app();