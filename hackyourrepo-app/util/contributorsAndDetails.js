import createAndAppendElement from "./createAndAppend.js"
import pagination from "./pagination.js"

// "addDataToDom" will add elements to the dom.
export default function addDataToDom(arr, selectMenu, bool, repoDetails, conttributorsContent, main) {
  arr.forEach(repo => {
    if (bool) {
      selectMenu.innerHTML += `<option >${repo.name}</option>`;
    };
    if (repo.name === selectMenu.value) {
      addReposDetails(repo, repoDetails);
      addContributors(repo, conttributorsContent, main)
    };
  });
};

//1- "addReposDetails" function create elements using "createElements" function.
//2- It appends the created elements to elem(that happen with the help of the "createElements" function).
function addReposDetails(obj, elem) {
  const description = obj.description ? obj.description : "";
  const updatedAt = obj.updated_at.replace(/[ tz]/gi, ' ');
  elem.textContent = "";
  createElements(elem, "Repository:", obj.name, true, obj)
  createElements(elem, "Description:", description);
  createElements(elem, "Forks:", obj.forks);
  createElements(elem, "Updated:", updatedAt);
};

async function addContributors(obj, elem, main) {
  try {
    elem.innerHTML = "";
    const res = await axios(obj.contributors_url);
    pagination(res.data, elem, main);
  } catch (error) {
    console.log(error);
  };
};

// Every time we call this function it will create 4 elements using "createAndAppendElement" function 
function createElements(parent, strongContent, spanContent, bool, obj){
  const p = createAndAppendElement("p", parent);
  const strong = createAndAppendElement("strong", p, false, strongContent);
  if(bool){
    const a = createAndAppendElement("a", p);
    const span = createAndAppendElement("span", a, false, spanContent);
    a.setAttribute("href", obj.clone_url);
    a.setAttribute("target", "_blank");
  } else {
    const span = createAndAppendElement("span", p, false, spanContent);
  };
};